// todo => use a key to track the current video, or just pass the video in as a ref to the function and grab its source

var vm = new Vue({
  el: "#app",

  data: {
// mock up the user - this well eventually come from the database UMS (user management system)
    user: {
      isAdmin: true,
      isLoggedIn: true,
      avatar: 'thor.png'
    },

    // this data would also come from the database, but we'll just mock it up for now
    videodata: [
      { name: "Star Wars The Force Awakens", thumb: "forceawakens.jpg", vidsource: "forceawakens.mp4", description: "yet another star wars movie" },
      { name: "Stranger Things", thumb: "strangerthings.jpg", vidsource: "strangerthings.mp4", description: "don't get lost in the upside down" },
      { name: "Marvel's The Avengers", thumb: "avengers.jpg", vidsource: "avengers.mp4", description: "will they make black widow action figures this time?" }
    ],

    showDetails: false
  },

  methods: {
    logInOut() {
      // test the login / logout_> button should change color, eventually we'll use routihng component
      console.log('do login / logout on click');
      // ? = if else statement
      //evaluate the expression; if its true, use the value to the left of the colon, 
      // if false use value to the right of the colon
      this.user.isLoggedIn  = (this.user.isLoggedIn) ? false : true;
    },
    setUserPrefs() {
      console.log('set up prefs via routing and probably a component');
    }
  }
});
