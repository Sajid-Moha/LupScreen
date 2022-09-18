let magnification = 1;
/* table variable declared in seats.js */
let maximize = document.querySelector('#maximize');
let minimize = document.querySelector('#minimize');
let zoomSpec = document.querySelector('#zoom-spec');

maximize.addEventListener('click', () => {
    if (magnification + .25 >= 1.75) {
        maximize.disabled = true;
        console.log('bruh')
    } else if (magnification <= .25) {
        minimize.disabled = false;
    }

    magnification += .25;
    table.style.zoom = magnification;

    zoomSpec.textContent = `${magnification}x`;
});

minimize.addEventListener('click', () => {
    if (magnification >= 1.75) {
        maximize.disabled = false;
    } else if (magnification - .25 <= .25) {
        minimize.disabled = true;
    }

    magnification -= .25;
    table.style.zoom = magnification;

    zoomSpec.textContent = `${magnification}x`;
});