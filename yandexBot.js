// ==UserScript==
// @name         YandexBot
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match        https://yandex.ru/*
// @icon         
// @grant        none
// ==/UserScript==
if(BtnK!=undefined){
let yandexInput = document.getElementById("text");
yandexInput.value= "как звучит Гобой";
}else{
    let links = document.links;
    for(let i=0;i<links.length;i++){
        let links = links[i];
        if
let BtnK = document.getElementsByClassName("button mini-suggest__button")[0];
BtnK.click();
