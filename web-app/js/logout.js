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
	  const btnLogout = document.getElementById('btnLogout');

	  btnLogout.addEventListener('click', e => {
	  	firebase.auth().signOut();
	  	window.location.replace("index.html");
	  });
}());