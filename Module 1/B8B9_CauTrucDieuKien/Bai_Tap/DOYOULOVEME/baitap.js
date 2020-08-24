function myFunction() {
    alert('No');
}
function nomyFunction() {
    var widthbot = Math.round(Math.random() * window.innerWidth);
    var heightbot = Math.round(Math.random() * window.innerHeight);
    document.getElementById('nono').style.left = widthbot + 'px';
    document.getElementById('nono').style.top = heightbot + 'px';
}