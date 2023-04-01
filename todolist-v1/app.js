//esversion:6


const express = require("express");
const app = express();
const date = require(__dirname + '/date.js');

const bodyParser = require("body-parser");

const items= ["Buy Food", "Eat Food", "Sleep"];
const workItems=[];

app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static('public'));

app.set('view engine', 'ejs');

app.get("/",function(req,res){
    
    var day = date.getDate();
    res.render('list', {listTitle: day, newItems: items});
});


app.post("/", function(req,res){
    var item =req.body.newToDo;

    //console.log(req.body.list);
    if (req.body.list === "Work Title") {
        workItems.push(item);
       
        res.redirect("/work");
    } else {
        items.push(item);
        res.redirect("/");
    }
      
});


app.get("/work",function(req,res){
    res.render('list', {listTitle: "Work Title", newItems: workItems});
});

app.get("/about",function(req,res){
    res.render('about');
});



app.listen(3000,function(){
    console.log("Server running on port 3000!");
});