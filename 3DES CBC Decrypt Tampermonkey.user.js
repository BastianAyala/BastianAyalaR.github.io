// ==UserScript==
// @name         3DES CBC Decrypt
// @namespace    http://tampermonkey.net/
// @version      0.1
// @include      https://htmlpreview.github.io/?https://github.com/BastianAyala/Tarea3Criptograf-a/blob/main/encode.html
// @description  Desencriptar un codigo cifrado en python
// @author       Bastán Ayala
// @match        https://www.tampermonkey.net/index.php?version=4.11&ext=dhdg&updated=true
// @grant        none
// @require      https://cdnjs.cloudflare.com/ajax/libs/crypto-js/4.0.0/crypto-js.min.js
// @require      https://raw.githubusercontent.com/brix/crypto-js/develop/src/tripledes.js
// ==/UserScript==

(function decryp() {
    'use strict';
    //https://cdnjs.cloudflare.com/ajax/libs/crypto-js/3.1.2/components/tripledes.js

    var key = "llavedesllavedesllavedes";//24
    var iv ="12345678";//8

    function decryptByDES(ciphertext, key, iv) {
        var keyHex = CryptoJS.enc.Utf8.parse(key);

        var ivHex = CryptoJS.enc.Hex.parse(CryptoJS.enc.Utf8.parse(iv).toString(CryptoJS.enc.Hex));
        var decrypted = CryptoJS.DES.decrypt(ciphertext, keyHex, { iv: ivHex, mode: CryptoJS.mode.CBC });

        console.log( decrypted.toString());
        console.log( decrypted.ciphertext.toString(CryptoJS.enc.Base64));
        console.log( decrypted.ciphertext.toString());

        return decrypted.toString(CryptoJS.enc.Utf8);

    }


    function obtenerDiv(){
        return document.getElementsByTagName("div");}

    setTimeout(obtenerDiv,500);
    var div = obtenerDiv();
    console.log(div);

    //const ide = div.id;
    //console.log(ide);
    var text = "lS6WrnuACc4yKqTZXulRgpOzAkZ2xTk1A8wQs1eMnoQ=";


    var result = decryptByDES(text, key,iv);
    console.log(result);
    //div.innerHTML = result;


})();
