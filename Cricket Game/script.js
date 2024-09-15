let user = "";
let aiChoice = "";
let winner = "";

function randomGen() {
  let random = Math.random() * 3;

  if (random > 0 && random <= 1) {
    aiChoice = "Ball";
    console.log(aiChoice);
  } else if (random > 1 && random <= 2) {
    aiChoice = "Bat";
    console.log(aiChoice);
  } else {
    aiChoice = "Wicket";
    console.log(aiChoice);
  }

}

function handleButtonClick(value) {
    document.querySelector(
        ".usermsg"
      ).innerHTML = `User choice is: ${value}`;
    
      

  // checking for User Choice: BAT
  if (value === "Bat") {
    if (aiChoice === "Bat") {
      winner = "Draw Match";
    } else if (aiChoice === "Ball") {
      winner = "User Winner";
    } else if (aiChoice === "Wicket") {
      winner = "Computer Winner";
    }
  }

  // checking for User Choice: BALL
  else if (value === "Ball") {
    if (aiChoice === "Ball") {
      winner = "Draw Match";
    } else if (aiChoice === "Bat") {
      winner = "Computer Winner";
    } else if (aiChoice === "Wicket") {
      winner = "User Won";
    }
  }

  // checking for User Choice: Wicket
  else if (value === "Wicket") {
    if (aiChoice === "Wicket") {
      winner = "Draw Match";
    } else if (aiChoice === "Ball") {
      winner = "Computer Winner";
    } else if (aiChoice === "Bat") {
      winner = "User Winner";
    }
  }
  document.querySelector(".winnermsg").innerHTML = `${winner}`; //winner message
}
document.querySelectorAll(".btn-group button").forEach((button) => {

  button.addEventListener("click", () => {
    randomGen();
      // display computer choice
    document.querySelector(
        ".compmsg"
      ).innerHTML = `Computer Choice is: ${aiChoice}`;

    handleButtonClick(button.textContent);
  });
});

