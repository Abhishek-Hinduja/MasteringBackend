import http from "http";
import { lovecalculator } from "./feature.js";
import fs from "fs";

const home = fs.readFileSync("./index.html", ()=>{
    console.log("hello")
})


const server = http.createServer((req,res) => {
    if ((req.url) === "/"){
        res.end(`<h1>love percentage is ${lovecalculator()}</h1>`)
    }
    else if ((req.url) === "/about"){
        fs.readFileSync("./index.html", (err,data)=>{
            res.end(data)
        })
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
})

server.listen(5000, ()=>{
    console.log("Server is listening");
});