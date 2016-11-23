$( document ).ready(function() {
//Modal
	$('.modal').modal();

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

});

function f() {
	alert("teste");
}