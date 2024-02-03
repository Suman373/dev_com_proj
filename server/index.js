const express = require('express');
require('dotenv').config();
const cors = require('cors');
const mongoose = require('mongoose');
const app = express();
const user = require('./routes/userRoutes');
const post = require('./routes/postRoute');
const auth = require('./routes/authRoute');
const PORT = process.env.PORT || 5000;


// middlewares
app.use(cors({
    credentials:true,
    origin:["http://localhost:5173"]
    // client port = 5173
}));
app.use(express.json());
app.use(express.urlencoded({extended:true}));

// routes
app.get('/',(req,res)=>res.send("Welcome to Devcom node server"));
app.use('/user',user);
app.use('/post',post);
app.use('/auth',auth);


const connectToDb = async () => {
    try {
        await mongoose.connect(process.env.MONGO_DB_URI);
        console.log("MongoDB connected successfully");

    } catch (error) {
        console.log(error);
        process.exit(1);
    }
}

connectToDb();

// listen to PORT
app.listen(PORT, console.log(`Server is running @ PORT ${PORT}`));