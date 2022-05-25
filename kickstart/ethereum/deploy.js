const HDWalletProvider = require("@truffle/hdwallet-provider");
const Web3 = require('web3');

const compiledFactory = require('./build/CampaignFactory.json');

const provider = new HDWalletProvider(
    'anger differ rate fault old option balcony flame pen gesture tornado beyond',
    'https://rinkeby.infura.io/v3/e5a8daacad854d5581ee7eb5174320a2'
);

const web3 = new Web3(provider);

const deploy = async () => {
    const accounts = await web3.eth.getAccounts();

    const result = await new web3.eth.Contract(JSON.parse(compiledFactory.interface))
    .deploy({ data: compiledFactory.bytecode }) // aca van los parametros iniciales de los contratos 
    .send({ from: accounts[0], gas: '1000000'});

    console.log(result.options.address);
    provider.engine.stop();
};

deploy();
