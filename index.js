var readlineSync = require("readline-sync");

console.log("Welcome to Do ypu know me quiz!");

var player = readlineSync.question("Please enter your name: ");

var welcomeMessage = `Hey! ${player} Nice to see you here!`;
console.log(welcomeMessage);
console.log("-------------------------");

var score = 0;

function gameplay(question, correctAnswer) {
  var isAnswerCorrect;
  var answer = readlineSync.question(question);
  if (answer === correctAnswer) {isAnswerCorrect = true;
    score = score + 2;
  } else {
    isAnswerCorrect = false;
    score = score - 2;
  }
  return isAnswerCorrect;
}

const questionList = [
  {
    question: "What is my full name?",answer: "Mukesh Bishnoi"
  },
  {
    question: "Where do i live?",
    answer: "Rajasthan"
  },
  {
    question: "Are you a developer?", answer:"Yes"
  },
  {
  question: "Are you graduated?", answer: "Yes"
  },
  {
    question: "Do want want to join neog camp?", answer:"Yes"
  }
];

var i = 0; 
while (i < questionList.length) {
  var isCorrect = gameplay(questionList[i].question, questionList[i].answer);
  console.log("is your answer correct?", isCorrect);
  console.log("your score is: ", score);
  console.log("-------------------------");
  i++; 
}

var topScores = [
  { name: "mayank", score: 10 },
  { name: "abhay", score: 8 },
  { name: "shrey", score: 8 }
];

console.log("These are the top scores, if you have more than these, please send me a screenshot!!")
for (var i = 0; i < topScores.length; i++) {
  console.log(`${topScores[i].name} : ${topScores[i].score}`);
}
