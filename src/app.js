
const express = require('express');
const app = express();

const bodyParser = require('body-parser');
const cors = require("cors");
const router = require('./routes/routing');
const dbsetup = require('./model/dbsetup');

app.use(cors());
app.use(bodyParser.json());
app.use('/',router);

app.get('/setupDB' ,async (req,res,next)=>{
    try {
        let data = await dbsetup.setupDb();
        res.send(data)
    } catch (err) {
        res.send("Error occurred during insertion of data here in app.js 'prashant fawade'")
    }
});

app.listen(7000);
console.log('server running on port 7000 !!!!!');
