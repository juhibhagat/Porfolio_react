const express = require("express");

const app = express();
const fs = require('fs');


app.listen(6000);


app.get("/products" ,(req , res)=>{
    res.send("file is found")
})

app.post("/products" ,(req , res)=>{
    res.send("file posted or added")
})

app.post('/products', (req, res)=>{
    fs.writeFileSync("testing.txt", "Hello Juhi");
    res.send("File created");
})

app.get('/products', (req, res)=>{
    const content = fs.readFileSync("testing.txt");
    res.send(content);
})

app.put('/products', (req, res)=>{
    fs.appendFileSync("testing.txt", "hello moti");
    res.send("file Updated");
})

app.delete('/products', (req, res)=>{
    fs.unlinkSync('testing.txt');
    res.send("file deleted");
})