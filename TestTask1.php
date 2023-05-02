<head>
<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">
<script defer src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-ka7Sk0Gln4gmtz2MlQnikT1wXgYsOg+OMhuP+IlRH9sENBO0LRn5q+8nbTov4+1p" crossorigin="anonymous"></script>
</head>

<?php
require_once(__DIR__ . '/vendor/autoload.php');

Introvert\Configuration::getDefaultConfiguration()->setApiKey('key', '23bc075b710da43f0ffb50ff9e889aed');

function getClients() {
    return [
        [
            'id' => 1,
            'name' => 'intrdev',
            'api' => '23bc075b710da43f0ffb50ff9e889aed'
        ],
        [
            'id' => 2,
            'name' => 'artedegrass0',
            'api' => 'wgkuemyfighxrthiergjb'
        ]
    ];
}


function sumDoneLeads($dateFrom, $dateTo, $api) {
    $count = 150;
    $offset = 0;
    $sum = 0;
    $status = [142];
    while ($count > 0) {
        try {
            $result = $api->lead->getAll([], $status, [], '', $count, $offset);
            if ($result['count']<$count){
                $count=0;
            }
            $offset += $count;
            
            foreach ($result['result'] as $k=>$v) {
                if ($v['date_close'] >= $dateFrom && $v['date_close'] <= $dateTo) {
                    $sum += $v['price'];
                } 
            }
        } catch (Exception $e) {
            echo 'Exception when calling LeadApi->getAll: ', $e->getMessage(), PHP_EOL;
        }
        
        sleep(1);
    }
    return $sum;
}

if (isset($_GET['date_from']) && $_GET['date_from'] != '') {
    $accounts = getClients();
    echo '
        <table class="table" width = "100%">
        <thead>
            <tr class="thead-dark">
                <th>ID клиента</th>
                <th>Название клиента</th>
                <th>Сумма успешных сделок за период с '.$_GET['date_from'].' по '.$_GET['date_to'].'</th>
            </tr>
        </thead>
    ';
    $all_sums = 0;
    foreach ($accounts as $k => $v) {
        try {
            Introvert\Configuration::getDefaultConfiguration()->setApiKey('key', $v['api']);
            $api = new Introvert\ApiClient();
            $result = $api->account->info();
            if ($result['count']!=0) {
                $client_sum = sumDoneLeads(strtotime($_GET['date_from']),strtotime($_GET['date_to']),$api);
                $all_sums += $client_sum;
                echo "<tr>";
                echo "<td>".$v['id']."</td>
                <td>".$v['name']."</td>
                <td>".$client_sum."</td>";
                echo "</tr>";
                $client_sum = 0;
            } else {
                echo '<tr class="table-warning">';
                echo "<td>".$v['id']."</td>
                <td>".$v['name']."</td>
                <td>Клиент неактивен. Невалидный ключ API</td>";
                echo "</tr>";
            }

        } catch (Exception $e) {
            echo '<tr class="table-warning">';
            echo "<td>".$v['id']."</td>
            <td>".$v['name']."</td>";
            echo '<td>Exception when calling AccountApi->info: ', $e->getMessage(), "</td></tr>";
        }
        unset($api);
        sleep(1);
    }
    echo '
        <tr>
        <td colspan="2" align="right">
            Сумма по всем клиентам за период:    
        </td>
        <td>
            '.$all_sums.'
        </td>
        </tr>
    </table>';
}

?>

<p>
    Выберите диапазон дат:
</p>
<form action="/" method="GET">
    <label for="date_from">Начало</label>
    <input type="date" name="date_from"/>
    <label for="date_to">Окончание</label>
    <input type="date" name="date_to"/>
    <input type="submit"/>
</form>