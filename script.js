const questions =[
  {
    question: "What does HTML Stand for?",
    options: ["Hyper Text Markup Language","Home Tool Markup","Hyperlinks and Text", "None"],
    answer:"Hyper Text Markup Language"
  },
  {
    question: "Which language is used for styling?",
    options: ["HTML","jQuery" , "CSS","XML"],
    answer: "CSS"
  },
  {
    question: "What is the full form of JS?",
    options:["Java Style", "JavaScript", "just Style","None"],
    answer: "JavaScript"
  },{
    question: "Which tag is used for a paragraph in HTML?",
    options:["<para>","<p>" ,"<h1>" ,"<pgraph>"],
    answer:"<p>"
  },{
    question: "Which company developed JavaScript?",
    options:["Google", "Netscape","Microsoft","Apple"],
    answer: "Netscape"
  }
];

let currentQuestion = 0;
let score = 0;

const questionE1 = document.getElementById("question");
const optionBtns = document.querySelectorAll(".option-btn");
const nextBtn = document.getElementById("next-btn");
const resultBox = document.getElementById("result-box");
const scoreE1 = document.getElementById("score");


function startQuiz(){
  currentQuestion = 0;
  score = 0;
  document.getElementById("quiz").classList.remove("hide");
  resultBox.classList.add("hide");
  showQuestion();
}

function showQuestion(){
  const q = questions[currentQuestion];
  questionE1.textContent = q.question;
  optionBtns.forEach((btn , index)=>{
btn.textContent = q. options[index];
btn.disabled = false;
btn.style.backgroundColor = "#e0e0e0"
  });
  nextBtn.style.display = "none";
} 

function checkAnswer(btn){
  const selected = btn.textContent;
  const correct = questions[currentQuestion].answer;

  if (selected === correct){
    score++;
    btn.style.backgroundColor ="lightgreen";

  }else{
    btn.style.backgroundColor = "tomato";
  }

  optionBtns.forEach(b => b.disabled = true);
  nextBtn.style.display = "block";
}

function nextquestion(){
  currentQuestion++;
  if(currentQuestion < questions.length){
showQuestion();
  }else{
    showResult();
  }
}

function showResult(){
  document.getElementById("quiz").classList.add("hide");
  resultBox.classList.remove("hide");
  scoreE1.textContent = score;
} 

startQuiz();