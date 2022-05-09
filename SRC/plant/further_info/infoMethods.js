const Info = require("./infoTable");

exports.addInfo = async (infoObj) => {
  try {
    await Info.create(infoObj);
  } catch (error) {
    console.log(error);
  }
};

exports.listInfo = async () => {
  try {
    return await Info.findAll();
  } catch (error) {
    console.log(error);
  }
};

exports.updateHummidity = async (infoObj, newInfoObj) => {
  try {
    await Info.update({hummidity: newInfoObj.newhummidity},
       {where: {humidityt: infoObj.humidity}});
  } catch (error) {
      console.log(error)
  }
  
}

exports.updateWatering = async (infoObj, newWateringObj) => {
  try {
    await Info.update({watering: newWateringObj.newWatering},
       {where: {watering: infoObj.watering}});
  } catch (error) {
      console.log(error)
  }
}
exports.updatePrice = async (infoObj, newPriceObj) => {
  try {
    await Info.update({price: newPriceObj.newPrice},
       {where: {price: infoObj.price}});
  } catch (error) {
      console.log(error)
  }
}
// Movie.update({someKey: newValue, anotherKey: anotherNewValue}, {where: {someKey: oldValue}})


exports.deleteInfo = async (infoObj) =>{
  try {
      await Info.destroy({
        where:{
        hummidity: infoObj.hummidity,
        }
      })
      return "Plant Info removed from database"
  } catch (error) {
    console.log(error)
  }
}