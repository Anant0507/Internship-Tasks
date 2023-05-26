const express = require("express");
const app = express();
const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
mongoose.connect("mongodb://127.0.0.1:27017/BookStoreUser")
.then(() => console.log("Connection Successfull..."))
.catch((err) => console.log("Error Occured..."));

const mySchema = mongoose.Schema({
    firstname:{
        type:String,
        required:true
    },
    lastname:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    role:{
        type:String,
        required:true,
    },
    password:{
        type:String,
        required:true,
    }
});

const UserCollection = new mongoose.model("usercollection",mySchema);
// app.use(express.urlencoded({extended:true}));
app.use(express.json());
app.get("/",async (req, res) => {
    res.send("Hello From Backend");
}); 
app.post("/api/register", async (req, res) => { 
    const userData = {
        firstname : req.body.firstname,
        lastname : req.body.lastname,
        email : req.body.email,
        role : req.body.role,
        password : await securePassword(req.body.password)
    }

    const userRegistrationData = UserCollection(userData);
    const result = await userRegistrationData.save();
    console.log(result);
    res.send("Data recieved successfully...");
});
const securePassword = async (password) => {
    const encrypt_password = await bcrypt.hash(password,10);
    return encrypt_password;
}
app.post("/api/login", async (req, res) => {
    console.log(req.body);
    const userLoginData = await UserCollection.find({email:req.body.email});
    const isMatch = await bcrypt.compare(req.body.password,userLoginData[0].password);
    console.log(isMatch);
    if(isMatch)
    {
        res.send("Login successfull");  
    }
});

app.listen(8000,() => console.log("listening at port 8000"));