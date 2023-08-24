const httpStatus = require('http-status-codes');
const { redirectToOriginalURL } = require('../repository/getOriginalURL');


exports.redirectToOriginalURL = async (req, res) => {
	const { shortUrl } = req.query;
	const url = await redirectToOriginalURL(shortUrl);
	
	if (typeof url.statusCode === 'number') {		
		
		if (url.statusCode === 404) {
			res.status(httpStatus.StatusCodes.NOT_FOUND).send(`${httpStatus.StatusCodes.NOT_FOUND} - ${httpStatus.getStatusText(httpStatus.StatusCodes.NOT_FOUND)}`);
			
		} else {
			
			res.sendStatus(url); // Outros códigos de erro, como 500, serão tratados aqui
		}
	} else {
		if(url == 500) res.render('result', {originalUrl: '------' });
		res.render('result', { originalUrl: url });
	}
};
