const shortid = require('shortid');

function generateShortURL() {
	const urlLength = 5;
	const shortenedURL = shortid.generate();
	const shortURL = shortenedURL.substring(0, urlLength);
	const url = `https://dev.com/${shortURL}`;
	return url;
}

module.exports = { generateShortURL };
