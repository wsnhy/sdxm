const path = require("path")
const express = require("express")
const app = express()

app.use(express.static(__dirname))

//修改路径
app.get("/apis/myApis",(req,res)=>{
  //把数据返回归去
  res.json(require("./data/package"))
})


app.get("/",(req,res)=>{
  res.sendFile(path.join(__dirname,"index.html"))
})




app.listen(3000,(err)=>{
  console.log("shop-server is starting on port 3000")
})
