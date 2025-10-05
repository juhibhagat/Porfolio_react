const express = require("express");


//initilize
const app = express();

app.listen(5000);

//get paye data
app.get("/" , (req , res)=>{
    res.send("i am juhi")
});

//post add kre
app.post("/" , (req , res)=>{
    res.send("i am juhi")
});
// update krna same url per
app.put("/" , (req , res)=>{
    res.send("update successfully")
});

app.delete("/",(req,res)=>{
    res.send("delete successfully ")
})