const express= require("express");
const { dirname } = require("path");
const path = require("path");
const port= 8000;

// require the mongoose 
const db= require('./config/mongoose');

//require the contact from model
const Contact= require('./models/contact');




const app= express();
app.set('view engine','ejs');
app.set('views',path.join(__dirname,"views"));
app.use(express.urlencoded());
app.use(express.static('assets'));

// var contactList= [
  
// ];
app.get('/',function(err,res){


Contact.find({},function(err,Contact){
    if(err){
        console.log('error');
        return;
    }
    return res.render('home',{
        title:"contact list",
        contact_list:Contact

    
    
    });
})





  
   
})
app.get('/practice',function(req,res){
return res.render('practice',{
    title:"practie"
})

});
app.post('/create-contact',function(req,res){

// contactList.push(
//     req.body
// )

Contact.create({
    name:req.body.name,
    phone:req.body.phone

}, function(err,newContact){

  if(err){
      console.log('err');
      return;
  }
  console.log("new contact has been created",newContact);
  return res.redirect('back')
})




})







app.get('/delete-contact/', function(req,res){

// get the id from the url of t he data base
let id=req.query.id;
console.log(id);

// serahing and deletinh the contact by the id
Contact.findByIdAndDelete(id,function(err){
    if(err){
        console.log("err");
        return;
    }

    return res.redirect('back')
})



// let contactIndex= contactList.findIndex(contact=>contact.phone==phone);
// if(contactIndex!=-1){
//     contactList.splice(contactIndex,1);
// }



})

app.listen(port, function(err){
    if(err){
        console.log("err",err);
        return;
    }
    console.log('yup server is running');
})