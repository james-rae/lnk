const dayta = [
    { u: 'www.love-and-hisses.com/', i: 'rufous' },
    { u: 'en.wikipedia.org/wiki/Main_Page', i: 'wik' },
    { u: 'www.metal-archives.com/', i: 'dio' },
    { u: 'www.hipmuseum.com/', i: 'mrpaullanglois' },
    { u: 'www.prestigeguitars.com/', i: 'wook' },
    { u: 'antifandom.com/solforge/wiki/SolForge_Wiki', i: 'forge' },
    { u: 'grousewood-games.github.io/solforge/play/', i: 'mmw' },
    { u: 'climate.weather.gc.ca/radar/index_e.html?site=CASKR', i: 'doom' },
    { u: 'earth.nullschool.net/#current/wind/surface/level/orthographic=-78.24,43.54,2612/loc=-79.528,43.619', i: 'whind' },
    { u: 'developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects', i: 'moz' },
    { u: 'javascript.info/', i: 'mjs' },
    { u: 'css-tricks.com/', i: 'css' },
    { u: 'www.joshwcomeau.com/goodies/', i: 'jc' },
    { u: 'www.redblobgames.com/', i: 'blob' },
    { u: 'www.fffuel.co', i: 'fffuel' },
    { u: 'app.codeimage.dev', i: 'code' },
    { u: 'krita.org/en/', i: 'krit' },
    { u: 'andykehoe.art/', i: 'kehoe' },
    { u: 'www.ninnsalaun.com/', i: 'ninn' },
    { u: 'www.photopea.com/', i: 'pea' },
    { u: 'dnalc.cshl.edu/resources/animations/', i: 'dna' }
];

const nugget = data => {
    const img = new Image();
    img.src = `img/${data.i}.jpg`;

    const anchor = document.createElement('a');
    anchor.href = 'https://' + data.u;

    anchor.appendChild(img);

    return anchor;
};

window.onload = () => {
    const list = document.getElementById('lisht');

    dayta.forEach(d => list.appendChild(nugget(d)));
};
