const { connectMongodb } = require('../mongoDB/connectMongoDB.js');
const { disconnectMongodb } = require('../mongoDB/disconnectMongoDB.js');
const { generateShortURL } = require('../services/shortenURL.js');

async function saveURL(url) {
	try {
		const expirationDate = new Date();
		expirationDate.setDate(expirationDate.getDate() + 1);

		const dbConnect = await connectMongodb();
		const shortUrl = generateShortURL();
		const urlData = { url, shortUrl, expirationDate };
		

		await dbConnect.collection('URLs').insertOne(urlData);
		

		return {
			statusCode: 200,
			body: JSON.stringify({
				shortUrl,
			}),
			shortUrl,

		};
	} catch (error) {
		console.error('Error while inserting data:', error);
		throw error;
	} finally {
		disconnectMongodb();
	}
}

module.exports = { saveURL };
