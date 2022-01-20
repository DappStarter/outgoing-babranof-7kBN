require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'hunt produce border tell notice crime remain equip give narrow fortune taste'; 
let testAccounts = [
"0x31a1cc3f449eb67ad3b3fc7bd4276d1b543274d16b810ccc0788070e09a525dc",
"0x85e6c5d72bd6e7605a004e18f10479bf6a01a27218e9ce2025385b3de02889d2",
"0x7932e0091d5cb7e4e7e5a3a5f89d65f0f63d8cfa5cae08b16fd86e471dda160d",
"0x398ffe9c7a4c2979327f3818b6524c09662f92d2f5762a475a68ba58486f2a03",
"0x1a4fccf1dc230b1839b0a3a2a529e6820b79a8f111ff05dcb69e4d104ec4a5e4",
"0x1185839ab06818156a22ececfe63247ffcc1b6186cd2026a7f2566ab2f17adff",
"0xb6bf994597dac1fce8128d6dce23a756bccc58eaa33236d2658da527ec15dbfc",
"0xa27ad1d57d22ab9034bb597f4b7ccda53d8ec5f7c640d8ed36ac8e5f1844f6b6",
"0xcdce13dac454460c3892536ba3ac471c19b8f7ca6e6a054950ecdf4b502dd5fb",
"0x3a049347d7c00f3937888aeb109d82edf81dca267f98684f067fb3f310a7136e"
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

