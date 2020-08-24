
function bangcuuchuong()
{
    document.write("<table border=1 width=75% cellspacing='0' cellpadding='3'>")
    for(i=1;i<=9;i++)
    {
        document.write("<tr>")
        for(j=2;j<=9;j++)
            document.write("<td>" +j + "x" + i +"="+ (j*i));
        document.write("</td>");
    }
    document.write("</tr></table>")


    // let sout;
    // sout = "<table border='1' width='75%' cellspacing='0' cellpadding='3'>"
    // for (i = 1; i <= 9; i++) {
    //     sout = sout + "<tr>";
    //     for (j = 2; j <= 9; j++) {
    //         sout = sout + "<td>" + j + "x" + i + "=" + j*i + "</td>";
    //     }
    //     sout = sout + "</tr>";
    // }
    // sout = sout + "</table>";
    // document.write(sout);
}
