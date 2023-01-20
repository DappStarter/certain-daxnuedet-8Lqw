require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'gloom clog other security notice birth muscle congress hover private flip ski'; 
let testAccounts = [
"0x3793ba978e6cdea16a982d67ebdc381ec5e28a4f16da0d76e57b94dfab6b0274",
"0x8a44d8aedd4f56e85e3ed2f83824d744fb8412a9f4a225f49db10d296096dd76",
"0xe7f8bbef71489994e826b0d16a74b1bb7309e9667926e0a0927275fd1c76d0d1",
"0x5a22efe48dad76372505e4539f1cefcefd00460442d30d1db3bd2ce2a6ef2d26",
"0x316b3b60dc825fde94074b3e4636e65af25be8fbc23d74a365c493fc693ee2e3",
"0x6c2eeb6788f838b86135ee49c8ae1ef55ad7680d47a8ca207d3aec8f1581092b",
"0xd6078293a2bf0fec53f5815dbb9e12e5c16762f66a4b360ef1cd83b705de8142",
"0xea4334210c402b1b817a6448aacc2595f8288d8969f4c1ded0f17b23dacb4d48",
"0xdf559a2496bf65815178b368974d872247156ce5e7d4feb4e525ad7f59026efc",
"0xa04f0a6870bd60d5df4be23b105c435a187fb2f0f7f0cd877972ed4ae5809ed3"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};

