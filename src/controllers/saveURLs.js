const { saveURL } = require('../repository/saveURLs');

exports.shortenURL = async (req, res) => {
  const { url } = req.query;
  const shortUrl = await saveURL(url);
  res.json({ shortUrl });
};

