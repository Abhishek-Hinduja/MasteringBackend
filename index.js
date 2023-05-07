import express from "express";


const server = express()

server.get("/", (req,res)=>{
    res.end("Hello you are Welcome In this so much solf loving self conscious word of Abhishek")
});

server.listen(4000, ()=>{
    console.log("Server is listening")
})