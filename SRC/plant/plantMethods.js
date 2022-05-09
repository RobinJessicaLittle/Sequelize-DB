const Plant = require("./plantTable");

exports.addPlant = async (plantObj) => {
  try {
    await Plant.create(plantObj);
  } catch (error) {
    console.log(error);
  }
};

exports.listPlants = async () => {
  try {
    return await Plant.findAll();
  } catch (error) {
    console.log(error);
  }
};

exports.updatePlant = async (plantObj, newPlantObj) => {
  try {
    await Plant.update({plant: newPlantObj.newPlant},
       {where: {plant: plantObj.plant}});
  } catch (error) {
      console.log(error)
  }
  
}

exports.updateLatin = async (plantObj, newLatinObj) => {
  try {
    await Plant.update({latin: newLatinObj.newLatin},
       {where: {latin: plantObj.latin}});
  } catch (error) {
      console.log(error)
  }
}
exports.updateRating = async (plantObj, newRatingObj) => {
  try {
    await Plant.update({rating: newRatingObj.newRating},
       {where: {rating: plantObj.rating}});
  } catch (error) {
      console.log(error)
  }
}
// Movie.update({someKey: newValue, anotherKey: anotherNewValue}, {where: {someKey: oldValue}})


exports.deletePlant = async (plantObj) =>{
  try {
      await Plant.destroy({
        where:{
        plant: plantObj.plant
        }
      })
      return "Plant removed from database"
  } catch (error) {
    console.log(error)
  }
}
