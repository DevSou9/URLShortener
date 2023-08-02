const { redirectToOriginalURL } = require('../repository/getOriginalURL');

exports.redirectToOriginalURL = async (req, res) => {
  const shortUrl = req.query.shortUrl;
  const url = await redirectToOriginalURL(shortUrl);

  if (typeof url === 'number') {
    res.sendStatus(url); 
  } else {    
    res.render('result', { originalUrl: url });
  }

  
};

