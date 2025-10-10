class Clicker{
    clickCount = 0;
    clicksPerSecond = 1;

    freakyClickerPrice = 30;
    freakyClickerAmount = 0;

    secondsPlayed = 0;

    increaseClicksPerSecond(amount, price){
            this.clicksPerSecond += amount;
            this.clickCount -= price;
    }
    increaseClickCount(){
        for(let i = 0; i < this.clicksPerSecond; i++){
            this.clickCount += 1;
        }

        updateStats();
    }
    buyFreakyClicker(amount){
        if(this.clickCount >= this.freakyClickerPrice){
            this.increaseClicksPerSecond(amount, this.freakyClickerPrice);
            this.freakyClickerPrice += 10;
            this.freakyClickerAmount++;
            document.getElementById("btn_buyFreakyClicker").innerHTML = this.freakyClickerPrice + " clicks";
            document.getElementById("div_freakyClickerAmount").innerHTML = this.freakyClickerAmount + "x";
        }
    }
    updateStats(){
        document.getElementById("div_clicksPerSecond").innerHTML = this.clicksPerSecond.toLocaleString('de-DE');
        document.getElementById("div_totalClicks").innerHTML = this.clickCount.toLocaleString('de-DE');
        document.getElementById("div_secondsPlayed").innerHTML = this.secondsPlayed;
    }
    startTimer() {
        setInterval(() => {
            this.secondsPlayed++;
            this.increaseClickCount();
            updateStats();
        }, 1000);
      }
}
const clicker = new Clicker();
init();

function buyFreakyClicker(amount){
    clicker.buyFreakyClicker(amount);
}
function countUp(){
    clicker.increaseClickCount();
}
function updateStats(){
    clicker.updateStats();
}
function init(){
    clicker.updateStats();
    clicker.startTimer();
}