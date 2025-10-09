class Clicker{
    clickCount = 0;
}
const clicker = new Clicker();

function CountUp(){
    clicker.clickCount += 1;
    document.getElementById("output").innerHTML += clicker.clickCount;
}