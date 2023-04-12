

$(document).ready(function () {

    tema = "";
    modeFosc = getCookie("darkmode") * 1 ? true : false;

    // Dark mode //
    if (!hasCookie("darkmode")) modeFosc = systemDarkMode();

    // Colors matí, tarda, vespre, nit //
    decidirTemaSegonsHora();
    

    // Mostrar boto Dark Mode Auto si cal //
    if (hasCookie("darkmode"))
        $(".botoAutoMode").fadeIn(150);
    
    establirIdioma();
    

    actTema();

    // Scroll photo //
    window.addEventListener('scroll', function () {
        var valor = -((window.scrollY / 200) * 12) + 6;
        valor = numberInRange(valor, -6, 6);
        $(".foto-scroll").css({ "transform": `scale(1.15) translateY(${valor}%)` });
    });

    // Afegir rel="noopener noreferrer" a tots els links //
    $('a').attr('rel', 'noopener noreferrer');
    // Afegir target="_blank" a tots els links que no tinguin target="_self"//
    $('a:not([target="_self"])').attr('target', '_blank');

    // Quan tot està carregat, mostrem la pàgina //
    $(".page-loader").fadeIn(500);
});
