const { client } = require('./client.js');

async function disconnectMongodb() {
	try {
		await client.close();
		console.log('Conexão com o MongoDB Finalizada');
	} catch (error) {
		console.log(`Erro ao disconectar ao MongoDb ${error}`);
		throw error;
	}
}

module.exports = { disconnectMongodb };
