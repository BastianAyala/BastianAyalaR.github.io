// ==UserScript==
// @name         3DES CBC Decrypt
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  Desencriptar un codigo cifrado en python
// @author       Bastán Ayala
// @match        https://htmlpreview.github.io/?https://github.com/BastianAyala/Tarea3Criptograf-a-/blob/main/encode.html
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
        var decrypted = CryptoJS.DES.decrypt(ciphertext, keyHex, { iv: ivHex, mode: CryptoJS.mode.CBC });
        return decrypted;
    }
    
    var text = "3Hsku/b7T3AD+3XfVU1etw==";
    
    function obtenerDiv(){
        return document.getElementsByTagName("div");}

    setTimeout(obtenerDiv,1000);
    var div = obtenerDiv();
    console.log(div);

    //const ide = div[0].id;
    //console.log(ide);

    var r = decryptByDES(text,key, iv);
   
    r = r.toString(CryptoJS.enc.Utf8);
    console.log(r);

    //div.innerHTML = r;

})();
