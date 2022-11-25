var isStart = 0;
var container = document.createElement('div');
document.body.appendChild(container);
container.setAttribute('class', 'container');

var time = document.createElement('label');
time.setAttribute('id', 'time');
document.body.appendChild(time);
var lap = document.createElement('button');
lap.setAttribute('id', 'lap');
lap.innerText = 'LAP';
var laptimes = document.createElement('div');
var start = document.createElement('button');
start.setAttribute('id', 'start');
laptimes.setAttribute('id', 'laptimes');
start.innerText = 'Start';
container.appendChild(lap);
lap.addEventListener('click', getLapTime);
container.appendChild(start);
start.addEventListener('click', startTime)
document.body.appendChild(container);
var min = 00;
var sec = 00,
    hour = 00;
time.innerText = hour + ":" + min + ":" + sec;

function clock() {
    time.innerText = hour + ":" + min + ":" + sec;

    sec += 1;
    min += parseInt(sec / 60);

    sec = sec % 60;
    hour += parseInt(min / 60);
    min = min % 60;

}
var setid;

function startTime() {
    if (isStart == 0) {
        start.innerText = 'Stop';
        lap.innerText = 'Lap';
        isStart = 1;
        setid = setInterval(clock, 1000);
    } else {
        start.innerText = 'Start';
        lap.innerText = 'Reset';
        isStart = 0;
        clearInterval(setid);
    }
}
var nooflap = 0;
var next_hour = 0;
var next_min = 0;
var next_sec = 0;

function getLapTime() {

    nooflap += 1;
    if (isStart == 1) {
        var LapNo = `Lap ${nooflap}`

        var lap_time = document.createElement('div');
        if (sec - next_sec < 0)
            next_min += 1;
        var currentLapTime = parseInt(hour - next_hour) + ':' + parseInt(min - next_min) + ':' + parseInt(Math.abs(sec - next_sec));
        lap_time.innerText = LapNo + "               " + currentLapTime;
        laptimes.appendChild(lap_time);
        var hr = document.createElement('hr');
        laptimes.appendChild(hr);
        document.body.appendChild(laptimes);
        next_hour = hour;
        next_min = min;
        next_sec = sec;
    } else {
        hour = 0;
        min = 0;
        sec = 0;
        time.innerText = hour + ':' + min + ':' + sec;
        var remove = document.getElementById('laptimes')
        document.body.removeChild(remove);
        nooflap = 0;
        laptimes.innerHTML = "";
        next_sec = 0, next_min = 0, next_hour = 0;

    }

}