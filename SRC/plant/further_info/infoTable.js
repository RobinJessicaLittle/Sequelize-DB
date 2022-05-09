const { DataTypes} = require("sequelize");
const{ sequelize} = require("../../db/connection");


const Info = sequelize.define("Info", {
    watering: {
        type: DataTypes.STRING,
        allowNull:false,
        unique:true,
    },
    hummidity: {
        type: DataTypes.STRING,
        defaultValue: "Not specified",
    },
    Price: {
        type: DataTypes.INTEGER,

    }
});

module.exports = Plant;