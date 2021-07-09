class Hospital {
  constructor(db, name) {
    this.name = function () {
      db.collection("Hospital")
        .where(name, "==", "name")
        .then((doc) => {
          return doc.data().name;
        });
      this.dates = function () {
        db.collection("Hospital")
          .doc(this.name)
          .collection.where(date, "==", "date")
          .then((snap) => {
            let arr = [];
            snap.forEach((element) => {
              arr.push(element.data().date);
            });
          });
      };
    };
  }
  publishDate(
    dates //dates is an array
  ) {
    i = 0;
    while (i > dates.length) {
      db.collection("Hospitals")
        .doc(uid)
        .collection("Dates")
        .add(dates[i])
        .then((pr) => {
          i++;
        });
    }
  }
}
