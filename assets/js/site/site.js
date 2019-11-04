var BCLS_site = (function(window, document) {
  var all_sidenav_links = document.querySelectorAll(".sidenav a"),
    href = window.location.pathname,
    i,
    iMax,
    currentLink,
    parentNodeName,
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
        parentNodeName = p1.nodeName;
        switch (parentNodeName) {
          case 'H5':
            pNextSib = p1.nextElementSibling;
            pNextSib.removeAttribute('style');
            break;
          case 'LI':
            p2 = p1.parentElement;
            p2.removeAttribute('style');
            break;
        }
      }
    }
  }
})(window, document);
