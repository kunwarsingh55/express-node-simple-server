const http = require('http')
const fs = require('fs')

const server = http.createServer((req, res) => {
    var url = req.url;
    //console.log(url);

    if (url === '/') 
        res.write(getFile("home.html"));
    
    else if (url === '/about')
        res.write(getFile("about.html"))
    
    else if (url === '/contact')
        res.write(getFile("contact.html"));

    else {
        //Serving Static Files
        try {
            res.write(getFile(url));
        }
        catch {
            console.log("Cannot get static file : " + url.slice(1));
        }
    }

    res.end();
});

function getFile(fname){
    let file = fs.readFileSync('../static/'+fname, "utf-8");
    return file;
}

server.listen(3000);