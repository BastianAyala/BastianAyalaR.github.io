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
    
    var key = "llavedesllavedesllavedes";//24
    var iv ="12345678";//8

    function decryptByDES(ciphertext, key, iv) {
        var keyHex = CryptoJS.enc.Utf8.parse(key);
        var ivHex = CryptoJS.enc.Hex.parse(CryptoJS.enc.Utf8.parse(iv).toString(CryptoJS.enc.Hex));
        var decrypted = CryptoJS.DES.decrypt(ciphertext, keyHex, { iv: ivHex, mode: CryptoJS.mode.CBC });
        return decrypted;
    }
    
    var text = "lS6WrnuACc4yKqTZXulRgpOzAkZ2xTk1A8wQs1eMnoQ=";
    /*
    var ivHex = CryptoJS.enc.Hex.parse(CryptoJS.enc.Utf8.parse(iv).toString(CryptoJS.enc.Hex));

    const str = CryptoJS.enc.Utf8.parse(text);
    const baseStr = CryptoJS.enc.Base64.stringify(str);
    const baseStrUtf = CryptoJS.enc.Utf8.parse(baseStr);
    const KeyHex = CryptoJS.enc.Utf8.parse(key);

    var Dencrypted = CryptoJS.TripleDES.decrypt(baseStrUtf, KeyHex, {
	iv:ivHex,
	mode: CryptoJS.mode.CBC,
	padding: CryptoJS.pad.Pkcs7}
);
*/
    function obtenerDiv(){
        return document.getElementsByTagName("div");}

    setTimeout(obtenerDiv,1000);
    var div = obtenerDiv();
    console.log(div);

    //const ide = div[0].id;
    //console.log(ide);

    var r = decryptByDES(text,key, iv);
    console.log(r);
    r = r.toString(CryptoJS.enc.Utf8)
    console.log(r);

    //div.innerHTML = r;

})();
