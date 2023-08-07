const { client } = require('./client.js');

const db = 'dbMongodb';

async function connectMongodb() {
	try {
		const clientConnect = await client.connect();
		const dbConnect = clientConnect.db(db);
		return dbConnect;  
	} 
	catch (error) {

		console.log(`Erro: ${error}`);
		throw error;
	}
}

module.exports = { connectMongodb };
