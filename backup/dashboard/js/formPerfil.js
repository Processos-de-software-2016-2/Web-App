$(document).ready(function(){
    $("#buttonForm").click(function(){

    	if ($("#nome").val() == "" || 
    		$("#matricula").val() == "" || 
    		$("#email").val() == "" ) {
	        alert( "Algum campo está vazio" );
    	} else if ( $("#visibilidade:checked").val() == null ) {

			alert( "Escolha uma opção para marcar" );

    	} else {

    		/**
	
				área para enviar os dados

    		*/

    	}


    });
});