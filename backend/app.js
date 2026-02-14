const express = require("express");
const app = express();
const aiRoutes = require("./routes/ai.routes")
const morgan = require("morgan")


app.use(express.json())
app.use(morgan())



app.get("/",(req,res)=>{
    res.send("hello world")
})

app.use("/ai",aiRoutes)

module.exports = app