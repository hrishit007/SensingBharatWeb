const express = require('express');
const morgan = require('morgan');
const _ = require('lodash');

const app = express();

app.set("view engine","ejs");
app.use(morgan("dev"));
app.use(express.static("public"));
app.use(express.urlencoded({extended: true}));

app.listen(3000);

app.get("/",(req,res)=>{
    res.render("index");
});

app.use((req,res)=>{
    res.status(404).render("404");
})