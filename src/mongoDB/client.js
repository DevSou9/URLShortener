const { MongoClient} = require('mongodb');
require('dotenv').config();

const uri = process.env.uriMongoDB;
const client = new MongoClient(uri);

module.exports = { client };
