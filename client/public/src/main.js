var app = new Vue({
  el: '#app',
  data: {
    message: 'W.I.P.',
    user: null,
    signedin: false,
    stage: 0
  },
  methods: {
    checkAuth: function checkAuth() {
      //console.log("checkAuth!")
      if(sessionStorage) {
        //console.log("Hay sessionStorage!");
        this.user = sessionStorage.getItem("user");
        if(this.user) {
            this.signedin = true;
            this.stage = 1;
        } else {
            this.signedin = false;
            this.stage = 0;
        }
      } else {
        this.user = null;
        this.signedin = false;
        this.stage = 0;
      }
      //console.log(this.signedin);
      return;
    } 
  }
})
function onSignIn(googleUser) {
    var profile = googleUser.getBasicProfile();
    //console.log('ID: ' + profile.getId()); // Do not send to your backend! Use an ID token instead.
    //console.log('Name: ' + profile.getName());
    //console.log('Image URL: ' + profile.getImageUrl());
    //console.log('Email: ' + profile.getEmail()); // This is null if the 'email' scope is not present.
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
  