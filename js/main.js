'use strict';

var intervalMachine = {
	name: 'Interval Machine',
	prepareTime: function () {return document.getElementById('prepare-time').value; },
    intensiveTime: function () {return document.getElementById('intensive-time').value; },
    restTime: function () {return document.getElementById('rest-time').value; },
    cooldownTime: function () {return document.getElementById('cooldown-time').value; },
    repeatNumber: function () {return document.getElementById('repeat-number').value; },
    elapsedTime: function () {return parseInt(this.prepareTime(), 10) + parseInt(this.intensiveTime(), 10) * parseInt(this.repeatNumber(), 10) + parseInt(this.restTime(), 10) * parseInt(this.repeatNumber(), 10) + parseInt(this.cooldownTime(), 10); },
    shiftTime: function () {return this.elapsedTime() - parseInt(this.prepareTime(), 10); },
    startMachine: function () {
        var elapsedTimeShow = this.elapsedTime();
        var prepareTimeShow = this.prepareTime();
        var i = 0;
        var endSound = document.getElementById('end-sound');
        var runCountdown = setInterval(function () { 
            i++;
            if (i === prepareTimeShow) {
                endSound.play();
            }
            //console.log(this.prepareTime() );
            elapsedTimeShow--;
            document.getElementById('clock-ui').innerHTML = elapsedTimeShow;
            if (elapsedTimeShow === 0) {
                clearInterval(runCountdown);
                
                endSound.play();
            }
        }, 1000);
        
        
    }
	
};

var startButton = document.getElementById('start-intervals');
startButton.onclick = function () {intervalMachine.startMachine(); };

