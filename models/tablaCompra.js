const {DataTypes} = require("sequelize");

module.exports = (conexion)=>{
        const CompraSchema=conexion.define("compra",{
        id_com:{
            type: DataTypes.UUID,
            primaryKey:true,
            defaultValue: DataTypes.UUIDV4
        },
        id_cli1:{
            type: DataTypes.UUID,
            allowNull: true,
        },
        id_pro1:{
            type:DataTypes.UUID,
            allowNull: true,
        },
        date_com:{
            type: DataTypes.DATE,
            defaultValue: DataTypes.NOW
        },
        tot_com:{
            type: DataTypes.DECIMAL(10, 2),
            allowNull: false
        }
    });
    
    return CompraSchema; 
};