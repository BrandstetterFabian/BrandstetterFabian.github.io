class Clicker{
    clickCount = 0;
    clicksPerSecond = 0;
    secondsPlayed = 0;

    increaseClickPerSecond(){
        if(this.clickCount % 20 == 0){
            this.clicksPerSecond++;
        }
    }
    increaseClickCount(){
        for(let i = 0; i < this.clicksPerSecond; i++){
            this.clickCount += 1;
            this.increaseClickPerSecond();
        }

        updateStats();
    }
    updateStats(){
        document.getElementById("div_clicksPerSecond").innerHTML = this.clicksPerSecond.toLocaleString('de-DE');
        document.getElementById("div_totalClicks").innerHTML = this.clickCount.toLocaleString('de-DE');
        document.getElementById("div_secondsPlayed").innerHTML = this.secondsPlayed;
    }
    startTimer() {
        this.increaseClickPerSecond();
        setInterval(() => {
            this.secondsPlayed++;
            this.increaseClickCount();
            updateStats();
        }, 1000);
      }
}
const clicker = new Clicker();
init();

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