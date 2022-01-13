window.onload = function() {
    var secs = 00;
    var tens = 00;
    var mins = 00;

    var seconds = document.getElementById("seconds");
    var minutes = document.getElementById("minutes");
    var tensmic = document.getElementById("tens");

    var startBtn = document.getElementById("start");
    var stopBtn = document.getElementById("stop");
    var resetBtn = document.getElementById("reset");
    var flagBtn = document.getElementById("flagbtn");
    var clearBtn = document.getElementById("clearbtn");


    var flags = document.getElementById("flagdiv");
    var interval;

    flagBtn.onclick = function() {
        var content = document.createElement("p");
        content.innerHTML = minutes.innerHTML + ":" + seconds.innerHTML + ":" + tensmic.innerHTML;
        flags.appendChild(content);
    }

    clearBtn.onclick = function() {
        flags.innerHTML = "";
    }


    startBtn.onclick = function() {
        clearInterval(interval);
        interval = setInterval(startTimer, 3);
    }
    stopBtn.onclick = function() {
        clearInterval(interval);
    }
    resetBtn.onclick = function() {
        flags.innerHTML = "";
        clearInterval(interval);
        secs = 00;
        tens = 00;
        mins = 00;
        seconds.innerHTML = "00";
        tensmic.innerHTML = "00";
        minutes.innerHTML = "00";
    }

    function startTimer() {
        tens++;

        if (tens > 9) {
            tensmic.innerHTML = tens;
        } else if (tens <= 9) {
            tensmic.innerHTML = "0" + tens;
        }
        if (tens > 99) {
            secs++;
            tens = 00;
        }
        if (secs > 9) {
            seconds.innerHTML = secs;
        } else {
            seconds.innerHTML = "0" + secs;
        }
        if (secs > 59) {
            mins++;
            secs = 00;
        }
        if (mins > 9) {
            minutes.innerHTML = mins;
        } else {
            minutes.innerHTML = "0" + mins;
        }

    }

}
