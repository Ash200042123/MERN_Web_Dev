const express= require("express");
const https = require("https");


const app= express();

app.get("/",function(req,res){
    //res.send("Hello");

    const url = "https://api.openweathermap.org/data/2.5/weather?appid=ccf1036bb6aabc6e515c140cb9c4dc0a&lat=23.873751&lon=90.396454&units=metric";
    https.get(url, function(response){
        
        response.on("data",function(data){
            const weatherData = JSON.parse(data);
            const temp = weatherData.weather[0].description;
            res.send("<h1>" + temp + "</h1>");
        });
    });
});



app.listen(3000, function(){
    console.log("Server is running");
});