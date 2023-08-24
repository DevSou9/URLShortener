const { connectMongodb } = require('../mongoDB/connectMongoDB');
const { disconnectMongodb } = require('../mongoDB/disconnectMongoDB');

async function redirectToOriginalURL(shortUrl) {
	let finished = false;
	let dbConnect;
	try {
		dbConnect = await connectMongodb();
		const urlData = await dbConnect.collection('URLs').findOne({ shortUrl });
		//console.log(`Ver urlData: ${urlData.url}`);
		if (!urlData) {
			console.log('URL not found');
			finished = true;
			return {
				statusCode: 404,
			};
		}

		console.log('Redirecting to:', urlData.url);
		finished = true;
		return urlData.url;
	} catch (error) {
		//console.error('Error while fetching data:', error);
		finished = true;
		return 500;
	} finally {
		if (finished && !dbConnect) disconnectMongodb();
	}
}
// redirectToOriginalURL('https://dev.com/5zmKq');
module.exports = { redirectToOriginalURL };
