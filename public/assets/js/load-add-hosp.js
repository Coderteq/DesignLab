async function addSlot() {
  let db = firebase.firestore();
  let hospuid = "UMHwoh4w3e0uTP5qidge"; //to be fetched from auth system
  let data = getData();
  db.collection("Hospitals")
    .doc(hospuid)
    .collection("Dates")
    .add(data)
    .then((pr) => {
      console.log("done");
    });
}
function getData() {
  let date = document.getElementById("date").value;
  let startdate = document.getElementById("timeStart").value;
  let end = document.getElementById("timeEnd").value;
  let num = document.getElementById("vaccineNo").value;
  let data = {};

  data.date = date;
  data.start = startdate;
  data.end = end;
  data.vaccineno = num;
  console.log(data);
  return data;
}
