class booking {
  constructor() {
    db = firebase.firestore();
  }
  getDate() {
    var d = new Date();
    return d.getDate();
  }

  // Method
  getSlotsHospital() {
    return db
      .collection("Hospital")
      .get()
      .then((snap) => {
        let id;
        let data;
        snap.forEach((element) => {
          data = element.data();
          id = element.id;
          db.collection("Hospital")
            .doc(element.id)
            .collection("Dates")
            .where("date", ">", this.getDate());
        });
      });
  }
  getPerfectDate(data1) {
    return db
      .collection("Users")
      .doc(data1.id)
      .get()
      .then((doc) => {
        let data = doc.data();
        if (data.date > data1.date) {
          //type check required
          return data.date;
        } else {
          return data1.date;
        }
      });
  }
  getPerfectHospital(data) {
    return this.getSlotsHospital.then((snap) => {
      snap.foreach((element) => {
        data1 = element.data();
        id = element.id;
        if (data.date > data1.date) {
          return data.date;
        } else {
          return data1.date;
        }
      });
    });
  }
  getFinalBooking() {
    this.getPerfectHospital();
  }
  setAppointment() {}
}
