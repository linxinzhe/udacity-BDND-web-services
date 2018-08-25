const simpleChain = require("../app/simpleChain.js");

/* ===== Test Case ==========================
|  Test cases 		|
|  ================================================*/
var assert = require('assert');
describe('Blockchain', function () {
  it('', function () {
    simpleChain.createGenesisBlock().then(() => {
      return simpleChain.Blockchain.addBlock(new simpleChain.Block("a"));
    }).then(() => {
      return simpleChain.Blockchain.addBlock(new simpleChain.Block("b"));
    }).then(() => {
      return simpleChain.getDataToLevelDBLength();
    }).then((value) => {
      console.log(value);
    }).then(() => {
      return simpleChain.Blockchain.getBlock(0);
    }).then((value) => {
      console.log(value);
    }).then(() => {
      return simpleChain.Blockchain.getBlock(1);
    }).then((value) => {
      console.log(value);
    }).then(() => {
      return simpleChain.Blockchain.getBlock(2);
    }).then((value) => {
      console.log(value);
    }).then(() => {
      console.log("---- validateChain----");
      return simpleChain.Blockchain.validateChain();
    }).then(() => {
      console.log("----modify block 1:height 2-----");
      console.log("----remove block 1:height 2 previousBlockHash-----");
      return simpleChain.Blockchain.getBlock(2);
    }).then((value) => {
      a = value;
      a.previousBlockHash = '';
      console.log(a);
      return simpleChain.db.put(2, JSON.stringify(a));
    }).then((value) => {
      console.log("---- validateChain again----");
      return simpleChain.Blockchain.validateChain();
    });
  });
});