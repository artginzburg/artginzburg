const defaults = {
  proto: 'https://',
};

const links = {
  instagram: 'www.instagram.com/art.ginzburg/',
  steam: 'steamcommunity.com/id/artginzburg',
  telegram: 't.me/ginzart',
  mustapp: 'mustapp.com/@artginzburg',
  vscode: 'code.visualstudio.com/',
  html: 'ru.wikipedia.org/wiki/HTML5',
  css: 'ru.wikipedia.org/wiki/CSS',
  js: 'www.javascript.com/',
  react: 'reactjs.org/',
  nodejs: 'nodejs.org/en/',
  mongo: 'www.mongodb.com/',
  yapraktikum: 'praktikum.yandex.ru/',
  'yapraktikum-webdev-portfolio': 'github.com/artginzburg/yandex.praktikum-portfolio',
  ibdp: 'www.ibo.org/programmes/diploma-programme/',
};

for (const key in links) {
  if (Object.prototype.hasOwnProperty.call(links, key)) {
    links[key] = defaults.proto + links[key];
  }
}

export default links;
