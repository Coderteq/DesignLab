function submitForm()
{
    const db=firebase.firestore()
    let name=document.getElementById('recipient-name').value
    let email=document.getElementById('recipient-email').value
    db.collection('Users').add({name:name,useremail:email}).then(pr=>{
        window.alert('submitted')
    })
}