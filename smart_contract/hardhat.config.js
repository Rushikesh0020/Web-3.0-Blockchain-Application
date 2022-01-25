// https://eth-ropsten.alchemyapi.io/v2/3kB5AjTFznYokjlKCZbwOpwbGq4NSfjX

require('@nomiclabs/hardhat-waffle')

module.exports = {
  solidity: '0.8.0',
  networks: {
    ropsten: {
      url: 'https://eth-ropsten.alchemyapi.io/v2/3kB5AjTFznYokjlKCZbwOpwbGq4NSfjX',
      accounts: ['7b2f5091b8720b628a7c13ef3b5f8d67acdf82cad2c0d861ebc33150cf0d1c1b']
    }
  }
}