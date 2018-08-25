const express = require('express');
const router = express.Router();

const simpleChain = require('../app/simpleChain');

router.get('/block/:blockHeight', function (req, res, next) {
  const blockHeight = req.params.blockHeight;
  simpleChain.Blockchain.getBlock(blockHeight).then((jsonStr) => {
    res.send(jsonStr);
  });
});

router.post('/block', function (req, res, next) {
  const body = req.body.body;
  simpleChain.Blockchain.addBlock(new simpleChain.Block(body)).then((jsonStr) => {
    res.send(jsonStr);
  });
});

module.exports = router;
