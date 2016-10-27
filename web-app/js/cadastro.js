(function() {

	// Initialize Firebase
	var config = {
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
	const btnSignUp = document.getElementById('btnSignUp');
	const btnLogout = document.getElementById('btnLogout');
	  
	// Add signup event
	btnSignUp.addEventListener('click', e => {
	  	// Get email and pass
	  	const email = txtEmail.value;
	  	const pass = txtPassword.value;
	  	const auth = firebase.auth();
	  	console.log(email);
	  	console.log(pass);
	  	// Sign in
	  	const promise = auth.createUserWithEmailAndPassword(email, pass);
  		promise.catch(e => console.log(e.message));
  		
	  	window.location.replace("login.html");
  	});
}());