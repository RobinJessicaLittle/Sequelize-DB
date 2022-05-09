const { DataTypes} = require("sequelize");
const{ sequelize} = require("../db/connection");


const Plant = sequelize.define("Plant", {
    plant: {
        type: DataTypes.STRING,
        allowNull:false,
        unique:true,
    },
    latin: {
        type: DataTypes.STRING,
        defaultValue: "Not specified",
    },
    rating: {
        type: DataTypes.INTEGER,

    }
});

module.exports = Plant;
