const {DataTypes} = require("sequelize");

module.exports = (conexion)=>{
        const DetalleventaSchema=conexion.define("DetalleVenta",{
        id_det:{
            type: DataTypes.UUID,
            primaryKey: true,
            defaultValue: DataTypes.UUIDV4
        },
        id_comp1:{
            type: DataTypes.UUID,
            allowNull: false,
        },
        id_pro2:{
            type: DataTypes.UUID,
            allowNull: false,
        },
        cant_det:{
            type: DataTypes.INTEGER,
        },
        subt_det:{
            type: DataTypes.DECIMAL(10, 2)
        },
    });

    return DetalleventaSchema;
};