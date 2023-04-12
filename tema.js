function btnDarkMode_click() {
    modeFosc = !modeFosc;
    actTema();
    guardarCookieDarkMode();
    $(".botoAutoMode").fadeIn(200);
}
function btnAutoDarkMode_click() {
    removeCookie("darkmode");
    modeFosc = systemDarkMode();
    $(".botoAutoMode").fadeOut(200);
    actTema();
}

function decidirTemaSegonsHora() {
    const horaActual = new Date().getHours();
    
    primeraHoraNit = 1;
    primeraHoraMatinada = 6;
    primeraHoraMati = 9;
    primeraHoraTarda = 15;
    primeraHoraVespre = 20;

    if (horaActual >= primeraHoraNit && horaActual < primeraHoraMatinada) {
        tema = "nit";
    } else if (horaActual >= primeraHoraMatinada && horaActual < primeraHoraMati) {
        tema = "matinada";
    } else if (horaActual >= primeraHoraMati && horaActual < primeraHoraTarda) {
        tema = "mati";
    } else if (horaActual >= primeraHoraTarda && horaActual < primeraHoraVespre) {
        tema = "tarda";
    } else {
        tema = "vespre";
    }
    actTema();
}
function actTema() {
    $("html")
        .removeClass()
        .addClass(modeFosc ? "dark" : "light")
        .addClass(tema);
}
function guardarCookieDarkMode() {
    setCookie("darkmode", modeFosc ? 1 : 0);
}



// Idioma //
function establirIdioma() {
    // Establir idioma //
    $("#idioma").val(getCookie("lang") || navigator.language.split("-")[0]);
    // Valor per defecte //
    if (!$("#idioma").val())
        $("#idioma").val("en");
    $("#idioma").change();
}
function canviarIdioma(idioma) {
    $("[lang=ca], [lang=es], [lang=en]").hide();
    $(`[lang=${idioma}]`).show();
    setCookie("lang", idioma);
}
