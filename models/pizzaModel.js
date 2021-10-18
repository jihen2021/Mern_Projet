//cree pitzaa model 
const mongoose = require("mongoose");
const pizzaSchema = mongoose.Schema({
    name : {type: String , require},
    varients : [] ,
    prices : [] ,
    category : {type: String , require},
    image : {type: String , require},
    description : {type: String , require}

} , {
    timestamps:true,//check if the pitzaa in data base
})

const pizzaModel = mongoose.model('pizzas' , pizzaSchema)//pizzas nom de la collection 

module.exports = pizzaModel