//import the modules
//require() function used to import the modules
const express = require("express");
const mongodb = require("mongodb");
const cors = require("cors");


//create the rest object
const app = express();
//where "app" is the rest object
//where "app" object used to develop the rest apis.
//GET,POST,PUT,DELETE,......


//enable the cors policy
app.use( cors() );


//set the MIME Type
app.use( express.json() );



//create the reference variable to connect to mongodb database
const mean = mongodb.MongoClient;
//where "mean" is the reference variable to connect to "mongodb" database



//create the get request
app.get("/products",(req,res)=>{
    mean.connect("mongodb+srv://admin:admin@miniprojectdb.nzphu.mongodb.net/ui-11am?retryWrites=true&w=majority",(err,connection)=>{
        if(err) throw err;
        else{
            const db = connection.db("ui-11am");
            db.collection("products").find().toArray((err, array)=>{
                if(err) throw err;
                else{
                    res.send(array);
                }
            })
        }
    });
});


//assign the port number
app.listen(8080,()=>{
    console.log("server listening the port number 8080");
});
