const { Schema, model } = require('mongoose');

const Product = new Schema(
    {
        name: {
            type: String,
            required: true,
            unique: true,
        },
        description: {
            type: String,
            required: true,
            unique: true,
        },
        image: {
            type: String,
            required: true,
            unique: true,
        },
        price: {
            type: Number,
            required: true,
        },
        ratings: {
            type: String,
            required: true,
        },
        highlights: [
            {
                type: String,
            },
        ],
    },
    {
        timestamps: true,
    }
);

module.exports = model('Product', Product);
