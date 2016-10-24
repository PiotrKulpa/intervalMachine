

var intervalMachine = {
	name: 'Interval Machine',
	prepareTime: function () {return document.getElementById('prepare-time').innerHTML; },
    intensiveTime: function () {return document.getElementById('intensive-time').innerHTML; },
    restTime: function () {return document.getElementById('rest-time').innerHTML; },
    cooldownTime: function () {return document.getElementById('cooldown-time').innerHTML; },
    //ustawia interwały i zwraca pozostały czas do końca
    startMachine: function () {}
	
};
console.log(intervalMachine.intensiveTime());
