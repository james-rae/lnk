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
        { u: 'www.joshwcomeau.com/', i: 'jc' },
        { u: 'www.abjt.dev/lab', i: 'abjt' },
        { u: 'www.redblobgames.com/', i: 'blob' },
        { u: 'www.fffuel.co', i: 'fffuel' },
        { u: 'www.learnui.design/tools/', i: 'lui' },
        { u: 'leonardocolor.io/', i: 'leo' },
        { u: 'app.codeimage.dev', i: 'code' },
        { u: 'offscreencanvas.com', i: 'ocanv' },
        { u: 'theartsquirrel.com', i: 'nutter' },
        { u: 'oimo.io/works/life/', i: 'rlife' },
        { u: 'dnalc.cshl.edu/resources/animations/', i: 'dna' },
        { u: 'neal.fun', i: 'neal' },
        { u: 'ytoo.org', i: 'ytoo' },
        { u: '#trickery', i: 'css' },
        { u: '#code', i: 'shampler' },
        { u: '#ahhhrt', i: 'shutyouryapper' },
        { u: '#uchube', i: 'mike' },
        { u: '#qaabtoaaapfo', i: 'qaabtoaaapfo' }
    ],
    '#trickery': [
        { u: 'css-tricks.com/', i: 'css' },
        { u: 'css-tricks.com/snippets/css/a-guide-to-flexbox/', i: 'flex' },
        { u: 'css-tricks.com/snippets/css/complete-guide-grid/', i: 'grid' },
        { u: 'css-tricks.com/css-container-queries/', i: 'contq' },
        { u: 'css-tricks.com/css-length-units/', i: 'units' },
        { u: 'css-tricks.com/a-complete-guide-to-css-media-queries/', i: 'media' },
        { u: 'css-tricks.com/a-complete-guide-to-links-and-buttons/', i: 'nah' },
        { u: 'css-tricks.com/css-ing-candy-ghost-buttons/', i: 'boo' }
    ],
    '#uchube': [
        { u: 'www.youtube.com/@dangreenheck', i: 'greenheck' },
        { u: 'youtu.be/PeihcfYft9w', i: 'democracy' },
        { u: 'youtu.be/RLh62htgbW8', i: 'mercyful' },
        { u: 'youtu.be/zzk0VQ0dVMU', i: 'graf' },
        { u: 'youtu.be/hkDD03yeLnU', i: 'vb' },
        { u: 'youtu.be/Ca9CJ1u6ACg', i: 'melchett' },
        { u: 'youtu.be/bjVNOGEWzv4', i: 'torlet' },
        { u: 'youtu.be/Cx8sl2uC46A', i: 'bard' },
        { u: 'youtu.be/zSgiXGELjbc', i: 'glorious' },
        { u: 'youtu.be/a5d9BrLN5K4', i: 'milkshake' },
        { u: 'youtu.be/S18Jrpz1wsw', i: 'anhoop' },
        { u: 'youtu.be/hFoLv3bTLSc', i: 'klown' },
        { u: 'youtu.be/D40WXo9eP4Y', i: 'clovis' },
        { u: 'youtu.be/PDRFPXtBSIg', i: 'goodpie' }
    ],
    '#code': [
        { u: 'pixijs.com/', i: 'pixi' },
        { u: 'threejs.org', i: 'three' },
        { u: 'www.blender.org', i: 'blender' },
        { u: 'krita.org/en/', i: 'krit' },
        { u: 'www.photopea.com/', i: 'pea' },
        { u: 'inkscape.org', i: 'ink' },
        { u: 'www.gafferhq.org', i: 'gaff' }
    ],
    '#ahhhrt': [
        { u: 'andykehoe.art/', i: 'kehoe' },
        { u: 'www.ninnsalaun.com/', i: 'ninn' },
        { u: 'www.richardwellsgraphics.com', i: 'slippery' },
        { u: 'www.misunholdorf.com', i: 'dorf' },
        { u: 'www.heart-to-art.com/', i: 'gross' },
        { u: 'www.rheaoneill.com/', i: 'rheo' },
        { u: 'robertbissell.com', i: 'bissell' },
        { u: 'taplink.cc/liskaflower', i: 'liska' },
        { u: 'www.laivipoder.com', i: 'poder' },
        { u: 'shaylenastenback.com', i: 'shaysten' },
        { u: 'www.lilyseikajones.com', i: 'lsj' },
        { u: 'sarahmckendry.ca/portfolio', i: 'smk' },
        { u: 'www.jogrundyart.co.uk', i: 'grundy' },
        { u: 'artistsincanada.com/margaret', i: 'mchw' },
        { u: 'www.kisungkoh.com', i: 'koh' },
        { u: 'www.dewiplass.com/', i: 'dewi' },
        { u: 'andrewhopgoodart.com.au', i: 'hopgood' },
        { u: 'www.helenahpornsiri.com', i: 'hahp' }
    ],
    '#qaabtoaaapfo': [
        { u: 'www.stuartmcmillen.com/comics/', i: 'stumc' },
        { u: 'www.thegreatsimplification.com/', i: 'greatsim' },
        { u: 'wtfhappenedin1971.com', i: '1971' }
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
    rootUrl = fancyUrl.origin + fancyUrl.pathname; // change .origin to .host to test on file system
    listDiv = document.getElementById('lisht');

    // watch for url hash changes
    window.addEventListener('hashchange', hce => {
        loadList();
    });

    loadList();
};
