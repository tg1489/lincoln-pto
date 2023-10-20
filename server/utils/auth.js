const jwt = require('jsonwebtoken');
const secret = process.env.JWT_SECRET;
const expiration = '2h';

module.exports = {
  authMiddleware: function ({ req }) {
    let token = req.body.token || req.query.token || req.headers.authorization;

    if (req.headers.authorization) {
      token = token.replace('Bearer', '').trim();
    }

    if (!token) {
      return req;
    }

    try {
      const { data } = jwt.verify(token, secret);
      req.user = data;
    } catch (err) {
      console.error(err);
      console.log('Invalid token');
    }

    return req;
  },
  signToken: function ({ username, email, id }) {
    const payload = { username, email, id };
    return jwt.sign({ data: payload }, secret, { expiresIn: expiration });
  },
};
