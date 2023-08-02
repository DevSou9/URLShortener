const {client} = require('./client.js')
const db = 'dbMongodb'

async function connectMongodb(){
    try{

        console.log(`Testando o client.Connect() ---------- ${client}`);
        const clientConnect = await client.connect();
        console.log(`Testando o client.Connect() 2222222222222 ${client}`);
        const dbConnect = clientConnect.db(db);
        console.log(`Connectado ao MongoDB`);
        return dbConnect
    }
    catch(error){
        console.log(`Erro ao se connectar: ${error}`);
        throw error;
    }
}


module.exports = {connectMongodb}