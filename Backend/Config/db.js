const mongoose = require('mongoose');
const dotenv = require('dotenv');

dotenv.config();

const ConnectDB = () => {
    mongoose.connect(process.env.DB_CONNECT);
    console.log('Connected to MongoDB');
};

module.exports = ConnectDB;