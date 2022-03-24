//require the libary
const mongoose=require('mongoose');
// contact to db
mongoose.connect('mongodb://localhost/contact_list_db');
//acquire the connection
const db= mongoose.connection;
//error
db.on('error',console.error.bind(console,"error connecting to db"));
//open
db.once('open',function(){
    console.log("successfully connected")
})