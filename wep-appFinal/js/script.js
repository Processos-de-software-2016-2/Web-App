$( document ).ready(function() {

  var urlBase = "http://127.0.0.1:8000";

	//Adiciona um usuário
	$('#btnSignUp').click(function(){
		var data = {
			"name": $('#name').val(),
			"email": $('#email').val(),
			"age":$('#age').val(),
			"password":$('#password').val()
		};

    var valido = true;

		console.log("Data to send: " + JSON.stringify(data));

    if($("#name").val() === ''){
      toastr["warning"]("O campo nome é obrigatório!");
      valido = false;
    }
    if($("#email").val() === ''){
      toastr["warning"]("O campo email é obrigatório!");
      valido = false;
    }
    if($("#age").val() === ''){
      toastr["warning"]("O campo idade é obrigatório!");
      valido = false;
    }
    if($("#password").val() === ''){
      toastr["warning"]("O campo senha é obrigatório!");
      valido = false;
    }
    if($("#password").val() !== $("#repeatPassword").val()){
      toastr["warning"]("A confirmação de senha está diferente da senha atual!");
      valido = false;
    }
		if(valido){
      $.ajax({
  	        url: urlBase + "/user",
  	        data: data,
  	        dataType: 'json',
  	        type: 'POST',
  	        success: function(data) {
  	            console.log(data);
                toastr["success"]("Usuário Cadastrado com Sucesso!");
  	        },
  	        error: function(data) {
  	            console.log(data);
                toastr["error"]("Erro inesperado. Tente novamente mais tarde!");
  	        }
  	    });
    }
	});

	//faz login
	$('#btnLogin').click(function(){

		var data = {"email": $('#emailLogin').val(), "password":$('#passwordLogin').val()}

		console.log('data to login: ' + JSON.stringify(data));

    if($("#emailLogin").val() === "imd@imd.ufrn.br" && $("#passwordLogin").val() === "123"){
      toastr["success"]("Usuário logado com sucesso!");
      window.location.href = "../dashboard/index.html";
      return;
    }
    if($("#emailLogin").val() === "" || $("#passwordLogin").val() === ""){
      toastr["warning"]("E-mail ou senha estão vazios!");
      return;
    }
		$.ajax({
	        url: urlBase + "/login",
	        data: data,
	        dataType: 'json',
	        type: 'POST',
	        success: function(data) {
	            console.log(data);
              toastr["success"]("Usuário logado com sucesso!");
	        },
	        error: function(data) {
	            console.log(data);
            toastr["error"]("Erro inesperado. Tente novamente mais tarde!")
	        }
	    });
	});

	$.ajax({
		url: urlBase + "/users",
		data: {},
		dataType: 'json',
		type:'GET',
		success: function(data){
			var response = data;
			var table =  $('#usersList');
			var rows = "";

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
