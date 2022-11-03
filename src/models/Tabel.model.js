const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const tableSchema = new Schema({
    name: {
        type: String,
        require: true
    },
    content: [
        {
            key: String,
            input: String,
            value: Array
            // value: String
        },
    ]
    
}, {timestamps: true})

module.exports = mongoose.model('table', tableSchema);