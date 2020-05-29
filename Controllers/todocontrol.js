 var bodyparser=require('body-parser');
 //var data=[{item:'Code'}];
 var mongoose=require('mongoose');
 mongoose.connect('mongodb+srv://avish_30:avish143@cluster0-kxnbw.mongodb.net/test?retryWrites=true&w=majority');
 // create Schema
 var todoSchema= new mongoose.Schema({
     item: String
     });
   
  var Todo=mongoose.model('Todo',todoSchema);



 var urlencodedParser = bodyparser.urlencoded({ extended: false });
 module.exports= function (app){
   app.get('/todo',(req,res)=>{
    Todo.find({},(err,data)=>{
        if (err)
            throw err;
            res.render('todo',{todo:data});
    });    
    
   }) ;
   
   app.post('/todo',urlencodedParser,(req,res)=>{
    var newTodo=Todo(req.body).save((err,data)=>{
        if (err) 
            throw err
        res.json(data);
    });
      
    });
    
    
    app.delete('/todo/:item',(req,res)=>{
       Todo.find({item: req.params.item.replace(/\-/g," ")}).remove((err,data)=>
       {
           if (err)
            throw err
           res.json(data); 
       });

    }) ;

 };