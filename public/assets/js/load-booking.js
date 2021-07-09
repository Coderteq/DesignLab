async function getData() {
  let db = firebase.firestore();
  db.collection("Hospitals")
    .get()
    .then((snap) => {
      snap.forEach((element) => {
        db.collection("Hospitals")
          .doc(element.id)
          .collection("Dates")
          .get()
          .then((another_snap) => {
            //console.log(element.id);
            another_snap.forEach((element1) => {
              document.getElementById("table-body").innerHTML =
                document.getElementById("table-body").innerHTML +
                `<tr>
                  <td>${element.data().Name}</td>
                  <td>Kolkata</td>
                  <td>${element1.data().vaccineno}</td>
                  <td>${element1.data().date}</td>
                  <td>48/1F, Leela Roy Sarani, Gariahat Rd, Kolkata, West Bengal 700019</td>
                  <td>033 2461 9482</td>
              </tr>`;
              //console.log(element1.id);
            });
          });
      });
    });
  //   document.getElementById("table-body").innerHTML = "";
}
getData();
