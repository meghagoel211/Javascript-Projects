//openWeather API key : 8c4738c1b09940aa27a46b230d7e285f

const express = require("express");
const https = require("https");

const app = express();


app.get("/", function(req, res){
    
    const url = "https://api.openweathermap.org/data/2.5/weather?q=Delhi&appid=8c4738c1b09940aa27a46b230d7e285f&units=metric";
    https.get(url, function(response){
        console.log(response.statusCode);

        response.on("data", (data)=>{
            const weatherData = JSON.parse(data);
            console.log(weatherData);
            const temp = weatherData.main.temp;
            const desc = weatherData.weather[0].description;
            console.log(desc);
            // res.send("<h1>The temperature in "+ weatherData.name + " is " + temp + " degree Celcius.</h1>")
            res.write("<h1>The temperature in "+ weatherData.name + " is " + temp + "degree Celcius.</h1>")
            res.write("<p> The weather is currently " + desc + "</p>")
            const iconUrl = "http://openweathermap.org/img/wn/" + weatherData.weather[0].icon + "@2x.png";
            res.write("<img src="+ iconUrl +">")

            })
            
            res.send()

        })
    })
})

app.listen(3000, function(){
    console.log("Server is running on port 3000");
})