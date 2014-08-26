var open    = false,
    btn     = document.getElementById('navigation-toggle'),
    bar     = document.getElementById('navigation'),
    cn      = 'hidden';

function updateElement(isOpen, elm, cn) {
    if (!isOpen) {
        elm.className += ' ' + cn;
    } else {
        elm.className = elm.className.replace(/(?:^|\s)hidden(?!\S)/g, '');
    }
}

btn.onclick = function() {
    open = !open;
    updateElement(open, bar, cn);
    console.log('jeje');
}
