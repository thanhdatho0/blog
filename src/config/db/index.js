//Connect MongoDB
const mongoose = require('mongoose');

async function connect() {
    try {
        await mongoose.connect('mongodb://localhost:27017/f8_education_dev');
        console.log('Success');

    } catch (error) {
        console.log('Faile');
    }
}

module.exports = { connect };
