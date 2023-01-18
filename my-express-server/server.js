const express = require("express");
const app = express();

app.get("/", function(request, response){
    response.send("<h1>Hello, World!</h1>");
})

app.get("/contact", (req, res)=>{
    res.send("<h3>Contact me at: meg@gmail.com</h3>")
})

app.get("/about", (req, res)=>{
    res.send("My name is Megha and I love to dance and code")
})

app.get("/hobbies", (req, res)=>{
    res.send("<ul><li>Painting</li><li>Musics</li></ul>")
})

app.listen(3000, ()=>{
    console.log("Server started on port 3000");
})