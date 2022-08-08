const express = require("express");
const app = express();
const port = 8000;
const bodyParser = require("body-parser");

app.set("view engine", "ejs");
app.use(express.urlencoded({extended: true}));
app.use( bodyParser.json() );

const router = require("./routes");
app.use('/member', router);

app.listen(port, ()=>{
    console.log( "Server Port : ", port );
});
