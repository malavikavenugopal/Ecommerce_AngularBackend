const products = require('../Model/productsModel')

//get all products from database
exports.getAllProductController = async(req,res) => {
    console.log('inside projectController-get logic');
    try{
    const allProducts = await products.find()
    res.status(200).json(allProducts)
    }
    catch(err){
        console.log(err);
    }   

}