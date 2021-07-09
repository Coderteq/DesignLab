firebase
  .auth()
  .signInWithEmailAndPassword(email, password)
  .then((userCredential) => {
    // Signed in
    var user = userCredential.user;
    //userCredential object contain all the details about the user
  })
  .catch((error) => {
    var errorCode = error.code;
    var errorMessage = error.message;
  });
