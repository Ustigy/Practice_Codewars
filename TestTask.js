function getContWithoutLeads() {
	let page = 1;
	let limit = 250;
	let arrCont = [];
	let f=true;

	while(f) {
	// for (page=1;page<=5;page++) {
		$.ajax({
			// url: '/api/v4/contacts',
			url: 'https://mdl.belosnezhka-pg.ru/amtst/',
			method: 'GET',
			async: false,
			data: {
				page: page,
				limit: limit,
				with: 'leads'
			}
		}).done(function(data) {
			if(!data) {
				console.log('Контактов нет');
				f=false;
				// console.log(arrCont);
				// return arrCont;
			} else {
				// console.log(data);
				let dataObj = JSON.parse(data);
				// console.log(dataObj)
				for (let i = 0; i < dataObj._embedded.contacts.length; i++) {
					if(!dataObj._embedded.contacts[i]._embedded.leads) {
						arrCont.push(dataObj._embedded.contacts[i]);
					}
				}
			}

			// console.log(arrCont);
			// console.log(Date.parse('2023-06-01'));
			//page++;

		}).fail(function(data) {
			console.log('Что-то пошло не так c получением контактов');
			console.log(data);
			f=false;
			return false;
		})
		// console.log(page);
		// console.log(f);
		page++;
		// console.log(arrCont);

	}
	// console.log(page);
	// console.log(arrCont);
	return arrCont;
}


function addTask(arrCont) {
	let completeTill = Date.parse('2023-06-01');

	for (let value of arrCont) {
		// let jsonTask = JSON.stringify(value);

		let send_json = {"entri_id":value.id,"text":"контакт без сделок","entity_type":"contacts","complete_till":completeTill}

		$.ajax({
			// url: '/api/v4/tasks',
			url: 'https://mdl.belosnezhka-pg.ru/amtst/',
			method: 'POST',
			dataType: 'json',
			contenttype: 'application/json',
			data: JSON.stringify(send_json)
		}).done(function(data) {
			console.log('222222');
			console.log(data);
			//let headers=xhr.getAllResponseHeaders();
			//console.log(headers);
			if (data === ''){
				console.log(data);
				console.log('Что-то пошло не так с созданием задачи');
			} else {
				console.log(data);
				console.log('Задача успешно создана');	
			}
			
		}).fail(function(data) {
			console.log(data);
			console.log('Fail Что-то пошло не так с созданием задачи');
		})

	}
}

console.log();
addTask(getContWithoutLeads());