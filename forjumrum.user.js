// ==UserScript==
// @name         "Viewed projects" Scratch studio (for JumRum)
// @version      1
// @description  By @World_Languages
// @author       World_Languages
// @match        https://scratch.mit.edu/projects/*
// @grant        none
// ==/UserScript==

var sid = 3474596;

var url = window.location.href;
var id1 = url.substring(33, 45);
var id = id1.replace(/\D/g,'');
console.log('Project id: '+id);

    setTimeout(function () {
$.ajax({type: "PUT",url: "https://scratch.mit.edu/site-api/projects/in/" + sid + "/add/?pks=" + id,data: "pks=" + id});
    }, 2000);

$.ajax({type: "PUT",url: "https://scratch.mit.edu/site-api/projects/in/" + sid + "/remove/?pks=" + id,data: "pks=" + id});
