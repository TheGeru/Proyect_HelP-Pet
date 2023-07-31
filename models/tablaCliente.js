const { DataTypes } = require("sequelize");

module.exports = (conexion)=>{
    const ClienteSchema=conexion.define("cliente",{
        id_cli:{
            type:DataTypes.UUID,
            primaryKey:true,
            defaultValue: DataTypes.UUIDV4
        },
        nom_cli:{//nombre del cliente
            type:DataTypes.STRING
        },
        mail_cli:{//correo del cliente
            type:DataTypes.STRING
        },
        pass_cli:{// contraseña del cliente
            type:DataTypes.STRING
        },
        stat_cli:{ //status del cliente, baja 0 o 1 activo
            type:DataTypes.BOOLEAN , // borado logico 
            default:true
        }
    }); 
    
    return ClienteSchema;
};