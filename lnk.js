let listDiv;
let rootUrl;

const iconData = {
    root: [
        { u: 'www.love-and-hisses.com/', i: 'rufous' },
        { u: 'en.wikipedia.org/wiki/Main_Page', i: 'wik' },
        { u: 'www.metal-archives.com/', i: 'dio' },
        { u: 'www.hipmuseum.com/', i: 'mrpaullanglois' },
        { u: 'www.prestigeguitars.com/', i: 'wook' },
        { u: 'www.musicca.com/tools', i: 'toot' },
        { u: 'antifandom.com/solforge/wiki/SolForge_Wiki', i: 'forge' },
        { u: 'grousewood-games.github.io/solforge/play/', i: 'mmw' },
        { u: 'climate.weather.gc.ca/radar/index_e.html?site=CASKR', i: 'doom' },
        { u: 'earth.nullschool.net/#current/wind/surface/level/orthographic=-78.24,43.54,2612/loc=-79.528,43.619', i: 'whind' },
        { u: 'developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects', i: 'moz' },
        { u: 'javascript.info/', i: 'mjs' },
        { u: 'patriciogonzalezvivo.com', i: 'pgv' },
        { u: 'css-tricks.com/', i: 'css' },
        { u: 'www.joshwcomeau.com/', i: 'jc' },
        { u: 'www.abjt.dev/lab', i: 'abjt' },
        { u: 'www.redblobgames.com/', i: 'blob' },
        { u: 'www.fffuel.co', i: 'fffuel' },
        { u: 'www.learnui.design/tools/', i: 'lui' },
        { u: 'leonardocolor.io/', i: 'leo' },
        { u: 'app.codeimage.dev', i: 'code' },
        { u: 'offscreencanvas.com', i: 'ocanv' },
        { u: 'theartsquirrel.com', i: 'nutter' },
        { u: 'dnalc.cshl.edu/resources/animations/', i: 'dna' },
        { u: '#code', i: 'shampler' },
        { u: '#ahhhrt', i: 'shutyouryapper' },
        { u: '#uchube', i: 'mike' }
    ],
    '#trickery': [{ u: 'css-tricks.com/', i: 'css' }],
    '#uchube': [
        { u: 'youtu.be/PeihcfYft9w', i: 'democracy' },
        { u: 'youtu.be/RLh62htgbW8', i: 'mercyful' },
        { u: 'youtu.be/zzk0VQ0dVMU', i: 'graf' },
        { u: 'youtu.be/-xr9rIQxwj4', i: 'greatsim' }
    ],
    '#code': [
        { u: 'pixijs.com/', i: 'pixi' },
        { u: 'threejs.org', i: 'three' },
        { u: 'www.blender.org', i: 'blender' },
        { u: 'krita.org/en/', i: 'krit' },
        { u: 'www.photopea.com/', i: 'pea' }
    ],
    '#ahhhrt': [
        { u: 'andykehoe.art/', i: 'kehoe' },
        { u: 'www.ninnsalaun.com/', i: 'ninn' }
    ]
};

const nugget = data => {
    const img = new Image();
    img.src = `img/${data.i}.jpg`;

    const anchor = document.createElement('a');

    // hash redirect or external link
    anchor.href = (data.u.startsWith('#') ? rootUrl : 'https://') + data.u;

    anchor.appendChild(img);

    return anchor;
};

const loadList = () => {
    // empty anything exisitng
    while (listDiv.firstChild) {
        listDiv.removeChild(listDiv.firstChild);
    }

    // parse url, find icon list
    const fancyUrl = new URL(window.location);
    const urlHash = fancyUrl.hash;
    let dataArr;
    let hasher = false;

    if (urlHash && urlHash.length > 1) {
        dataArr = iconData[urlHash];
        if (dataArr) {
            // wasn't invalid url hash
            hasher = true;
        }
    }

    if (hasher) {
        // inject back button
        listDiv.appendChild(nugget({ u: '#', i: 'back' }));
    } else {
        // either root, or invalid hash. load root
        dataArr = iconData.root;
    }

    // build icon list
    dataArr.forEach(d => listDiv.appendChild(nugget(d)));
};

window.onload = () => {
    const fancyUrl = new URL(window.location);
    rootUrl = fancyUrl.host + fancyUrl.pathname;
    listDiv = document.getElementById('lisht');

    // watch for url hash changes
    window.addEventListener('hashchange', hce => {
        loadList();
    });

    loadList();
};
