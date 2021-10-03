const readlineSync = require("readline-sync");
const chalk = require("chalk");

var user = readlineSync.question("What is your name? ");
console.log(chalk.blue(`Welcome ${user} to, "How I Met Your Mother" quiz.`));

/**play function */
var score = 0;

function play(question, options, answer) {
  var userAnswer = readlineSync.keyInSelect(options, question);
  if (userAnswer === answer) {
    score = score + 1
    console.log(chalk.green("correct"));
  } else {
    console.log(chalk.red("wrong"));
  }

  console.log(chalk.blue("current score: ", score));
  console.log("-----------------------------------");
};

/** question database*/

var questionData = [{
  question: "What’s the name of the bar where the friends hang out?",
  options: ['MacLaren’s Pub', "Central Perk", "Puzzle", "Starbucks"],
  answer: 0
}, {
  question: "Which company did Ted, Marshall and Barney all work for at one point?",
  options: ["AltruCell Corporation", "Goliath National Bank", "Honeywell & Cootes", "Central Bank"],
  answer: 1
  }, {
  question: "How often does the “naked man maneuver” work?",
  options: ["Two out of three times", "One out of four times", "Three out of five times", "One out of three times"],
  answer: 0
}, {
  question: " What instrument does Ted steal for Robin?",
  options: ["A French horn", "Red Horn", "Necklace", "Watch"],
  answer: 0
}, {
  question: "How many times is Marshall allowed to slap Barney?",
  options: [4, 2, 3, 5],
  answer: 3
}];

for (let i = 0; i < questionData.length; i++) {
  var currentQuestion = questionData[i];
  play(currentQuestion.question, currentQuestion.options, currentQuestion.answer);
}

console.log("YaY!!, you scored: ", score);