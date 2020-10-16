// ==UserScript==
// @name         3DES CBC Decrypt
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  Desencriptar un codigo cifrado en python
// @author       Bastán Ayala
// @match        https://bastianayala.github.io/Tarea3Cripto.github.io/
// @grant        none
//updateURL
// @require      https://cdnjs.cloudflare.com/ajax/libs/crypto-js/4.0.0/crypto-js.min.js
// @require      https://raw.githubusercontent.com/brix/crypto-js/develop/src/tripledes.js
// ==/UserScript==

(function decryp() {
    'use strict';

    var key = "llavedesllavedesllavedes";//24
    var iv ="12345678";//8

    function decryptByDES(ciphertext, key, iv) {
        var keyHex = CryptoJS.enc.Utf8.parse(key);
        var ivHex = CryptoJS.enc.Hex.parse(CryptoJS.enc.Utf8.parse(iv).toString(CryptoJS.enc.Hex));
        var decrypted = CryptoJS.TripleDES.decrypt(ciphertext, keyHex, { iv: ivHex, mode: CryptoJS.mode.CBC, padding:CryptoJS.pad.Pkcs7 });
        return decrypted;
    }
    
    var div = document.getElementsByTagName("div");
    var idTextoCifrado = div[0].id;

    var result = decryptByDES(idTextoCifrado,key, iv);
    result = result.toString(CryptoJS.enc.Utf8)

    div[0].innerHTML = 'mensaje cifrado: '+result;
})();
