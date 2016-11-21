$( document ).ready(function() {
   
	$('.datepicker').pickadate({
	   selectMonths: true, 
	   selectYears: 50, 
	   language: 'portuguese'
	});

	//Modal
	$('.modal').modal();

   	$('.slider').slider({full_width: true, indicators: false});

	
	//Sign Up user
	$('#btnSignUp').click(function(){
		var data = {
			'name': $('#name').val(),
			'email': $('#email').val(),
			'age':$('#age').val(),
			'password':$('#password').val()
		};

		console.log("Data to send: " + JSON.stringify(data));

		$.ajax({
	        url: "http://159.203.75.66:8000/user",
	        data: data,
	        dataType: 'json',
	        type: 'POST',
	        success: function(data) {
	            console.log(data);
	            Materialize.toast('Usuário Cadastrado com Sucesso', 2000);
	        },
	        error: function(data) {
	            console.log(data);
	            Materialize.toast('Erro inesperado. Tente novamente mais tarde!', 2000);
	        }
	    });
	});

	//sign in user
	$('#btnLogin').click(function(){

		var data = {'email': $('#emailLogin').val(), 'password':$('#passwordLogin').val()}

		console.log('data to login: ' + JSON.stringify(data));

		$.ajax({
	        url: "http://159.203.75.66:8000/login",
	        data: data,
	        dataType: 'json',
	        type: 'POST',
	        success: function(data) {
	            console.log(data);
	            Materialize.toast('Usuário logado com sucesso!', 2000);
				$('#login').modal('close');
	        },
	        error: function(data) {
	            Materialize.toast('Erro inesperado. Tente novamente mais tarde!', 2000);
	            console.log(data);
	        }
	    });		
	});

	$.ajax({
		url:"http://159.203.75.66:8000/users",
		data: {},
		dataType: 'json',
		type:'GET',
		success: function(data){
			var response = data;
			var table =  $('#usersList');
			var rows = "";

			console.log("Dados de resposta: " + JSON.stringify(response));

			for(var i = 0; i < response.length; i++){
				rows += "<tr>";
				rows += "<td>" + response[i].id + "</td>";
				rows += "<td>" + response[i].name + "</td>";
				rows += "<td>" + response[i].age + "</td>";
				rows += "<td>" + response[i].email + "</td>";
				rows += "</tr>";
			}
			table.find("tbody").html(rows);
		},
		error: function(data){
			console.log(data);
		}
	});

});


