const express = require("express");
const colors = require("colors");
const morgan = require("morgan");    // show routes end point and time
const dotenv = require("dotenv");    // environment variaable
const connectDB = require("./config/Mdb");
const path = require("path");

//dotenv config
dotenv.config();

// Mongodb connection
connectDB(); 

//rest object
const app = express();

//middlewares
app.use(express.json());  // work same as body-parser
app.use(morgan('dev'));



//routes
app.use("/api/v1/user", require("./routes/userRoutes")); 
app.use('/api/v1/admin',require("./routes/adminRoutes"));
app.use('/api/v1/doctor',require("./routes/doctorRoutes"));

//Static files
app.use(express.static(path.join(__dirname,'./client/build')))

app.get('*',function(req,res){
  res.sendFile(path.join(__dirname,"./client/build/index.html"));
})

//port
const port = process.env.PORT || 8080;         // sending port as environment

//listen port
app.listen(port, () => {
    console.log(
      `Server Running in ${process.env.NODE_MODE} Mode on port ${process.env.PORT}`
        .bgCyan.white
    );
  });