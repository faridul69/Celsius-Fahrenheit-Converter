
function ctof()
{
    var a=parseInt(document.getElementById('c_f').value);
    var result=(a*1.8)+32;

    document.getElementById('c_f_result').innerHTML =a+" সেলসিয়াস = " +result+ " ফারেনহাইট";
}
function ftoc()
{
    var a=parseInt(document.getElementById('c_f').value);
    var result=(a-32)/1.8;

    document.getElementById('c_f_result').innerHTML =a+" ফারেনহাইট = " +result+ " সেলসিয়াস";
}