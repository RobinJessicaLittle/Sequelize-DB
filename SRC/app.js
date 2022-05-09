const yargs = require("yargs");
const { sequelize } = require("./db/connection");
//imports for crud functions
const {addPlant, listPlants, deletePlant, updatePlant, updateLatin, updateRating} = require("./plant/plantMethods")
const {addInfo, listInfo, deleteInfo, updateHumidity, updateWatering, updatePrice} = require("./info/infoMethods")

const app = async (yargsObj) => {
try {
    await sequelize.sync();
    if(yargsObj.add){
        //add movie too database
        await addPlant({plant: yargsObj.plant, latin: yargsObj.latin, rating: yargsObj.rating});
        await addInfo({watering: yargsObj.watering, hummidity: yargsObj.hummidity, rating: yargsObj.price});
    }else if(yargsObj.list){
        //list all movies
        console.log(await listPlants());
    }else if (yargsObj.update){
        await updatePlant({plant: yargsObj.plant},{newPlant:yargsObj.newPlant})
    }else if (yargsObj.updateLatin){
        await updateLatin({latin: yargsObj.latin},{newLatin:yargsObj.newLatin})
    }else if (yargsObj.updateRating){
        await updateRating({rating: yargsObj.rating},{newRating:yargsObj.newRating})
    }else if(yargsObj.delete){
        await deletePlant({plant: yargsObj.plant})
    }else{
        console.log("incorrect command")
    }

}catch (error){
    console.log(error)
}
}

app(yargs.argv);

//node src/app.js --add --plant='Monstera' --latin='Monseta Adansonii' --rating='10' WORKING
//node src/app.js --list WORKING
//node src/app.js --delete --plant='Dumb Cane' WORKING
//node src/app.js --update --plant="Peace Lilly" --newPlant="Spathe Flower" WORKING
//node src/app.js --updateLatin --latin="Monseta Adansonii" --newPlant="Monstera Adansonii" WORKING
//node src/app.js --updateRating --rating="7" --newRating="6" WORKING


//node src/app.js --add --watering='Frequently' --hummidity='High' --price='10' //NOT WORKING
