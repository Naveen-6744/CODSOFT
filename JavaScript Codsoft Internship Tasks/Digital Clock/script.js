function showTime() {
    var updateClock = function () {
        var date = new Date();
        var h = date.getHours();
        var m = date.getMinutes();
        var s = date.getSeconds();
        var session = h < 12 ? "AM" : "PM";

        // Ensure hours, minutes, and seconds are two digits
        h = ("0" + h).slice(-2);
        m = ("0" + m).slice(-2);
        s = ("0" + s).slice(-2);

        var time = h + ":" + m + ":" + s + " " + session;

        document.getElementById("MyClockDisplay").innerText = time;
        document.getElementById("MyClockDisplay").textContent = time;

        var options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
        var today = date.toLocaleDateString('en-US', options);
        document.getElementById("DateDisplay").innerText = today;
        document.getElementById("DateDisplay").textContent = today;
    };
    updateClock();

    setInterval(updateClock, 1000);
}

showTime();