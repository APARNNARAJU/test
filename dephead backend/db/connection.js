const mongoose=require('mongoose');
require('dotenv').config();
mongoose.connect(process.env.mongodb_url)
.then((res)=>{
    console.log(`connection established on port ${process.env.PORT} DB connected`);
})
.catch((err)=>{
console.log("Oh no! Error,err")
})