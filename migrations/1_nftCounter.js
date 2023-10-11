var NFTCounter = artifacts.require("../contracts/nftCounter.sol");

module.exports = function (deployer) {
  deployer.deploy(NFTCounter);
};
