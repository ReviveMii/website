function loadAnalytics() {
    var GA_ID = 'G-1MVYJRKPK2';
    var s = document.createElement('script');
    s.async = true;
    s.src = 'https://www.googletagmanager.com/gtag/js?id=' + GA_ID;
    document.head.appendChild(s);

    window.dataLayer = window.dataLayer || [];
    window.gtag = function () { dataLayer.push(arguments); };
    gtag('js', new Date());
    gtag('config', GA_ID);
}

if (localStorage.getItem('cookiesAccepted') === 'true') {
    loadAnalytics();
}

if (!localStorage.getItem('cookiesAccepted')) {
    document.getElementById('cookiePopup').style.display = 'block';
}

function acceptCookies() {
    localStorage.setItem('cookiesAccepted', 'true');
    document.getElementById('cookiePopup').style.display = 'none';
    loadAnalytics();

}

var _paq = window._paq = window._paq || [];
_paq.push(["trackPageView"]);
_paq.push(["enableLinkTracking"]);
(function() {
    var u="//analyzemii.revivemii.xyz/";
    _paq.push(["setTrackerUrl", u+"script5.php"]);
    _paq.push(["setSiteId", "1"]);
    var d=document, g=d.createElement("script"), s=d.getElementsByTagName("script")[0];
    g.async=true; g.src=u+"script5.js"; s.parentNode.insertBefore(g,s);
})();

var loadingsfx = new Audio("/assets/loading.wav");
function setDisplay(id, value) {
    var el = document.getElementById(id);
    if (el) el.style.display = value;
}

function startloading() {
    setDisplay('loadicon', 'block');
    setTimeout(stoploading, 2000);
    loadingsfx.loop = true;
    loadingsfx.currentTime = 0;
    loadingsfx.play().catch(function () {});
}

function stoploading() {
    setDisplay('loadicon', 'none');
    loadingsfx.pause();
}

document.addEventListener('DOMContentLoaded', function () {
    if (!localStorage.getItem('cookiesAccepted')) {
        setDisplay('cookiePopup', 'block');
    }
    stoploading();
});
