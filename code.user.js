// ==UserScript==
// @name         "Viewed projects" Scratch studio
// @version      1
// @description  By @World_Languages
// @author       World_Languages
// @match        https://scratch.mit.edu/projects/*
// @grant        none
// ==/UserScript==

sid = readCookie('sid');
console.log('Studio: ' + sid);
if (sid == null) {
sid = prompt('Please paste the studio ID');
createCookie('sid',sid,1000);}









var url = window.location.href;
var id1 = url.substring(33, 45);
var id = id1.replace(/\D/g,'');
console.log('Project id: '+id);

$.ajax({type: "PUT",url: "https://scratch.mit.edu/site-api/projects/in/" + sid + "/add/?pks=" + id,data: "pks=" + id});



function readCookie(name) {
	var nameEQ = name + "=";
	var ca = document.cookie.split(';');
	for(var i=0;i < ca.length;i++) {
		var c = ca[i];
		while (c.charAt(0)==' ') c = c.substring(1,c.length);
		if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length,c.length);
	}
	return null;
}

function createCookie(name,value,days) {
	if (days) {
		var date = new Date();
		date.setTime(date.getTime()+(days*24*60*60*1000));
		var expires = "; expires="+date.toGMTString();
	}
	else var expires = "";
	document.cookie = name+"="+value+expires+"; path=/";
}
