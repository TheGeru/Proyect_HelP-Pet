const {DataTypes} = require("sequelize");

module.exports = (conexion) =>{
    const MascotaSchema=conexion.define("mascota",{
        id_pet:{
            type:DataTypes.UUID,
            primaryKey: true,
            defaultValue: DataTypes.UUIDV4
        },
        nom_pet:{
            type:DataTypes.STRING
        },
        raza_pet:{
            type:DataTypes.STRING
        },
        color_pet:{
            type: DataTypes.STRING,
        },
        Genero:{
            type:DataTypes.STRING
        },
        id_cli2:{
            type: DataTypes.UUID,
            allowNull: false
        }
    });

    return MascotaSchema;
};