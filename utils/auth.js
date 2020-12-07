const jwt = require("jsonwebtoken");
module.exports = (req, res, next) => {
  try {
    const token = req.headers.authorization.replace("Bearer ", "");
    console.log(token);
    const decoded = jwt.verify(token, "hiremepliz");
    req.userData = decoded;
    // console.log(req.userData);
    next();
  } catch (e) {
    return res.status(401).json({
      message: "Authentification Failed",
    });
  }
};
