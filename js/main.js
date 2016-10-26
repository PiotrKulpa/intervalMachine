'use strict';

var intervalMachine = {
	name: 'Interval Machine',
	prepareTime: function () {return document.getElementById('prepare-time').value; },
    intensiveTime: function () {return document.getElementById('intensive-time').value; },
    restTime: function () {return document.getElementById('rest-time').value; },
    cooldownTime: function () {return document.getElementById('cooldown-time').value; },
    repeatNumber: function () {return document.getElementById('repeat-number').value; },
    clockUi: function () {return document.getElementById('clock-ui').innerHTML; },
    //ustawia interwały i zwraca pozostały czas do końca
    startMachine: function () {
        var elapsedTime = parseInt(this.prepareTime(), 10) + parseInt(this.intensiveTime(), 10) * parseInt(this.repeatNumber(), 10) + parseInt(this.restTime(), 10) * parseInt(this.repeatNumber(), 10) + parseInt(this.cooldownTime(), 10);
        setInterval(function () { 
            elapsedTime--;
            this.clockUi = elapsedTime;//niedziala
        }, 1000);
        
        console.log(elapsedTime);
    }
	
};

var startButton = document.getElementById('start-intervals');
startButton.onclick = function () {intervalMachine.startMachine(); };
