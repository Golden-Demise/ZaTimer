window.addEventListener("load", function() {
    document.querySelector('#subtitlebox').innerHTML = "距離黑笥上次開台，已經過了：";
    document.querySelector('#loadingboxl').style.display = 'none';
    document.querySelector('#countbox').style.display = 'block';
    const startDate = dayjs(data.pubt);
    setDate();
    setInterval(() => setDate(), 1000);

    function setDate() {
        let secs = dayjs().diff(startDate, 'second');
        let mins = Math.floor(secs / 60);
        let hours = Math.floor(mins / 60);
        let days = Math.floor(hours / 24);
        secs = secs - (mins * 60)
        mins = mins - (hours * 60);
        hours = hours - (days * 24);
        let secs2 = secs.toString().padStart(2, '0');
        let mins2 = mins.toString().padStart(2, '0');
        let hours2 = hours.toString().padStart(2, '0');
        document.querySelector('#day').innerHTML = days;
        document.querySelector('#hour').innerHTML = hours2;
        document.querySelector('#min').innerHTML = mins2;
        document.querySelector('#sec').innerHTML = secs2;
    }
});

function gettime() {
    let sday = document.getElementById('day').innerText;
    let shour = document.getElementById('hour').innerText;
    let smin = document.getElementById('min').innerText;
    let ssec = document.getElementById('sec').innerText;
    let stime = "黑笥已經" + sday + "天" + shour + "小時" + smin + "分鐘" + ssec + "秒沒開台了";
    return stime;
}

function nakirikawaii() {
    let sresult = "https://ayame.canaria.cc/";
    window.open(sresult);
}
