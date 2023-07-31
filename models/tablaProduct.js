var {DataTypes} = require("sequelize");

module.exports = (conexion)=>{
    const ProducSchema=conexion.define("producto",{ //modulos de la tabla de producto
        id_pro:{
            type: DataTypes.UUID,
            primaryKey:true,
            defaultValue: DataTypes.UUIDV4//id de caracteres aleatorios
        },
        nom_pro:{
            type:DataTypes.STRING
        },
        prec_pro:{
            type:DataTypes.DECIMAL(10, 2),// 10 DEFINE MAXIMO NUMERO DE CARACTERES CONTANDO DECIMALES, 2 DEFINE NUMEOR DE CARACTERES DESPUES DEL PUNTO
            allowNull: false //El dato no puede ser nulo
        },
        stat_pro:{
            type: DataTypes.BOOLEAN,
            default:true
        },
        cat_pro:{
            type: DataTypes.STRING
        },
        cantD_pro:{
            type: DataTypes.INTEGER
        }
    });
    return ProducSchema;       
};