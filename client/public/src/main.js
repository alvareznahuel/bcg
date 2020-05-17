var app = new Vue({
  el: '#app',
  data: {
    message: 'W.I.P.',
    user: null,
    signedin: false
  },
  methods: {
    checkAuth: function checkAuth() {
      console.log("checkAuth!")
      if(sessionStorage) {
        console.log("Hay sessionStorage!");
        this.user = sessionStorage.getItem("user");
        if(this.user) {
            this.signedin = true;
        } else {
            this.signedin = false;
        }
      } else {
        this.user = null;
        this.signedin = false;
      }
      console.log(this.signedin);
      return;
    } 
  }
})
function onSignIn(googleUser) {
  var profile = googleUser.getBasicProfile();
  console.log('ID: ' + profile.getId()); // Do not send to your backend! Use an ID token instead.
  console.log('Name: ' + profile.getName());
  console.log('Image URL: ' + profile.getImageUrl());
  console.log('Email: ' + profile.getEmail()); // This is null if the 'email' scope is not present.
  sessionStorage.setItem("user",profile.getName());
  app.checkAuth();
}
function signOut() {
    var auth2 = gapi.auth2.getAuthInstance();
    auth2.signOut().then(function () {
        console.log('User signed out.');
        sessionStorage.removeItem("user")
        app.checkAuth();
    });
}
