let userScore = localStorage.getItem('yourscore') ? parseInt(localStorage.getItem('yourscore')) : 0;
let compScore = localStorage.getItem('comptscore') ? parseInt(localStorage.getItem('comptscore')) : 0;
yourscore.textContent = userScore;
comptscore.textContent = compScore;

const headersc = document.querySelector(".container-header")
const usersidebackgroung = document.querySelector(".user-side");
const computersidebackground = document.querySelector(".computer-side");
const userside =document.getElementById(".side");
const choices = document.querySelectorAll(".choice");
const lines = document.querySelector(".lines");
const computerchoise = document.querySelector("#computerchoise");
const gameplay = document.querySelector(".gameplay");
const usrock = document.querySelector("#us-rock");
const uspaper = document.querySelector("#us-paper");
const usscissors = document.querySelector("#us-scissors");
const side = document.querySelector(".side");
const computer_side = document.querySelector(".computer-side");
const winmsg = document.querySelector(".winmsg");
const winermsg = document.querySelector("#winermsg");
const against_pc = document.querySelector(".against-pc");
const result_screen = document.querySelector("#result-screen");
const cross = document.querySelector(".cross");
const rules = document.querySelector(".rules-box");
const rule_btn = document.querySelector("#rule-btn");
const nextbtn = document.querySelector("#next")
const playagain = document.querySelector("#playagain");
const celebrationscreeen = document.querySelector(".celebration-sreen");




const genCompChoice = () => {
    const compchoise = ["scissors","rock", "paper"];
    const numbchoise = Math.floor(Math.random() * 3); 1,2,3
    return compchoise[numbchoise];
  };


const  drawgame = () =>{
  console.log("game was draw");
  winermsg.innerText = "TIE UP";
  against_pc.innerText=" ";
  document.getElementById("playagain").innerText="REPLAY";
  computersidebackground.classList.remove("computer-side");
  usersidebackgroung.classList.remove("user-side");

}


const showWinner = (userWin) => {
  if (userWin) {
    console.log("User win!");
    userScore++;
    localStorage.setItem('yourscore', userScore);
    yourscore.innerText = userScore;
    winermsg.innerText = "YOU WIN";
    document.getElementById("playagain").innerText="PLAY AGAIN";
    against_pc.innerText="AGAINST PC";
    computersidebackground.classList.remove("computer-side");
    usersidebackgroung.classList.add("user-side");
    nextbtn.style.display = "block";
  }


   else {
    console.log("computer win");
    compScore++;
    localStorage.setItem('comptscore', compScore);
    comptscore.innerText = compScore;
    winermsg.innerText = "YOU LOST";
    document.getElementById("playagain").innerText="PLAY AGAIN";
    against_pc.innerText="AGAINST PC";
    computersidebackground.classList.add("computer-side");
    usersidebackgroung.classList.remove("user-side");


  }
};



// game start from here 
const gamestart = (userclick) => {
  console.log("user choice = ", userclick);
  const compchoice = genCompChoice();
  console.log("computer choice = ", compchoice);
  
  if (userclick === compchoice) {
    //Draw Game
    drawgame();
  } else {
    let userWin = true;
    if (userclick === "rock") {
      //scissors, paper
      userWin = compchoice === "paper" ? false : true;
    } else if (userclick === "paper") {
      //rock, scissors
      userWin = compchoice === "scissors" ? false : true;
    } else {
      //rock, paper
      userWin = compchoice === "rock" ? false : true;
    }
    showWinner(userWin);
  }

  if (compchoice === "rock") {
    comrock.style.display = "block";
    compaper.style.display = "none";
    comscissors.style.display = "none";
  } 
  else if (compchoice === "paper") {
    comrock.style.display = "none";
    compaper.style.display = "block";
    comscissors.style.display = "none";
  } 
  else if (compchoice === "scissors") {
    comrock.style.display = "none";
    compaper.style.display = "none";
    comscissors.style.display = "block";
  }


}


  function payagin(){
    gameplay.style.display = "flex";
    lines.style.display = "block";
    winmsg.style.display = "none";
    result_screen.style.display="none";
    nextbtn.style.display = "none";
  }

  const showresult = (userclick) => {

    if (userclick === "rock") {
      usrock.style.display = "block";
      uspaper.style.display = "none";
      usscissors.style.display = "none";
    } 
    else if (userclick === "paper") {
      usrock.style.display = "none";
      uspaper.style.display = "block";
      usscissors.style.display = "none";
    } 
    else if (userclick === "scissors") {
      usrock.style.display = "none";
      uspaper.style.display = "none";
      usscissors.style.display = "flex";
    }
    
  
  
  }
  


  function getwinner(){
    gameplay.style.display = "none";
    lines.style.display="none";
    winmsg.style.display = "block";
    result_screen.style.display="block";
  }


  function ruleclose(){
    cross.style.display = "none";
    rules.style.display = "none"; 
  }

  function rulebtn(){
  cross.style.display="block";
  rules.style.display="block";
  }

function celebration(){
  headersc.style.display="none";
  result_screen.style.display="none";
  nextbtn.style.display="none";
  celebrationscreeen.style.display="block";
}

function playgame(){
  headersc.style.display="flex";
  result_screen.style.display="none";
  gameplay.style.display="flex";
  lines.style.display="flex";
  celebrationscreeen.style.display="none";
}

//for getting input from the userside
choices.forEach((choice) => {
    choice.addEventListener("click", () => {
      const userclick = choice.getAttribute("id");
      gamestart(userclick);
      showresult(userclick);
      getwinner();
     
      
    });

  });
