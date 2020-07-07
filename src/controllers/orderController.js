const order = require('../models/orderSchema')
const { model, mongoose } = require('mongoose')

let addOrder = async (req, res) => {
    try {
        const { cart, totalPrice } = req.body
        let newOrder = new order({ cart, totalPrice })
        let response = await newOrder.save()
        res.json(response)
    }
    catch (err) {
        console.err(err)
    }
}
module.exports = { addOrder }