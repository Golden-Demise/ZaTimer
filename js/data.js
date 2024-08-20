// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCpqyE4MxRoZ-mg9vAIzOa2o5ajCDuBiHI",
  authDomain: "zatimer-3cb50.firebaseapp.com",
  projectId: "zatimer-3cb50",
  storageBucket: "zatimer-3cb50.appspot.com",
  messagingSenderId: "747336380342",
  appId: "1:747336380342:web:a931200ca1de9612181b17",
  measurementId: "G-SG7FPLPD58"
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();

var time=0;

async function getTime(){
    const Time_temp = new Date().getTime();
  
    const tt = db.collection("time").doc("0");
    const todoDocs = await tt.get();
    const {time_to_calculate}=todoDocs.data();

    if(todoDocs!=null){
        time = time_to_calculate
    }
    console.log(time);
  }
getTime();

function gettime() {
    let sday = document.getElementById('day').innerText;
    let shour = document.getElementById('hour').innerText;
    let smin = document.getElementById('min').innerText;
    let ssec = document.getElementById('sec').innerText;
    let stime = "黑笥已經" + sday + "天" + shour + "小時" + smin + "分鐘" + ssec + "秒沒開台了";
    return stime;
}

function SetTimer(){
    const Time_temp = new Date().getTime();
    var diff=0;
    if(time!=0){
        let sec = Time_temp-time;
        let secs= parseInt(sec/1000);
        console.log(secs);

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
};

window.addEventListener("load", function() {
    document.querySelector('#subtitlebox').innerHTML = "距離黑笥上次開台，已經過了：";
    document.querySelector('#loadingboxl').style.display = 'none';
    document.querySelector('#countbox').style.display = 'block';
    setInterval(() => SetTimer(), 1000);
});