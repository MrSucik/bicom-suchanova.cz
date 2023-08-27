const scrollToo = (selector) => {
  document.getElementsByClassName("navigation__checkbox")[0].checked = false;
  if (navigator.userAgent.search("Firefox") >= 0) {
    ScrollToResolver(document.getElementById(selector));
  } else {
    $("html, body").animate({ scrollTop: $(selector).offset().top - 80 }, 1400);
  }
};

function ScrollToResolver(elem) {
  let jump = parseInt(elem.getBoundingClientRect().top * 0.2);
  document.body.scrollTop += jump;
  document.documentElement.scrollTop += jump;
  if (!elem.lastjump || elem.lastjump > Math.abs(jump)) {
    elem.lastjump = Math.abs(jump);
    setTimeout(() => void ScrollToResolver(elem), 30);
  } else {
    elem.lastjump = null;
  }
}
function openModal() {
  document.getElementsByClassName("modal__toggle")[0].checked = true;
}
function closeModal() {
  document.getElementsByClassName("modal__toggle")[0].checked = false;
}
