function up() {
    let element = document.getElementById("mtp");
    element.style.top = parseInt(element.style.top) - 5 + 'px';
}
function down() {
    let element = document.getElementById("mtp");
    element.style.top = parseInt(element.style.top) + 5 + 'px';
}
function right() {
    let element = document.getElementById("mtp");
    element.style.top = parseInt(element.style.top) + 5 + 'px';
}
function left() {
    let element = document.getElementById("mtp");
    element.style.top = parseInt(element.style.top) -5 + 'px';
}
function moveSelection(evt) {
    switch (evt.key) {
        case 37:
            left();
            break;
        case 38:
            right();
            break;
        case 39;
            up();
            break;
        case 40;
            down();
            break;
    }
}
function docReady() {
    window.addEventListener('keydown', moveSelection);
}
