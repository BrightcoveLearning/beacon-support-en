var BCLS_toc = ( function (window, document) {
  var h2s = document.getElementsByTagName('h2'),
    in_page_nav = document.getElementById('in_page_nav'),
    h2,
    li,
    link,
    i,
    iMax,
    frag = document.createDocumentFragment();

    iMax = h2s.length;
    for (i = 0; i < iMax; i++) {
      h2 = h2s[i];
      if (h2.id) {
        li = document.createElement('li');
        link = document.createElement('a');
        link.setAttribute('href', '#' + h2.id);
        link.setAttribute('style', 'color:rgb(11, 155, 179);');
        link.textContent = h2.textContent;
        li.appendChild(link);
        frag.appendChild(li);
      }
    }
    in_page_nav.appendChild(frag);''
})(window, document);