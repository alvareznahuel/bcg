var app = new Vue({
  el: '#app',
  data: {
    user: null,
    signedin: false,
    stage: 0,
    gamecode: "XDFTDO"
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
    },
    createGame: function createGame() {
        this.stage = 2;
        return;
    },
    joinGame: function joinGame() {
        this.stage = 3;
        return;
    },
    setupGame: function setupGame() {
        alert("Defining game attributes...");
        this.stage = 4;
        return;
    },
    signinGame: function signinGame() {
        alert("Checking game code...");
        this.stage = 5;
        return;
    },
    initGame: function initGame() {
        alert("Activating the defined game...");
        this.stage = 5;
        return;
    },
    startGame: function startGame() {
        alert("Launching the game board...");
        this.stage = 6;
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
  