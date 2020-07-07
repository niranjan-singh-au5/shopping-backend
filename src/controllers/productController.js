const product = require('../models/productSchema')
const { model, mongoose } = require('mongoose')

let addProducts = async (req, res) => {
    try {
        const { name, description, image, price, ratings, highlights } = req.body
        let newProducts = new product({ name, description, image, price, ratings, highlights })
        let response = await newProducts.save()
        res.json(response)
    }
    catch (err) {
        console.err(err)
    }
}

let getallProducts = async (req, res) => {
    try {
        const response = await product.find()
        res.json(response)
    }
    catch (err) {
        console.err(err)
    }
}

module.exports = { getallProducts, addProducts }

