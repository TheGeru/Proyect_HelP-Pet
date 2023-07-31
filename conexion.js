var Sequelize = require("sequelize");

var tablaClienteModelo = require("./models/tablaCliente");
var tablaCompraModelo = require("./models/tablaCompra");
var tablaDetalleModelo = require("./models/tablaDetalle");
var tablaPetModelo = require("./models/tablaPet");
var tablaProductModelo = require("./models/tablaProduct");
var tablaAdminModelo = require("./models/tablaAdmin");


require("dotenv").config();

var db = process.env.BD_MYSQL ;
var usuario = process.env.USUARIO_MYSQL ;
var password = process.env.PASSWORD_MYSQL ;
var host = process.env.HOST_MYSQL ;
var port = process.env.PORT_MYSQL ;


var conexion = new Sequelize(db, usuario, password, {
  host: host,
  port: port,
  dialect: "mysql",
  dialectOptions: {
    ssl: {
      sslmode: "require",
      rejectUnauthorized: true,
    },
  },
}); // creando un bojeto de sequalize
// var mysql2 = require("mysql2");

conexion.sync({ force: false }) // esta es una promesa
  .then(() => {
    console.log("Conectado a la base de datos");
  })
  .catch((err) => {
    console.log("Error al conectar a la base de datos " + err);
    });
    conexion.sync({ force: false }) 
    .then(()=>{
      console.log("Exito, estas en localhost");
    })
    .catch((err)=>{
      console.log("Error en localhost: " + err);
    });


//var cliente = tablaClienteModelo(conexion);
//var compra= tablaCompraModelo(conexion);
//var detalle = tablaDetalleModelo(conexion);
//var mascota = tablaPetModelo(conexion);
//var producto = tablaProductModelo(conexion);
//var administrador = tablaAdminModelo(conexion);

module.exports = {
  cliente: tablaClienteModelo(conexion),
  compra: tablaCompraModelo(conexion),
  detalle: tablaDetalleModelo(conexion),
  mascota: tablaPetModelo(conexion),
  producto: tablaProductModelo(conexion),
  administrador: tablaAdminModelo(conexion),
};
