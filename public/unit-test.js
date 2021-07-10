let test_user={uid:"Uid",name:'Supravo Jana',email:'s@gm.com',password:'123456',autobooking_stat:true,status:true}
let hospital={uid:'Uxhhdsi28912',email:'hos@gm.com',password:'123456',addr:'some address'}
class userclass
{   
    constructor(name,email,password)
    {
        this.id='UID'
        this.name=name
        this.email=email
        this.autbooking=true
        this.status=false
        this.password=password
    }
    setStatus(state)
    {
        this.status=state
    }
    getStatus()
    {
        return this.status
    }
    getCredentialBooking()
    {

    }
    checkBooking()
    {
        let doc=db.collection('Booking').where('id','==',this.id)
        if(doc.exists){
            return doc.data()
        }else{
            return false
        }
    }
}
// class hospital
// {
//     constructor(name,email,password,addr)
//     {
//         this.id='UId'
//         this.address=addr
//         this.name=name
//         this.email=email
//         this.password=password
//     }
//     addInventory(vaccine_no,date,vaccine_name)
//     {

//     }
//     checkInventory(){

//     }
// }
// class addInventory{
//     this.hospital_id
//     this.vaccine_no
//     this.date
//     this.vaccine_name
    
// }
class AutoBooking
{
    constructor(date)
    {
        this.date=date
        this.db=firebase.firestore()
    }
    getFeasibleHospital(user_id)
    {
        let snap=this.db.collection('Inventory').get().where('date','==',this.date)
        let arr=[]
        snap.forEach(element => {
            arr.push(element.data().name)
        });
    }
    Book()
    {
        let userSnap=this.db.collection('Users').get().where('autobooking_status','==','true')
        userSnap.forEach(element => {
            let hosp=this.getFeasibleHospital(element.id)
            feas=hosp[0]
            return this.db.collection('Booking').doc(booking_uid).set(user)
        });
    }
}
class Book
{
    constructor(user,hospital,inv_id)
    {
        this.user_uid=user.uid
        this.hosp_uid=hospital.uid
        this.booking_id='SOme uid'//random uid generator
        this.inv_id=inv_id
    }
    checkInventory(state)
    {
        return state
    }
   makeBooking()
   {let data={}
       if(this.checkInventory(true))
       {
           
           data.user_uid=this.user_uid
            data.hosp_uid=this.hosp_uid
            data.booking_id=this.booking_id
            data.inv_id=this.inv_id
            data.state=true
       }else{
        data.user_uid=this.user_uid
        data.hosp_uid=this.hosp_uid
        data.booking_id=this.booking_id
        data.inv_id=this.inv_id
        data.state=false
       }
       return data
   } 
}
let book=new Book(test_user,hospital,'UIDINV')
let booking1=book.makeBooking()
console.log(booking1)