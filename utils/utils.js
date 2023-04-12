// Cookies //
function setCookie(cname, cvalue, exdays = 36500) {
    const d = new Date();
    d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
    let expires = "expires=" + d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}
function getCookie(cname) {
    let name = cname + "=";
    let decodedCookie = decodeURIComponent(document.cookie);
    let ca = decodedCookie.split(';');
    for (let i = 0; i < ca.length; i++) {
        let c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}
function removeCookie(cname) {
    this.setCookie(cname, null, -1);
}
function hasCookie(cname) {
    return getCookie(cname) != "";
}













// Utils //
function esMobil() {
    return window.innerWidth <= 576;
}
function esPc() {
    return !this.esMobil();
}
function objPle(obj) {
    if (!obj) return false;
    else return JSON.stringify(obj) != "{}";
}


function systemDarkMode() {
    return !(window.matchMedia && window.matchMedia('(prefers-color-scheme: light)').matches);
}














function numberInRange(n, min, max) {
    if (n < min) n = min;
    if (n > max) n = max;
    return n;
}
function numberIsInRange(n, min, max) {
    return (n >= min && n <= max);
}
function format00(n = 0) { return ("0" + n).slice(-2); }
function format000(n = 0) { return ("00" + n).slice(-3); }
function format0000(n = 0) { return ("000" + n).slice(-4); }
