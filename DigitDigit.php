<?php

function square_digits($num): int {
  $str = "".$num;
  echo $str."\n";
  $r='';
  
  for($i = 0; $i < strlen($str); $i++) {
    echo $str[$i].' '.$i;
    $r .= intval($str[$i]) * intval($str[$i]);
  }
  
  return $r;
}

?>