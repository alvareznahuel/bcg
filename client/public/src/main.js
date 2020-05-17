var app = new Vue({
  el: '#app',
  data: {
    message: 'W.I.P.'
  }
})
if(sessionStorage) {
  checkAuth()
} else {
    alert("No soporta session storage")
}
function checkAuth() {
    var user = sessionStorage.getItem("user")
    if(user) {
        document.getElementById("auth").innerHTML = "<p>Player: <b>" + user + "</b></p><a href='#'' onclick='signOut();''>Sign out</a>"
    } else {
        document.getElementById("auth").innerHTML = "<div class='g-signin2' data-onsuccess='onSignIn'></div>"
    } 
}
function onSignIn(googleUser) {
  var profile = googleUser.getBasicProfile();
  console.log('ID: ' + profile.getId()); // Do not send to your backend! Use an ID token instead.
  console.log('Name: ' + profile.getName());
  console.log('Image URL: ' + profile.getImageUrl());
  console.log('Email: ' + profile.getEmail()); // This is null if the 'email' scope is not present.
  sessionStorage.setItem("user",profile.getName());
  checkAuth();
}
function signOut() {
  var auth2 = gapi.auth2.getAuthInstance();
  auth2.signOut().then(function () {
    console.log('User signed out.');
    sessionStorage.removeItem("user")
    checkAuth();
    location.reload();
  });
}
