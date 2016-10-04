// ==UserScript==
// @name         "Viewed projects" Scratch studio
// @version      1
// @description  By @World_Languages
// @author       World_Languages
// @match        https://scratch.mit.edu/projects/*
// @grant        none
// ==/UserScript==

sid =

3464286               // ←←←←←← Change that number to the ID of the studio you recently created

;













var url = window.location.href;
var id1 = url.substring(33, 45);
var id = id1.replace(/\D/g,'');
console.log('Project id: '+id);

$.ajax({type: "PUT",url: "https://scratch.mit.edu/site-api/projects/in/" + sid + "/add/?pks=" + id,data: "pks=" + id});
