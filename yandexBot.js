// ==UserScript==
// @name         YandexBot
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match        https://yandex.ru/*
// @match        https://xn----7sbab5aqcbiddtdj1e1g.xn--p1ai/*
// @icon         data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==
// @grant        none
// ==/UserScript==

let yandexInput = document.getElementById("text");
let btnK = document.getElementsByClassName("button mini-suggest__button")[0];

if(btnK != undefined){
    yandexInput.value= "как звучит Гобой";
    setTimeout(function(){
        btnK.click();// Клик по кнопке поиска
    }, 1000);
}else if(location.hostname === "https://yandex.ru/"){
    let links = document.links;
    let goNext = true;
    for(let i=0; i<links.length; i++){
        let link = links[i];
        if(link.href.indexOf("xn----7sbab5aqcbiddtdj1e1g.xn--p1ai") != -1){
            setTimeout(function(){
                link.click();
            }, 3000);
            goNext = false;
            break;
        }
    }
    if(goNext){
        let btnext = document.getElementsByClassName("link link_theme_none link_target_serp pager__item pager__item_kind_next i-bem")[0];
        setTimeout(function(){
            btnext.click();
        }, 3000);
    }
}else{
    let links = document.links;
    let randomIndex = getIntRandom(0, links.length);
    let link = links[randomIndex];
    if(link.href.indexOf(location.hostname) != -1){
        setTimeout(function(){
            links[randomIndex].click();
        }, 2000);
    }else{
        location.href = "https://xn----7sbab5aqcbiddtdj1e1g.xn--p1ai/";
    }
}

function getIntRandom(min, max){
    return Math.floor(Math.random()*(max-min)+min);
}
