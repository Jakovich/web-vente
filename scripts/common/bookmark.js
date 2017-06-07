'use strict';

function addBookmarku() {
  var title = '"Биржа Бизнеса" - продажа готового бизнеса';
  var href = 'http://www.proday-biznes.ru/';

  if (document.all) {
    window.external.AddFavorite(href, title);
  } else {
    if (window.sidebar) {
      window.sidebar.addPanel(title, href, "")
    } else alert("Нажмите CTRL-D, чтобы добавить страницу в закладки.");
  }
}
