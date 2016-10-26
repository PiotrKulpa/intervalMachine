'use strict';

var intervalMachine = {
	name: 'Interval Machine',
	prepareTime: function () {return document.getElementById('prepare-time').value; },
    intensiveTime: function () {return document.getElementById('intensive-time').value; },
    restTime: function () {return document.getElementById('rest-time').value; },
    cooldownTime: function () {return document.getElementById('cooldown-time').value; },
    //ustawia interwały i zwraca pozostały czas do końca
    startMachine: function () {
        var i = 1;
        setInterval(function () { alert(i++); }, 1000);
        var test = this.prepareTime();
        console.log(test);
    }
	
};

var startButton = document.getElementById('start-intervals');
startButton.onclick = function () {intervalMachine.startMachine(); };
