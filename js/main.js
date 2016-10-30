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
        var prepareTimeShow = parseInt(this.prepareTime(), 10);
        var intensiveTimeShow = parseInt(this.intensiveTime(), 10);
        var restTimeShow = parseInt(this.restTime(), 10);
		var cooldownTimeShow = parseInt(this.cooldownTime(), 10);
		var repeatNumberShow = parseInt(this.repeatNumber(), 10);
		
		//checking if inputs aren't empty
		if (!prepareTimeShow || !intensiveTimeShow || !restTimeShow || !cooldownTimeShow || !repeatNumberShow) {
			document.getElementById('msg').innerHTML = 'Pola nie mogą być puste';
		} else {
			document.getElementById('msg').innerHTML = '';
			var rounds = 0;
			document.getElementById('rounds').innerHTML =  ' / ' + this.repeatNumber();
			document.getElementById('rounds-left').innerHTML = rounds;
			var i = 0;//main counter
			var j = 0;//intensive counter
			var k = 0;//rest counter
			var l = 0;//repeat counter
			var endSound = document.getElementById('end-sound');

			//Main countdown process
			var runCountdown = setInterval(function () {
				i += 1;
				//Finish prepare time 
				if (i === prepareTimeShow) {
					endSound.play();
				//Start Intensive time    
				} else if (i > prepareTimeShow) {
					j += 1;
					if (j === intensiveTimeShow && l < repeatNumberShow) {
						endSound.play();
						//start rest time
					} else if (j > intensiveTimeShow) {
						k += 1;
						if (k === restTimeShow && l < repeatNumberShow) {
							endSound.play();
							rounds += 1;
							l += 1;
							document.getElementById('rounds-left').innerHTML = rounds;
							if (l > repeatNumberShow) {
								document.getElementById('rounds-left').innerHTML = repeatNumberShow;
							}
							//reset timers & begins intensive & rest loop
						} else if (k > restTimeShow) {
							j = 1;
							k = 0;
						}
					}
				}
				//console.log(cooldownTimeShow);
				elapsedTimeShow -= 1;
				document.getElementById('clock-ui').innerHTML = elapsedTimeShow;
				if (elapsedTimeShow === 0) {
					clearInterval(runCountdown);

					endSound.play();
				}
			}, 1000);
		}
		var stopButton = document.getElementById('stop-intervals');
		stopButton.onclick = function () {
			clearInterval(runCountdown);
			document.getElementById('rounds-left').innerHTML = 0;
		};
        
        
    }
	
	
};

var startButton = document.getElementById('start-intervals');
startButton.onclick = function () {intervalMachine.startMachine(); };



