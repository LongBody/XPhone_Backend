const mongoose = require('mongoose')
const Schema = mongoose.Schema


// String, Number, Boolean, Date, Object, Array , ObjectId

const productSchema = new Schema({
    title: {
        type: String,
        required: true,
    },
    color: [
        {
            color: String,
            imageURL: String
        }
    ],
    version: [
        {
            cap: String,
            price: Number,
        }
    ],
    quantity: Number,
    brand: String,
    sale: Number,
    star: Number,
    feedback: Number,
    screen: String,
    os: String,
    rearCamera: String,
    frontCamera: String,
    chip: String,
    ram: String,
    sim: String,
    pin: String,

})



// productSchema.index({ title: 'text', categories: 'text', bio: "text" }, function(err, data) {
//     console.log(err);
//     console.log(data);
// })

module.exports = productSchema