import { Console } from "console";
import express, { urlencoded } from "express";
import fs from "fs";
import path from "path";

const app = express()
const arr = []

app.set("view engine", "ejs")

app.use(express.static(path.join(path.resolve(), "public")))
app.use(express.urlencoded({extended: true}))

app.get("/", (req,res)=>{
    res.render("index")
});

app.get("/json", (req,res)=>{
    res.json({
        arr
    })
})

app.post("/", (req,res)=>{
    arr.push({
        name : req.body.name,
        email : req.body.email
    })
    res.render("success", {arr})
})

app.listen(4000, ()=>{
    console.log("Server is listening")
})