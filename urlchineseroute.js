var url = require('url');
module.exports = urlEncodeChinese;

function urlEncodeChinese (req, res, next) {
  var decodeurlchinese = url.parse(req.url);
  var tmpdecodepath = decodeurlchinese.pathname;
  decodeurlchinese.pathname = decodeURIComponent(decodeurlchinese.pathname);
  decodeurlchinese.path = decodeurlchinese.path.replace(tmpdecodepath, decodeurlchinese.pathname);

  req.url = req.originalUrl = decodeurlchinese.path;
  next();
}