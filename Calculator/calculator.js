const express = require("express");
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.urlencoded({extended: true}));

app.get("/",(req, res)=>{
    res.sendFile(__dirname + "/index.html");
});

app.post("/", (req, res)=>{

    let num1 = Number(req.body.num1);
    let num2 = Number(req.body.num2);

    let result = num1 + num2;

    res.send("The result of the calculation is "+ result);
});

app.get("/bmicalculator", (req, res)=>{
    res.sendFile(__dirname + "/bmiCalculator.html");
});

app.post("/bmicalculator", (req, res)=>{
    let w= parseFloat(req.body.weight);
    let h= parseFloat(req.body.height);

    let bmi = w/(h*h);

    res.send("<h2>Your BMI is " + bmi+ "</h2>");
})

app.listen(3000, ()=>{
    console.log("Server is running on port 3000..");
});

