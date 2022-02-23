//https://eth-ropsten.alchemyapi.io/v2/MW5UJsSwB28x65vSaahY2PTuKiFs4s-h

require('@nomiclabs/hardhat-waffle')



module.exports = {
   solidity: '0.8.0',
   networks: {
     ropsten:{
       url:'https://eth-ropsten.alchemyapi.io/v2/MW5UJsSwB28x65vSaahY2PTuKiFs4s-h',
       accounts: ['cb5327c02433fcdc86a3fba752247393bc8d0830bc6f129ae08225d9e3e39f7f']
     }
   }
}