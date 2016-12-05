$(document).ready(function(){

	$('.bootstrap-tagsinput input').css('display','none');
	$('.label-info').css('font-size','105%');

	$('#cadastroHabilidade').click(function(){

		var numeroinicial = $( ".label-info" ).length;
		var novatag = $('#name-habilidade').val();
		$('#tag-input-habilidades').tagsinput('add', novatag);
		var numerofinal = $( ".label-info" ).length;
		if(numerofinal > numeroinicial){
			$('.label-info').last().css("display","none");
			$('.label-info').last().fadeIn("slow");
			$('#name-habilidade').val("");
		}

		//Mandando para a API...
	});

	/*CADASTRAR HABILIDADES OLD
	$('#cadastroHabilidade').click(function(){

    	var table = document.getElementById('tableHabilidades');
		// Insert a row in the table at the last row
		var row = table.insertRow(0);

		var cell1 = row.insertCell(0);

		cell1.style.background = "#fed136";
		cell1.style.color = "#fff";
		cell1.innerHTML = $("#name-habilidade").val();

    });
	*/

	$('#name-habilidade').keyup(function(e){
		if(e.keyCode == 13)
		{
			$(this).trigger("enterKey");
		}
	});

	$('#name-habilidade').bind("enterKey",function(e){
		$('#cadastroHabilidade').click();
	});


	/*
    $('#buscaHabilidade').click(function(){

    	var table = document.getElementById('tableHabilidades');
		$('#tableHabilidades').css('color','white');
		// Insert a row in the table at the last row
		var row = table.insertRow(1);

		var cell1 = row.insertCell(0);
		var cell2 = row.insertCell(1);
		var cell3 = row.insertCell(2);

		cell1.innerHTML = "Joao";
		cell2.innerHTML = "joao@gmail.com";
		cell3.innerHTML = "(84) 9 98988484";

    });*/

	$('#editarPerfil').click(function(){
		var data2 = {
			"interests": [],
			"name": "Stefanocwegweg",
			"skills": [],
			"age": 20,
			"id": 130,
			"password": "",
			"email": "stefano@teste.com"
		}

		var data = {
			'name': 'O LINDAO',
			'email': 'luizarthurfreire@gmail.com',
			'age': '22',
			'password': 'senha123'
		};

		console.log("Data to send: " + JSON.stringify(data2));

		$.ajax({
			url: "http://159.203.75.66:8000/user",
			data: data2,
			dataType: 'json',
			type: 'POST',
			success: function(data2) {
				console.log(data2);
				//Materialize.toast('Usuário Cadastrado com Sucesso', 2000);
			},
			error: function(data2) {
				console.log(data2);
				//Materialize.toast('Erro inesperado. Tente novamente mais tarde!', 2000);
			}
		});
	});

	$('#buscaHabilidade').click(function(){
		var texto = "Pessoas que tem habilidade em ";
		var habilidade = $('#skill-searched').val();
		texto = texto + '"' + habilidade + '"';

		if(habilidade != ""){
			$('#div-habilidade-desejada').text(texto);
			$('#painel-matches').css("display","block");
		}

	});

	$('#skill-searched').keyup(function(e){
		if(e.keyCode == 13)
		{
			$(this).trigger("enterKey");
		}
	});

	$('#skill-searched').bind("enterKey",function(e){
		$('#buscaHabilidade').click();
	});
});

