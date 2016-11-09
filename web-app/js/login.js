function accountValidadeLogin(){

	// Get elements
	txtEmail = document.getElementById('txtEmail').value;
	txtPassword = document.getElementById('txtPassword').value;

	if(txtEmail == "" || txtPassword == ""){
		alert( "Algum campo está vazio" );
	} else {
	}

	window.location.replace("homepage/user_home_ok.html");

}

(function() {

	// Initialize Firebase
	  const config = {
	    apiKey: "AIzaSyBhN1iQoiGA9gqWFOY0q_YZ6If9NU26uSU",
	    authDomain: "meet-me-71582.firebaseapp.com",
	    databaseURL: "https://meet-me-71582.firebaseio.com",
	    storageBucket: "meet-me-71582.appspot.com",
	    messagingSenderId: "34907285468"
	  };
	  firebase.initializeApp(config);

	  // Get elements
	  const txtEmail = document.getElementById('txtEmail');
	  const txtPassword = document.getElementById('txtPassword');
	  const btnLogin = document.getElementById('btnLogin');

	  // Add login event
	  /*btnLogin.addEventListener('click', e => {
	  	// Get email and pass
	  	const email = txtEmail.value;
	  	const pass = txtPassword.value;
	  	const auth = firebase.auth();
	  	// Sign in
	  	const promise = auth.signInWithEmailAndPassword(email, pass);
	  	promise.catch(e => {
	  		window.location.replace("user_home_notok.html");
	  		console.log(e.message);
	  	});
	  });*/

	  // Add a realtime listener
	  firebase.auth().onAuthStateChanged(firebaseUser => {
	  	if(firebaseUser){
	  		console.log(firebaseUser);
	  		window.location.replace("homepage/user_home_ok.html");
	  	}
	  	else{
	  		console.log('not logged in');
	  	}
	  });
}());
