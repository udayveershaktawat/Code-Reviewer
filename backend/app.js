const express = require("express");
const app = express();
const aiRoutes = require("./routes/ai.routes")
const morgan = require("morgan")
const cors = require('cors')


app.use(express.json())
app.use(morgan())


app.use(cors({
  origin: [
    "http://localhost:5173",
    "https://code-reviewer-ochre-two.vercel.app"
  ]
}));

app.get("/",(req,res)=>{
    res.send("hello world")
})

app.use("/ai",aiRoutes)

module.exports = app