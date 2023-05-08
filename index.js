import express from "express";
import fs from "fs";
import path from "path";

const app = express()

app.set("view engine", "ejs")

app.use(express.static(path.join(path.resolve(), "public")))

app.get("/", (req,res)=>{
    const data = {
        name : "Abhishek",
        department : "CSE"
    }
    res.render("index", data)
});

app.listen(4000, ()=>{
    console.log("Server is listening")
})