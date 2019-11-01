var BCLS_site = (function(window, document) {
  var all_sidenav_links = document.querySelectorAll(".sidenav a"),
    href = window.location.pathname,
    i,
    iMax,
    currentLink,
    p1,
    p2,
    pSib,
    pChild;

  iMax = all_sidenav_links.length;
  for (i = 0; i < iMax; i++) {
    currentLink = all_sidenav_links[i];
    if (currentLink.getAttribute("href") === href) {
      currentLink.setAttribute("class", "bcls-active");
      currentLink.parentElement.setAttribute("class", "bcls-active");
      if (currentLink.getAttribute("href") !== "/") {
        p1 = currentLink.parentElement;
        pSib = p1.previousElementSibling;
        pNextSib = pSib.previousElementSibling;
        if (p1.nodeName === "LI") {
          p2 = p1.parentNode;
          p2.setAttribute("style", "display:block");
        } else if (pSib.nodeName === "H5") {
          pNextSib.setAttribute("style", "display:block");
        }
      }
    }
  }
})(window, document);
