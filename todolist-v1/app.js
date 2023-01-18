/*
The app.get() function routes the HTTP GET Requests to the path which is being specified with the specified callback functions. Basically it is intended for binding the middleware to your application.
Syntax: 
 
app.get( path, callback )
Parameters: 
 
path: It is the path for which the middleware function is being called.  
callback: They can be a middleware function or series/array of middleware functions.
*/


const express = require("express");
const bodyParser = require("body-parser");

const app = express();

let items =["Buy Food", "Cook Food", "Eat Food"];
app.set("view engine", "ejs");

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));

app.get("/", function(req, res){

    let today = new Date();
  
    let options = {
        weekday : "long",
        day: "numeric",
        month: "long"
    };

    let day = today.toLocaleDateString("eng-US", options);
    

    res.render("list", {listTitle: day, newListItems: items});
});

app.post("/", (req, res)=>{
    let item = req.body.newItem;
    items.push(item);
    res.redirect("/");
});



app.listen(4000, function(){
    console.log("Server started on port 4000");
})