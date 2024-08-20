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

  const $reset=$("#reset");

  $reset.on('click', async(event)=>{
    event.preventDefault();

    const tt = db.collection("time").doc("0");
    const Time_temp = new Date().getTime();
    tt.set({
        time_to_calculate:Time_temp
    })
    setTimeout(function(){
        window.location.reload();
    },5000);
  })