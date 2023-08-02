var rutas=require("express").Router();
const { where } = require("sequelize");
var {cliente} = require('../conexion');
var {producto} = require('../conexion');
var {administrador} = require('../conexion');

//-------------------------------------------------------------PROCESOS--------------------------------
rutas.get("/", (req, res)=>{
    res.render("inicio");
});

rutas.post("/capturarUsuario", (req, res)=>{
    cliente.create(req.body)
    .then(()=>{
        res.redirect("/inicioSesion");
    })
    .catch((err) =>{
        console.log("No se pudo insertar el registro", err);
        res.redirect("Registro");
    });
});

rutas.post("/capturarAdmin", (req, res)=>{
    administrador.create(req.body)
    .then(()=>{
        res.redirect("/sesionAdmin");
    })
    .catch((err)=>{
        console.log("Nose pudo acceder", err);
        res.render("/")
    });
});

rutas.post("/capturarProducto", (req, res)=>{
    producto.create(req.body)
    .then(()=>{
        res.redirect("/adminProducts");
    })
    .catch((err)=>{
        console.log("No se pudo registrar........", err);
        res.render("adminProducts")
    });
});

rutas.post('/validarUsuario', async (req, res)=>{
    const {nom_cli, pass_cli} = req.body;

    const usuarioClient = await cliente.findOne({where: {nom_cli} });

    if(usuarioClient){
        if(usuarioClient.pass_cli === pass_cli){
            res.redirect("pantallaCliente");
        } else {
            res.send('Contraseña Incorrecto')
        }
    } else {
        res.send('El usuario no existe, registrate primero')
    }
});

rutas.post('/validarAdmin', async(req, res)=>{
    const {nom_admin, clave_admin} = req.body;

    const usuarioAdmin = await administrador.findOne({where: {nom_admin} });

    if(usuarioAdmin){
        if(usuarioAdmin.clave_admin === clave_admin){
            res.redirect("accessAdmin")
        }else{
            res.send('Contraseña Incorrecta')
        }
    }else{
        res.send('El usuario no existe, registrese primero')
    }
});

rutas.get("/adminProducts", (req, res)=>{
    producto.findAll({where: {stat_pro: 1}})
    .then((data)=>{
        console.log("Mostrando..............");
        res.render("adminProducts", {producto:data});
    })
    .catch((err) =>{
        console.log("Err: " + err);
    });
});

rutas.get("/editarProductos/:id", (req, res) =>{
    producto.findByPk(req.params.id)
    .then((producto)=>{
        res.render("modificarProductos", {producto:producto});
    })
    .catch((err) =>{
        console.log("Error....... :("+ err);
        res.rendirect("accessAdmin")
    });
});

rutas.post("/modificarProductos", (req, res)=>{
    producto.update(req.body,{where: {id_pro:req.body.id_pro}})
    .then(()=>{
        res.redirect("accessAdmin");
    })
    .catch((err)=>{
        console.log("Err......."+ err);
        res.redirect("adminProducts")
    });
});

rutas.get("/borrarProducto/:id", (req, res)=>{
    producto.destroy({where:{id_pro:req.params.id}})//recuperar del url
    .then(()=>{
        res.redirect("/accessAdmin");
    })
    .catch((err)=>{
        window.alert("Error de conexion a la base de datos"+err);
    });
});
//----------------------------------------------------DEFINICION DE RUTAS -------------------------------

rutas.get("/registrarProductos", (req, res)=>{
    res.render("registroProducto")
});
rutas.get("/editarDatos", (req, res)=>{
    res.render("editarDatosClient")
});
rutas.get("/sesionAdmin", (req, res)=>{
    res.render("sesionAdmin")
});
rutas.get("/detalleProducto", (req, res)=>{
    res.render("detalleProducto")
});
rutas.get("/adminProducts", (req, res)=>{
    res.render("adminProducts")
});
rutas.get("/perfilAdmin", (req, res)=>{
    res.render("perfilAdmin");
});
rutas.get("/accessAdmin", (req, res)=>{
    res.render("accessAdmin")
});
rutas.get("/RegistroPet", (req, res)=>{
    res.render("RegistroPet")
});
rutas.get("/mascotas", (req, res)=>{
    res.render("mascotas")
});
rutas.get("/pantallaCliente", (req, res)=>{
    res.render("inicioAccess")
});
rutas.get("/market", (req, res)=>{
    res.render("market")
});
rutas.get("/inicioSesion", (req, res)=>{
    res.render("inicioSesion")
});
rutas.get("/Registro",(req, res)=>{
    res.render("Registro")
});
rutas.get("/Administradores", (req, res)=>{
    res.render("sesionAdmin")
});
rutas.get("/Clientes", (req, res)=>{
    res.render("sesionCliente")
});
rutas.get("/perfilCliente", (req, res)=>{
    res.render("perfilCliente")
});
rutas.get("/perfilMascota", (req, res)=>{
    res.render("perfilMascota")
});
module.exports=rutas;