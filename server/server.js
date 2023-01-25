const express = require('express')
const app = express()
const cors = require('cors')
const mongoose = require('mongoose')
app.use(express())
app.use(cors())
let PORT = 8080
app.use(express.json())
mongoose.set('strictQuery',false)

mongoose.connect(`mongodb+srv://nft-marketplace:bi3A8FulfZWxQuzI@cluster0.xtvensf.mongodb.net/?retryWrites=true&w=majority`).then(()=>{
    console.log("Connected MongoDB");
}).catch((error)=>{
    console.log(error);
})


const CourseSchema = new mongoose.Schema({
    title: String,
    desc: String,
    price: Number,
    author: String
})

const CourseModel = mongoose.model("Course", CourseSchema)


app.post("/api/courses",(req,res)=>{
   let newCourse = new CourseModel({
    ...req.body
   })
   newCourse.save().then(() => res.send({ message: "Course successfully created!", newCourse })).catch(error => res.status(500).send({ error }))
   
})

app.get("/api/courses",(req,res)=>{
    CourseModel.find(null,"title desc price author").exec((error,data)=>{
        if(error) return res.status(500).send({error})
        res.send(data)
    })
})

app.delete("/api/courses/:id",(req,res)=>{
    CourseModel.findByIdAndDelete(req.params.id)
    res.send("Course deleted!")
})

app.listen(PORT,()=>{
    console.log("Server running on" + PORT);
})