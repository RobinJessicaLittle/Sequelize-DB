const yargs = require("yargs");
const {sequelize} = require ("./db/connections");
//imports for crud functions
const {addMovie, listMovies} = require("./movie/movieMethods")

const app = async (yargsObj) => {
try {
    await sequelize.sync();
    if(yargsObj.add){
        //add movie too database
        await addMovie({title: yargsObj.title, actor: yargsObj.actor});
    }else if(yargsObj.list){
        //list all movies
        console.log(await listMovies());
    }else if (yargsObj.update){
        //update the movie
    }else if(yargsObj.delete){
        //delete one movie
    }else{
        console.log("incorrect command")
    }

}catch (error){
    console.log(error)
}
}

app(yargs.argv);