$(document).ready(function(){
    $('#cadastroHabilidade').click(function(){
    	
    	var table = document.getElementById('tableHabilidades');
		// Insert a row in the table at the last row
		var row = table.insertRow(0);

		var cell1 = row.insertCell(0);

		cell1.style.background = "#fed136";
		cell1.style.color = "#fff";
		cell1.innerHTML = $("#name").val();

    });

    $('#buscaHabilidade').click(function(){

    	var table = document.getElementById('tableHabilidades');
		// Insert a row in the table at the last row
		var row = table.insertRow(1);

		var cell1 = row.insertCell(0);
		var cell2 = row.insertCell(1);
		var cell3 = row.insertCell(2);

		cell1.innerHTML = "Joao";
		cell2.innerHTML = "joao@gmail.com";
		cell3.innerHTML = "(84) 9 98988484";

    });


});