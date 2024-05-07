const dayta = [
    /*
    { u: '', i: '' },
    { u: '', i: '' },
    { u: '', i: '' },
    { u: '', i: '' },
    { u: '', i: '' },
    { u: '', i: '' },
    { u: '', i: '' },
    { u: '', i: '' },
    { u: '', i: '' },
    { u: '', i: '' },
    { u: '', i: '' },
    { u: '', i: '' },
    { u: '', i: '' },
    { u: '', i: '' },
    { u: '', i: '' },
    { u: '', i: '' }
    */
];

const nugget = data => {
    const img = new Image();
    img.src = `img/${data.i}.png`;

    const anchor = document.createElement('a');
    // TODO pre-pend https:// if can rock it
    anchor.href = data.u;

    anchor.appendChild(img);

    return anchor;
};

window.onload = () => {
    const list = document.getElementById('lisht');

    dayta.forEach(d => list.appendChild(nugget(d)));
};
