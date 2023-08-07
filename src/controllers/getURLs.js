const httpStatus = require('http-status-codes');
const { redirectToOriginalURL } = require('../repository/getOriginalURL');

exports.redirectToOriginalURL = async (req, res) => {
	const { shortUrl } = req.query;
	const url = await redirectToOriginalURL(shortUrl);

	if (typeof url === 'number') {
		if (url === 404) {
			res.status(httpStatus.NOT_FOUND).send(`${httpStatus.NOT_FOUND} - ${httpStatus.getStatusText(httpStatus.NOT_FOUND)}`);
		} else {
			res.sendStatus(url); // Outros códigos de erro, como 500, serão tratados aqui
		}
	} else if (typeof url === 'object' && url.statusCode === 404) {
		res.status(httpStatus.NOT_FOUND).send(`${httpStatus.NOT_FOUND} - ${httpStatus.getStatusText(httpStatus.NOT_FOUND)}`);
	} else {
		res.render('result', { originalUrl: url });
	}
};
