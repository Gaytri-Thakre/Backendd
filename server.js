
// server creation
// express instinct
require('dotenv').config()
const express = require("express");
// server initialized
const app = express();
const port = process.env.PORT;
// used to parse req.body in express ->PUT or POST
const bodyParser = require('body-parser');
// parse json data & add it to the request.Body object
app.use(bodyParser.json())

app.listen(process.env.PORT,()=>{
    console.log(`App listening on port ${port}`)
});

app.get('/',(req,res)=>{
    res.send("Hello World")
})
app.get('/login',(req,res)=>{
    
    const {name,brand} = req.body;
    console.log(name);
    console.log(brand);
    res.send(name)
})
app.post('/api/cars',(req,res)=>{
    const {name,brand} = req.body;
    console.log(name);
    console.log(brand);
    res.send("Cars data")
})
app.get('/api/cars', (req, res) => {
    // Handle GET request for /api/cars
    res.send("GET request for /api/cars");
});
