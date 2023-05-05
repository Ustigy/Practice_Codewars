widgetNameIntr = function() {
    var widget = this;
    this.code = null;

    this.yourVar = {};
    this.yourFunc = function() {};

    // вызывается один раз при инициализации виджета, в этой функции мы вешаем события на $(document)
    this.bind_actions = function(){
        //пример $(document).on('click', 'selector', function(){});
    };

    // вызывается каждый раз при переходе на страницу
    this.render = function() {
        let tel = document.querySelectorAll('[data-pei-code="phone"].js-linked-with-actions');
        for(let key of tel) {
            let phone_num = key.firstElementChild.firstElementChild.value;
        
            let span_l = document.createElement('span');
            span_l.innerHTML = '<svg class="tips-icon svg-icon svg-common--filter-search-dims"><use xlink:href="#common--filter-search"></use></svg>';
        
            let newStr = document.createElement('div');
            newStr.onclick = function(){
                window.open('https://google.com/search?q='+encodeURIComponent(phone_num),'_blank');
                window.open('https://ya.ru/search/?text='+encodeURIComponent(phone_num),'_blank');
            }
            newStr.className = "tips-item js-tips-item js-cf-actions-item ";
            newStr.appendChild(span_l);
        
            let p_text = document.createElement('p');
            p_text.innerHTML = ' &nbsp;Нагуглить';
            newStr.appendChild(p_text);
            key.lastElementChild.lastElementChild.appendChild(newStr);
        }
        
        let mail = document.querySelectorAll('[data-pei-code="email"].js-linked-with-actions');
        for(let key of mail) {
            let mail_adr = key.firstElementChild.lastElementChild.value;
        
            let newStr = document.createElement('div');
            let span_l = document.createElement('span');
        
            span_l.innerHTML = '<svg class="tips-icon svg-icon svg-common--filter-search-dims"><use xlink:href="#common--filter-search"></use></svg>';
        
            newStr.onclick = function(){
                window.open('https://google.com/search?q='+encodeURIComponent(mail_adr),'_blank');
                window.open('https://ya.ru/search/?text='+encodeURIComponent(mail_adr),'_blank');
            }
            newStr.className="tips-item js-tips-item js-cf-actions-item ";
            newStr.appendChild(span_l);
        
            let p_text = document.createElement('p');
            p_text.innerHTML = ' &nbspНагуглить!';
            newStr.appendChild(p_text);
            key.lastElementChild.lastElementChild.appendChild(newStr);
        }
    };

    // вызывается один раз при инициализации виджета, в этой функции мы загружаем нужные данные, стили и.т.п
    this.init = function(){

    };

    // метод загрузчик, не изменяется
    this.bootstrap = function(code) {
        widget.code = code;
        // если frontend_status не задан, то считаем что виджет выключен
        // var status = yadroFunctions.getSettings(code).frontend_status;
        var status = 1;

        if (status) {
            widget.init();
            widget.render();
            widget.bind_actions();
            $(document).on('widgets:load', function () {
                widget.render();
            });
        }
    }
};
// создание экземпляра виджета и регистрация в системных переменных Yadra
// widget-name - ИД и widgetNameIntr - уникальные названия виджета
yadroWidget.widgets['widget-name'] = new widgetNameIntr();
yadroWidget.widgets['widget-name'].bootstrap('widget-name');