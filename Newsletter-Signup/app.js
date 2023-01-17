const express = require("express");
const bodyParser = require("body-parser");
const request = require("request");
const https = require("https");

const app = express();

app.use(express.static("public"));
app.use(bodyParser.urlencoded({extended: true}));
app.get("/", (req, res)=>{
    res.sendFile(__dirname + "/signup.html");
})

app.post("/",(req, res)=>{
    let firstName = req.body.fName;
    let lastName  = req.body.lName;
    let email = req.body.email;

    var data = {
        members : [
            {
                email_address: email,
                status : "subscribed",
                merge_fields: {
                    FNAME: firstName,
                    LNAME: lastName
                }
            }
        ]
    };

    const jsonData = JSON.stringify(data);

    const url = "https://us21.api.mailchimp.com/3.0/lists/a3aed29fe8";
    const options = {
        method: "POST",
        auth: "meg32:a6578359e5139c7b3d159df219c130f7-us21"
    };

    const request = https.request(url, options, (response)=>{

        if(response.statusCode === 200){
            res.sendFile(__dirname+ "/success.html");
        }
        else{
            res.sendFile(__dirname + "/failure.html");
        }

        response.on("data", (data)=>{
            console.log(JSON.stringify(data));
        })
    })

    request.write(jsonData);
    request.end;



    console.log(firstName, lastName, email);
})

app.post("/failure", (req, res)=>{
    res.redirect("/");
})

app.listen(3000, ()=>{
    console.log("server is running on port 3000");
});




//API Key- a6578359e5139c7b3d159df219c130f7-us21
//listid- a3aed29fe8