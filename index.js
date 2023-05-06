const http = require("http");


const server = http.createServer((req,res) => {
    if ((req.url) === "/"){
        res.end("Welcome to the home page")
    }
    else if ((req.url) === "/about"){
        res.end("Welcome to the About page")
    }
    else if ((req.url) === "/contact"){
        res.end("Welcome to the contact page")
    }
    else if ((req.url) === "/favicon.ico"){
        res.end("Welcome to the cot page")
    }
    else{
        res.end("Invalid url")
    }  
    console.log(req.url)
})

server.listen(5000, ()=>{
    console.log("Server is listening");
});