var express = require("express");
var path=require("path");
var session=require("cookie-session");
var usuariosRutas=require("./rutas/rutas");
require("dotenv").config();
//actualización de la aplicación
var app=express();
app.set("view engine", "ejs");
app.use("/misitio",express.static(path.join(__dirname,"/web")));
app.use(express.urlencoded({extended:true}));

app.use(session({
    secret: "auhdljoq#$%(-)",
    resave: false,
    saveUnitialized: true,
}));

app.use("/",usuariosRutas);

var port= process.env.PORT || 3000;

app.listen(port, ()=>{
    console.log("Servidor en http://localhost:"+port);
});