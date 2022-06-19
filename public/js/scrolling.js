function scrolla(a) {
    document.getElementsByClassName("navigation__checkbox")[0].checked = false;
    document.getElementsByClassName("modal__toggle")[0].checked = false;
    if (navigator.userAgent.search("Firefox") >= 0) {
        ScrollToResolver(document.getElementById(a));
    }
    else {
        $("html, body").animate({
            scrollTop: $(a).offset().top - 80
        }, 1400)
    }
}
function ScrollToResolver(elem) {
    var jump = parseInt(elem.getBoundingClientRect().top * .2);
    document.body.scrollTop += jump;
    document.documentElement.scrollTop += jump;
    if (!elem.lastjump || elem.lastjump > Math.abs(jump)) {
        elem.lastjump = Math.abs(jump);
        setTimeout(function () {
            ScrollToResolver(elem);
        }, "30");
    }
    else {
        elem.lastjump = null;
    }
}
function openModal(){
    document.getElementsByClassName("modal__toggle")[0].checked = true;
}function closeModal(){
    document.getElementsByClassName("modal__toggle")[0].checked = false;
}