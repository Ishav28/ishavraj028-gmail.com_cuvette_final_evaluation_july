const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/Quizbuilderapp",{
    useNewUrlParser : true,
    useUnifiedTopology:true,
    useCreateIndex:true
}).then(()=>{
    console.log('Connected to MongoDB');
}).catch((e)=>{
    console.log('no connection');
})