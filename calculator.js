const express=require("express");
const bodyParser=require("body-parser");

const app = express();
app.use(bodyParser.urlencoded({extended:true}));

app.get("/",function(req,res){
    res.sendFile(__dirname+"/index.html");
});

app.get("/bmiCalculator",function(req,res){
    res.sendFile(__dirname+"/bmiCalculator.html");
})

app.post("/bmiCalculator",function(req,res)
{
    var w=parseFloat(req.body.w);
    var h=parseFloat(req.body.h);
    var r= (w/(h*h));
    res.send("BMI is"+r);
})
app.listen('3000', function()
{
    console.log("server started on port 3000");
})