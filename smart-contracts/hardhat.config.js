require("@nomiclabs/hardhat-waffle");

module.exports = {
  solidity: "0.8.4",
  networks: {
    rinkeby: {
      url: "https://eth-rinkeby.alchemyapi.io/v2/g9SzRUMK_PtJqgDerMgOukmMDKej5Iwb",
      accounts: ["4aaa3038d77206cc152d6eaf1a077c90b0192daa3b9ef3e4ca7252deff8e7391"]
    }
  }
}