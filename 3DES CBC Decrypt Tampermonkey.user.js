// ==UserScript==
// @name         3DES CBC Decrypt
// @namespace    http://tampermonkey.net/
// @version      0.1
// @include      https://htmlpreview.github.io/?https://github.com/BastianAyala/Tarea3Criptograf-a/blob/main/encode.html
// @description  Desencriptar un codigo cifrado en python
// @author       Bastán Ayala
// @match        https://www.tampermonkey.net/index.php?version=4.11&ext=dhdg&updated=true
// @grant        none
// ==/UserScript==

(function decryp() {
    'use strict';

    var config = {
        cryptkey: "llavedesllavedesllavedes",//24
        iv: "12345678"//8
    };

    function decryptText(text){
        if (text === null || typeof text === 'undefined' || text === '') {return text;};
        text = new Buffer(text, 'base64').toString('binary');
        var decipher = crypto.createDecipheriv('des-ede3-cbc', config.cryptkey, config.iv);
        var dec = decipher.update(text,'binary','utf8');
        dec += decipher.final('utf8');
        return dec;
    }

    
    function obtenerDiv(){
        return document.getElementsByTagName("div");
    }

    setTimeout(obtenerDiv,500);
    var div = obtenerDiv();

    console.log(div);
    const ide = "bcfb444b5b955546";

    console.log(ide);
    setTimeout(decryptText,500);
    var result = decryptText(ide);

    div.innerHTML = result;


})();

