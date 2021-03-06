require('dotenv').config()
const baseConfig = require('./base.config')

const { web3Home } = require('../src/services/web3')

module.exports = {
  ...baseConfig.bridgeConfig,
  initialize: baseConfig.initialize,
  queue: 'home',
  id: 'home',
  name: 'sender-home',
  web3: web3Home
}
