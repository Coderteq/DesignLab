firebase.auth().onAuthStateChanged((user) => {
  if (user) {
    // User is signed in,
    //
    var uid = user.uid; //unique for all user
    // ...
  } else {
    // User is signed out
    // ...
  }
});
