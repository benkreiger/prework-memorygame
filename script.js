// global constants

const cluePauseTime = 333; // how long to pause in between clues
const nextClueWaitTime = 1000; // how long to wait before playing sequence
const patternLength = 8; // how many buttons will be pressed in the randomly generated pattern

// global variables
var pattern = [2, 2, 4, 3, 2, 1, 2, 4];
var progress = 0;
var gamePlaying = false;
var tonePlaying = false;
var volume = 0.5;
var guessCounter = 0;
var clueHoldTime = 1000; // how long to hold each clue's light/sound

function generatePattern(len){
  for(let i = 0; i < len; i++){
    pattern[i] = Math.floor(Math.random() * 4) + 1;
  }
}

function startGame(){
  // initialize game variables
  progress = 0;
  gamePlaying = true;
  clueHoldTime = 1000;
  generatePattern(patternLength);
  
  // swap the Start and Stop buttons
  document.getElementById("startBtn").classList.add("hidden");
  document.getElementById("stopBtn").classList.remove("hidden");
  
  playClueSequence();
}

function stopGame(){
  gamePlaying = false;
  
  // swap the Start and Stop buttons
  document.getElementById("startBtn").classList.remove("hidden");
  document.getElementById("stopBtn").classList.add("hidden");
}

function loseGame(){
  stopGame();
  alert("Game Over. You lost.");
}

function winGame(){
  stopGame();
  alert("Congrats! You won.");
}

function lightButton(btn){
  document.getElementById("button" + btn).classList.add("lit")
}
function clearButton(btn){
  document.getElementById("button" + btn).classList.remove("lit")
}

function playSingleClue(btn){
  if(gamePlaying){
    lightButton(btn);
    playTone(btn, clueHoldTime);
    setTimeout(clearButton, clueHoldTime, btn);
  }
}

function playClueSequence(){
  guessCounter = 0;
  let delay = nextClueWaitTime; // set delay to initial wait time
  for(let i = 0; i <= progress; i++){ // for each clue that is revealed so far
    console.log("play single clue: " + pattern[i] + " in " + delay + "ms")
    setTimeout(playSingleClue, delay, pattern[i]) // set a timeout to play that clue
    delay += clueHoldTime 
    delay += cluePauseTime;
  }
  
  clueHoldTime -= 100;
}

function guess(btn){
  console.log("user guessed: " + btn);
  if(!gamePlaying){
    return;
  }

  // guess is incorrect; lose game
  if(btn != pattern[guessCounter]){
    loseGame();
  } else{
    // guess is correct; turn is over
    if(guessCounter == progress){
      // this is the last turn; win game
      if(progress == pattern.length - 1){
        winGame();
      // this is not the last turn; increment progress, play next clue sequence
      } else{
        progress++;
        playClueSequence();
      }
    // guess is correct; turn is not over
    } else{
      guessCounter++;
    }
  }
  
  
  
  
}

// Sound Synthesis Functions
const freqMap = {
  1: 392,
  2: 261.63,
  3: 329.63,
  4: 440
}

function playTone(btn, len){ 
  o.frequency.value = freqMap[btn]
  g.gain.setTargetAtTime(volume,context.currentTime + 0.05,0.025)
  tonePlaying = true
  setTimeout(function(){
    stopTone()
  },len)
}

function startTone(btn){
  if(!tonePlaying){
    o.frequency.value = freqMap[btn];
    g.gain.setTargetAtTime(volume,context.currentTime + 0.05,0.025);
    tonePlaying = true;
  }
}

function stopTone(){
    g.gain.setTargetAtTime(0,context.currentTime + 0.05,0.025);
    tonePlaying = false;
}

// Page Initialization
// Init Sound Synthesizer
var context = new AudioContext();
var o = context.createOscillator();
var g = context.createGain();
g.connect(context.destination);
g.gain.setValueAtTime(0,context.currentTime);
o.connect(g);
o.start(0);