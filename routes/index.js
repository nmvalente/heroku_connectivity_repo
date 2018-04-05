let express = require('express');
let router = express.Router();

router.route('/')
  .get(function (req, res) {
  res.json(200, {msg: 'OK' });
});

module.exports = router;
