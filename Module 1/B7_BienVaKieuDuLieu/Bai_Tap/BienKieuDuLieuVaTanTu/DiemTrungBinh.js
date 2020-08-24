let Maths;
do {
    Maths = prompt('Nhập vào điểm Toán');
    Maths = parseInt(Maths)
} while (Maths<0 || Maths>10)
document.write('Maths ='+ Maths);
document.write('<br/>');
let Chemistry;
do {
    Chemistry = prompt('Nhập Vào điểm Hóa');
    Chemistry = parseInt(Chemistry);
} while (Chemistry<0 || Chemistry>10)
document.write('Chemistry =' + Chemistry);
document.write('<br/>');
let Physical;
do {
    Physical = prompt('Nhập Vào điểm Lý');
    Physical = parseInt(Physical);
} while (Physical<0 || Physical>10)
document.write('Physical =' + Physical);
document.write('<br/>');
average = (Maths + Chemistry + Physical)/3;
document.write('average = ' + average);