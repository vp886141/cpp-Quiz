const questions = [
{
  question: `#include <iostream>
using namespace std;

int main() {
  int x = 10, y = 5;
  cout << x++ - ++y;
  return 0;
}`,

  answers: [
    { text: "5 6", correct: false },
    { text: "6 6", correct: false },
    { text: "5 7", correct: true },
    { text: "6 7", correct: false }
  ]
},

{
  question: `#include <iostream>
using namespace std;

int main() {
  int a = 10;
  a = a++ + ++a;
  cout << a;
  return 0;
}`,

  answers: [
    { text: "21", correct: false },
    { text: "22", correct: true },
    { text: "23", correct: false },
    { text: "20", correct: false }
  ]
},

{
  question: `#include <iostream>
using namespace std;

int main() {
  int a = 5, b = 10;
  cout << (a > b ? a : b);
  return 0;
}`,

  answers: [
    { text: "5", correct: false },
    { text: "10", correct: true },
    { text: "0", correct: false },
    { text: "Error", correct: false }
  ]
},
 {
    question: 
    `#include <iostream>
using namespace std;

int main() {
    for (int i = 0; i < 5; i++);
        cout << "Hello";
    return 0;
}`,
    answers: [
      { text: "HelloHelloHelloHelloHello", correct: false },
      { text: "Hello", correct: true },
      { text: "Error", correct: false },
      { text: "No output", correct: false }
    ]
  },
  {
    question: 
    `#include <iostream>
using namespace std;

int main() {
    int x = 5;
    if (x = 0)
        cout << "Zero";
    else
        cout << "Non-zero";
    return 0;
}`,
    answers: [
      { text: "Zero", correct: false },
      { text: "Non-zero", correct: true },
      { text: "Error", correct: false },
      { text: "No output", correct: false }
    ]
  },
  {
    question: 
    `#include <iostream>
using namespace std;

int main() {
    int a = 3;
    switch(a) {
        case 1: cout << "One"; break;
        case 2: cout << "Two"; break;
        default: cout << "Default";
    }
    return 0;
}`,
    answers: [
      { text: "One", correct: false },
      { text: "Two", correct: false },
      { text: "Default", correct: true },
      { text: "Error", correct: false }
    ]
  },
  {
    question: 
    `#include <iostream>
using namespace std;

int main() {
    int x = 3;
    cout << x * ++x;
    return 0;
}`,
    answers: [
      { text: "9", correct: false },
      { text: "12", correct: false },
      { text: "Error", correct: false },
      { text: "Undefined", correct: true }
    ]
  },
  {
    question:
     `#include <iostream>
        using namespace std;

int main() {
    int arr[] = {10, 20, 30, 40};
    cout << *(arr + 2);
    return 0;
}`,
    answers: [
      { text: "10", correct: false },
      { text: "20", correct: false },
      { text: "30", correct: true },
      { text: "40", correct: false }
    ]
  },
  {
    question: 
    `#include <iostream>
using namespace std;

void func(int a, int b = 10, int c = 20) {
    cout << a + b + c;
}

int main() {
    func(5, 5);
    return 0;
}`,
    answers: [
      { text: "30", correct: true },
      { text: "25", correct: false },
      { text: "35", correct: false },
      { text: "40", correct: false }
    ]
  },
  {
question:`#include <iostream>
using namespace std;
int main(){cout<<5+3*2;}`,
answers:[
{text:"11",correct:true},
{text:"16",correct:false},
{text:"13",correct:false},
{text:"Error",correct:false}
]
},

{
question:`#include <iostream>
using namespace std;
int main(){cout<<(5+3)*2;}`,
answers:[
{text:"16",correct:true},
{text:"11",correct:false},
{text:"10",correct:false},
{text:"Error",correct:false}
]
},

{
question:`#include <iostream>
using namespace std;
int main(){int a=1; while(a<=3){cout<<a; a++;}}`,
answers:[
{text:"123",correct:true},
{text:"321",correct:false},
{text:"12",correct:false},
{text:"Error",correct:false}
]
},

{
question:`#include <iostream>
using namespace std;
int main(){int x=9; cout<<x/2;}`,
answers:[
{text:"4",correct:true},
{text:"4.5",correct:false},
{text:"5",correct:false},
{text:"Error",correct:false}
]
},

{
question:`#include <iostream>
using namespace std;
int main(){int a=4; cout<<a%3;}`,
answers:[
{text:"1",correct:true},
{text:"0",correct:false},
{text:"3",correct:false},
{text:"Error",correct:false}
]
},

{
question:`#include <iostream>
using namespace std;
int main(){cout<<2*3+1;}`,
answers:[
{text:"7",correct:true},
{text:"9",correct:false},
{text:"6",correct:false},
{text:"Error",correct:false}
]
},

{
question:`#include <iostream>
using namespace std;
int main(){cout<<8/4+2;}`,
answers:[
{text:"4",correct:true},
{text:"2",correct:false},
{text:"6",correct:false},
{text:"Error",correct:false}
]
},

{
question:`#include <iostream>
using namespace std;
int main(){int x=1; cout<<x++<<x;}`,
answers:[
{text:"12",correct:true},
{text:"11",correct:false},
{text:"21",correct:false},
{text:"Error",correct:false}
]
},

{
question:`#include <iostream>
using namespace std;
int main(){int x=2; cout<<++x<<x;}`,
answers:[
{text:"33",correct:true},
{text:"22",correct:false},
{text:"23",correct:false},
{text:"Error",correct:false}
]
},

{
question:`#include <iostream>
using namespace std;
int main(){cout<<6-2*2;}`,
answers:[
{text:"2",correct:true},
{text:"8",correct:false},
{text:"4",correct:false},
{text:"Error",correct:false}
]
},{
question:`#include <iostream>
using namespace std;
int main(){int x=7; cout<<x-2;}`,
answers:[
{text:"5",correct:true},
{text:"4",correct:false},
{text:"6",correct:false},
{text:"Error",correct:false}
]
},
];

