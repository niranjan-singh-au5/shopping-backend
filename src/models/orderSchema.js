const { Schema, model } = require('mongoose');

const Order = new Schema(
    {
        cart: [],
        totalPrice: { type: Number }
    },
    {
        timestamps: true,
    }
);

module.exports = model('Orders', Order);