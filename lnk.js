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
        { u: 'watabou.github.io', i: 'procarc' },
        { u: 'easingwizard.com', i: 'easing' },
        { u: 'www.fffuel.co', i: 'fffuel' },
        { u: 'www.learnui.design/tools/', i: 'lui' },
        { u: 'leonardocolor.io/', i: 'leo' },
        { u: 'app.codeimage.dev', i: 'code' },
        { u: 'offscreencanvas.com', i: 'ocanv' },
        { u: 'theartsquirrel.com', i: 'nutter' },
        { u: 'oimo.io/works/life/', i: 'rlife' },
        { u: 'dnalc.cshl.edu/resources/animations/', i: 'dna' },
        { u: 'neal.fun', i: 'neal' },
        { u: 'arbesman.net/computationaldelights/', i: 'dlite' },
        { u: 'ytoo.org', i: 'ytoo' },
        { u: '#trickery', i: 'css' },
        { u: '#code', i: 'shampler' },
        { u: '#ahhhrt', i: 'shutyouryapper' },
        { u: '#uchube', i: 'mike' },
        { u: '#philm', i: 'philm' },
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
        { u: 'youtu.be/PDRFPXtBSIg', i: 'goodpie' },
        { u: 'youtu.be/_AcegrdUAs8', i: 'squiddy' },
        { u: 'youtu.be/zXx8wrpeEwE', i: 'meister' },
        { u: 'youtu.be/EQiSgWGAc24', i: 'plantman' }
    ],
    '#philm': [
        { u: 'youtu.be/9ZXFaaQJb0c', i: 'rusty' },
        { u: 'youtu.be/dt4Nz-69_Yk', i: 'progeny' },
        { u: 'youtu.be/x4BSuQJDuLQ', i: 'nsfw' },
        { u: 'youtu.be/UY6CF6eqGd4', i: 'cupcake' },
        { u: 'youtu.be/M6czqkZs4aQ', i: 'senser' },
        { u: 'youtu.be/2S4zX-l6UD4', i: 'robbie' },
        { u: 'youtu.be/BTBrOZiqAOo', i: 'gutter' },
        { u: 'youtu.be/XYLgwxbwEb8', i: 'tunnel' },
        { u: 'youtu.be/Bfdirk3dCew', i: 'white-tail' },
        { u: 'youtu.be/sJ5ZEQGiVcw', i: 'fry' },
        { u: 'youtu.be/O2Yea-nuoZs', i: 'moon' },
        { u: 'youtu.be/aj5jr794EEA', i: 'call-center' },
        { u: 'youtu.be/PGgRH7-Qs9g', i: 'tell' },
        { u: 'youtu.be/js2932fcKOU', i: 'turn-around' },
        { u: 'youtu.be/WeYTWhl84cs', i: 'barber' },
        { u: 'youtu.be/pX2nOzce9RI', i: 'roomtone' },
        { u: 'youtu.be/e-ta-kl-Bh4', i: 'flesh-blud' },
        { u: 'youtu.be/6eaZZc7O2PE', i: 'hole' },
        { u: 'youtu.be/_qOt2UIUjXc', i: 'barb' },
        { u: 'youtu.be/hCd47WDgAsE', i: 'veggy' },
        { u: 'youtu.be/Q2aoN61oKuI', i: 'doll' },
        { u: 'youtu.be/Hik4n3Ld88Y', i: 'warning' },
        { u: 'youtu.be/JnXOE6FFoWA', i: 'cope' },
        { u: 'youtu.be/nnfh3qcpBxA', i: 'well' }
        // { u: 'youtu.be/', i: '' },
    ],
    '#code': [
        { u: 'pixijs.com/', i: 'pixi' },
        { u: 'threejs.org', i: 'three' },
        { u: 'threejsresources.com', i: 'tjsres' },
        { u: 'www.solidjs.com', i: 'solid' },
        { u: 'www.blender.org', i: 'blender' },
        { u: 'krita.org/en/', i: 'krit' },
        { u: 'www.photopea.com/', i: 'pea' },
        { u: 'inkscape.org', i: 'ink' },
        { u: 'www.gafferhq.org', i: 'gaff' },
        { u: 'www.youtube.com/@dangreenheck', i: 'greenheck' },
        { u: 'github.com/trimstray/the-book-of-secret-knowledge?tab=readme-ov-file#anger-table-of-contents', i: 'bkskn' },
        { u: 'github.com/EbookFoundation/free-programming-books?tab=readme-ov-file#resources', i: 'frebook' }
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
        { u: 'www.travischapmanart.com', i: 'chappers' },
        { u: 'www.lilyseikajones.com', i: 'lsj' },
        { u: 'sarahmckendry.ca/portfolio', i: 'smk' },
        { u: 'www.jogrundyart.co.uk', i: 'grundy' },
        { u: 'artistsincanada.com/margaret', i: 'mchw' },
        { u: 'www.kisungkoh.com', i: 'koh' },
        { u: 'www.dewiplass.com/', i: 'dewi' },
        { u: 'andrewhopgoodart.com.au', i: 'hopgood' },
        { u: 'www.helenahpornsiri.com', i: 'hahp' },
        { u: 'www.kaetlynable.com', i: 'kable' },
        { u: 'www.tamsinabbott.co.uk/portfolio/', i: 'tams' },
        { u: 'www.richardahnert.com', i: 'rahnert' },
        { u: 'dillonsamuelson.com/', i: 'dyelon' },
        { u: 'www.lisaericson.com', i: 'lerics' },
        { u: 'www.shadowscapes.com/', i: 'thelaw' },
        { u: 'www.mac-smith.com/', i: 'scurry' },
        { u: 'annaevans.co.nz', i: 'anevan' },
        { u: 'artofmarkbryan.com', i: 'mbry' },
        { u: 'www.mendezmendez.com', i: 'mendez' },
        { u: 'gillianruleart.com', i: 'rule' },
        { u: 'www.marneyward.com', i: 'ward' }
    ],
    '#qaabtoaaapfo': [
        { u: 'www.stuartmcmillen.com/comics/', i: 'stumc' },
        { u: 'www.thegreatsimplification.com/', i: 'greatsim' },
        { u: 'wtfhappenedin1971.com', i: '1971' },
        { u: 'nonzerosum.games', i: 'nzsg' },
        { u: 'pursuitofwonder.com', i: 'pow' },
        { u: 'youtube.com/@functionalmelancholic', i: 'sisy' }
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
