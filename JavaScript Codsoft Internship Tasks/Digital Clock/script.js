function showTime() {
    var updateClock = function () {
        var date = new Date();
        var h = date.getHours() % 12 || 12;
        var m = date.getMinutes();
        var s = date.getSeconds();
        var session = h < 12 ? "AM" : "PM";

        var time = h + ":" + (m < 10 ? "0" : "") + m + ":" + (s < 10 ? "0" : "") + s + " " + session;

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