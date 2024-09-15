let currentDate;
let currentHour;
let currentMin;
let currentSec;
function updateAlways() {
    // Get current date and time
    currentDate = new Date();
    currentHour = currentDate.getHours();
    currentMin = currentDate.getMinutes();
    currentSec = currentDate.getSeconds();
    
     document.querySelector('.time').innerText=`Time: ${currentHour}:${currentMin}:${currentSec}`;
  }
  
function greetMsg(){
    let name = prompt('Enter your Name: ');

    let msg = document.querySelector('.displayMsg');

    if(currentHour >= 5 && currentHour <12){
        msg.innerHTML=`Good Morning ${name} 🌞 `
    }

    else if(currentHour >= 12 && currentHour <17){
        msg.innerHTML=`Good Afternoon ${name} 🌤️ `
    }

    else if(currentHour > 17 && currentHour <21){
        msg.innerHTML=`Good Evening ${name} 🌆 `
    }

    else{
        msg.innerHTML=`Good Night ${name} 🌙 `
    }
   
}

  // Call updateAlways every 1000 milliseconds (1 second)
  setInterval(updateAlways, 1000);