const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");

let currentQuestionIndex = 0;
let score = 0;

function startQuiz() {
  currentQuestionIndex = 0;
  score = 0;
  nextButton.innerHTML = "Next";
  showQuestion();
}

function showQuestion() {
  resetState();

  let currentQuestion = questions[currentQuestionIndex];
  let questionNo = currentQuestionIndex + 1;

  questionElement.textContent =
    questionNo + ".\n" + currentQuestion.question;

  currentQuestion.answers.forEach(answer => {
    const button = document.createElement("button");
    button.textContent = answer.text;
    button.classList.add("btn");
    answerButtons.appendChild(button);

    if (answer.correct) {
      button.dataset.correct = answer.correct;
    }

    button.addEventListener("click", selectAnswer);
  });
}

function resetState() {
  nextButton.style.display = "none";

  while (answerButtons.firstChild) {
    answerButtons.removeChild(answerButtons.firstChild);
  }
}

function selectAnswer(e) {
  const selectedBtn = e.target;
  const isCorrect = selectedBtn.dataset.correct === "true";

  if (isCorrect) {
    selectedBtn.classList.add("correct");
    score++;
  } else {
    selectedBtn.classList.add("incorrect");
  }

  Array.from(answerButtons.children).forEach(button => {
    if (button.dataset.correct === "true") {
      button.classList.add("correct");
    }
    button.disabled = true;
  });

  nextButton.style.display = "block";
}

function showScore() {
  resetState();
   questionElement.innerHTML=`you score${score} out of ${questions.length}`;
 
  nextButton.innerHTML = "Play Again";
  nextButton.style.display = "block";
}

function handleNextButton() {
  currentQuestionIndex++;

  if (currentQuestionIndex < questions.length) {
    showQuestion();
  } else {
    showScore();
  }
}

nextButton.addEventListener("click", () => {
  if (currentQuestionIndex < questions.length) {
    handleNextButton();
  } else {
    startQuiz();
  }
});

startQuiz();