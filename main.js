// ==UserScript==
// @name         fuck zhihu
// @namespace    http://tampermonkey.net/
// @version      0.2
// @description  Fuck zhihu!
// @author       r_64
// @include      https://*.zhihu.com/*
// @exclude      https://zhuanlan.zhihu.com/*
// @grant        none
// ==/UserScript==
(function() {
    var d = new Date();
    var last_visit = document.cookie.replace(/(?:(?:^|.*;\s*)lastvisitsbwebsite\s*\=\s*([^;]*).*$)|^.*$/, "$1");
    var this_visit = d.getTime();
    document.cookie = "lastvisitsbwebsite=" + this_visit;
    if (this_visit - last_visit <= 1000 * 60 * 60 * 4) {
        window.location.href = 'about:blank';
        alert("为什么你老是在浏览垃圾网站");
    } else {
        window.setTimeout(
            function() {
                window.location.href = 'about:blank';
                alert("不要浏览垃圾网站");
            }, 1000 * 60 * 3
        );
    }
})();
