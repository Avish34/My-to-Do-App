var express=require('express');
var app=express();
var todocontroller=require('./Controllers/todocontrol');
// setup template
app.set('view engine','ejs');

// static file


app.use('/public/assets', express.static('public/assets'));
// fire controller
todocontroller(app);
// listen to port
app.listen(3000);
console.log('Listening to port 3000');





