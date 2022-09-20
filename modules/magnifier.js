/* magnification factor of seating chart */
let magnification = 1;

// + magnification button
let maximize = document.querySelector('#maximize');
// - magnification button
let minimize = document.querySelector('#minimize');
// displays current magnification to user
let zoom_spec = document.querySelector('#zoom-spec');

let maximum_magnification = 1.75;
let minimum_magnification = .25;
let magnification_shift = .25;

maximize.addEventListener('click', () => {
    if (magnification + magnification_shift >= maximum_magnification) {
        // if you reach max magnification, disable the button to prevent
        //      further magnification
        maximize.disabled = true;
    } else if (magnification <= minimum_magnification) {
        // you'll no longer be at the minimum magnification if you zoom in
        minimize.disabled = false;
    }

    magnification += magnification_shift;
    /* table variable declared in index.js */
    TABLE.style.zoom = magnification;

    zoom_spec.textContent = `${magnification}x`;
});

// minimum magnification = .25
minimize.addEventListener('click', () => {
    if (magnification >= maximum_magnification) {
        // you'll no longer be at the maximum magnification if you zoom out
        maximize.disabled = false;
    } else if (magnification - magnification_shift <= minimum_magnification) {
        // if you reach min magnification, disable the button to prevent
        //      further zooming out
        minimize.disabled = true;
    }

    magnification -= magnification_shift;
    /* table variable declared in index.js */
    TABLE.style.zoom = magnification;

    zoom_spec.textContent = `${magnification}x`;
});