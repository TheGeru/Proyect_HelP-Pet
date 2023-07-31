const {DataTypes} = require("sequelize");

module.exports = (conexion) =>{
    const AdminSchema=conexion.define("Administrador",{
        id_admin:{
            type:DataTypes.UUID,
            primaryKey:true,
            defaultValue: DataTypes.UUIDV4
        },
        nom_admin:{
            type: DataTypes.STRING
        },
        clave_admin:{
            type: DataTypes.STRING
        },
        stat_admin:{
            type:DataTypes.BOOLEAN,
            default:true
        }
    });
    return AdminSchema;
};