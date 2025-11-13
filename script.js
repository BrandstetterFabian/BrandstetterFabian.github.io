class Clicker{
    clickCount = 200;
    clicksPerSecond = 1;

    freakyClickerClickIncrease = 1;
    freakyClickerPrice = 30;
    freakyClickerAmount = 0;

    geekedFreakClickIncrease = 10;
    geekedFreakPrice = 200;
    geekedFreakAmount = 0;

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
    buyFreakyClicker(){
        if(this.clickCount >= this.freakyClickerPrice){
            this.increaseClicksPerSecond(this.freakyClickerClickIncrease, this.freakyClickerPrice);
            this.freakyClickerPrice += 10;
            this.freakyClickerAmount++;
            document.getElementById("btn_buyFreakyClicker").innerHTML = this.freakyClickerPrice + " clicks";
            document.getElementById("div_freakyClickerAmount").innerHTML = this.freakyClickerAmount + "x";
        }
    }
    buyGeekedFreak(){
        if(this.clickCount >= this.geekedFreakPrice){
            this.increaseClicksPerSecond(this.geekedFreakClickIncrease, this.geekedFreakPrice);
            this.geekedFreakPrice += 100;
            this.geekedFreakAmount++;
            document.getElementById("btn_buyGeekedFreak").innerHTML = this.geekedFreakPrice + " clicks";
            document.getElementById("div_geekedFreakAmount").innerHTML = this.geekedFreakAmount + "x";
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
class ClickerItem{
    constructor(name, clickIncrease, cps, basePrice){
        this.name = name;
        this.clickIncrease = clickIncrease;
        this.cps = cps;

        if(!this.constructor.basePrice) basePrice = basePrice;
        if(!this.constructor.currentPrice) currentPrice = basePrice;
    }
    updatePrice(){

    }
}
class FreakyClicker extends ClickerItem{
    constructor(){
        super("freaky clicker", 3, 1, 10);
    }
}
class GeekedFreak extends ClickerItem{
    constructor(){
        super("geeked freak", 20);
    }
}

const clicker = new Clicker();
init();

function buyFreakyClicker(){
    clicker.buyFreakyClicker();
}
function buyGeekedFreak(){
    clicker.buyGeekedFreak();
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