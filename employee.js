var Express =require('express');
var Bodyparser =require('body-parser');
var mongoose=require('mongoose');
var app=Express();
app.use(Bodyparser.urlencoded({extended:false}));
const employeeSchema= new mongoose.Schema({
    empCode:String,
    empName:String,
    empCompany:String,
    empEmail:String,
    empPhone:Number,
    empPassword:String
});myjsonprograms
var employeeModel= mongoose.model('Employees',employeeSchema);
mongoose.connect("mongodb+srv://shinyjoseph:shiny@cluster0-ybmpu.mongodb.net/test?retryWrites=true&w=majority");

app.get('/',(req,res)=>{
    res.send("Hai...");
});
app.post('/register',async(req,res)=>{
    try
    {
        var employeeData= new employeeModel(req.body);
        var result =await employeeData.save();
        res.json(result);
    }
    catch (error) {
        console.log(error);
        res.status(500).send(error);
    }
});
app.post('/login',async(req,res)=>{
    try {
        var employeeCode = req.body.empCode;
        var employessPassword= req.body.empPassword;
        res.json({"status": "sucess" })
    } catch (error) {
        res.json({"status": "failed" });

             }
});
app.listen(process.env.PORT || 3000,()=>{
    console.log("server started");
});