var BCLS_site = ( function (window, document) {
  var all_sidenav_links = document.querySelectorAll('.sidenav a'),
    href = window.location.pathname,
    i,
    iMax,
    p1,
    p2,
    pSib,
    pChild;
      
  iMax = all_sidenav_links.length;
  for (i = 0; i < iMax; i++) {
    if (all_sidenav_links[i].getAttribute('href') === href) {
      all_sidenav_links[i].setAttribute('class', 'bcls-active');
      all_sidenav_links[i].parentElement.setAttribute('class', 'bcls-active');
      p1 = all_sidenav_links[i].parentNode;
      pSib = p1.nextSibling;
      pChild = p1.firstChild;
      if (p1.nodeName === 'LI') {
        p2 = p1.parentNode;
        p2.setAttribute('style', 'display:block');
      } else if (pSib.nodeName === 'H5') {

      }
    }
  }
})(window, document);