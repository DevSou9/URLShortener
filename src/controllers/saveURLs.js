const { saveURL } = require('../repository/saveURLs');

exports.shortenURL = async (req, res) => {
	const { url } = req.query;
	const shortUrl = await saveURL(url);
	console.log(`Teste de SaveURL ${shortUrl.body}`);
	res.render('generator', { shortUrl: shortUrl.shortUrl });
};
