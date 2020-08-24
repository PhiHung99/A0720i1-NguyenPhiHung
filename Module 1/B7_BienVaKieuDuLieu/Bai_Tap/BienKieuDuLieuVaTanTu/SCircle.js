let radius;
let PI = 3.14;
do{
    radius = prompt('Nhập Vào Bán Kính Hình Tròn')
    radius = parseInt(radius);
} while (radius<0)
document.writeln('Radius =' + radius);
document.write('<br>');

    SCircle = PI * (radius*radius);
document.write('SCirle =' + SCircle);
document.write('<br>');

    perimeter =  2 * radius * PI;
document.write('perimeter =' + perimeter);