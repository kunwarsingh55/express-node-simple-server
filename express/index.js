const express = require('express');
const app = express();
var path = require('path');

//To serve static files such as images, CSS files, and JavaScript files, 
//use the express.static built-in middleware function in Express
app.use(express.static('../static'));


app.get('/', (req, res)=>{
    //res.sendFile("");
    res.sendFile(path.resolve('../static/home.html'));
})

app.get('/about', (req, res)=>{
    //res.sendFile("");
    res.sendFile(path.resolve('../static/about.html'));
})

app.get('/contact', (req, res)=>{
    //res.sendFile("");
    res.sendFile(path.resolve('../static/contact.html'));
})

app.listen(3000, ()=>{
    console.log("Server listening on port 3000");
})