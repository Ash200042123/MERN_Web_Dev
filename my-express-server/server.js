//esversion:6


const express = require("express");

const app = express();

app.get("/",function(req,res){
    //console.log(req);
    res.send("HEllO");
});

app.get("/contact",function(req,res){
    //console.log(req);
    res.send("HEllO");
});



app.get("/about",function(req,res){
    res.send("I am Ashfaq!");
});

app.listen(3000,function(){
    console.log("started!");
});