import express, { urlencoded } from "express";
import path from "path";
import mongoose from "mongoose";

mongoose.connect("mongodb://127.0.0.1:27017",{
    dbName: "backend",
}).then(()=>{
    console.log("Database is Connected")
})

const messageSchema = new mongoose.Schema({
    name: String,
    email: String
})

const Message = mongoose.model("Message", messageSchema)

const app = express()

app.set("view engine", "ejs")

app.use(express.static(path.join(path.resolve(), "public")))
app.use(express.urlencoded({extended: true}))

app.get("/", (req,res)=>{
    res.render("index")
});


app.post("/", async(req,res)=>{
    await Message.create({name:req.body.name, email:req.body.email})
    res.render("success")
})

app.listen(4000, ()=>{
    console.log("Server is listening")
})