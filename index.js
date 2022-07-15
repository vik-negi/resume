const express = require("express");
const path = require("path");
const hbs = require("hbs");
const app = express();
const port = process.env.PORT || 3000;


const staticPath = path.join(__dirname,"/public");
const templatesPath = path.join(__dirname, "./templates/views");
const partialsPath = path.join(__dirname, "./partials/views");

app.set('view engine', "hbs");
app.set("views", templatesPath);
app.use(express.static(staticPath));
hbs.registerPartials(partialsPath);

app.use(express.urlencoded({extended: false}));

app.get('/',(req, res)=>{
    res.render('index');
})

app.listen(port, ()=>{});
