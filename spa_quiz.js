const startButton = document.getElementById('start-btn')
const nextButton = document.getElementById('next-btn')
const questionContainerElement = document.getElementById('question-container')
const questionElement = document.getElementById('question')
const answerButtonsElement = document.getElementById('answer-buttons')

let shuffledQuestions, currentQuestionIndex

startButton.addEventListener('click', startQuiz)
nextButton.addEventListener('click', () => {
  currentQuestionIndex++
  setNextQuestion()
})

function startQuiz(){
  console.log('Started')
  startButton.classList.add('hide')
  shuffledQuestions = questions.sort(() => Math.random() - .5)
  currentQuestionIndex = 0
  questionContainerElement.classList.remove('hide')
  setNextQuestion()
}

function setNextQuestion(){
  resetState()
  showQuestion(shuffledQuestions[currentQuestionIndex])
}

function showQuestion(question){
  questionElement.innerText = question.question
  question.answers.forEach(answer => {
    const button = document.createElement('button')
    button.innerText = answer.text
    button.classList.add('btn')
    if (answer.correct){
      button.dataset.correct = answer.correct
    }
    button.addEventListener('click', selectAnswer)
    answerButtonsElement.appendChild(button)
  })
}

function resetState(){
  clearStatusClass(document.body)
  nextButton.classList.add('hide')
  while (answerButtonsElement.firstChild){
    answerButtonsElement.removeChild(answerButtonsElement.firstChild)
  }
}

function selectAnswer(e){
  const selectedButton = e.target
  const correct = selectedButton.dataset.correct
  setStatusClass(document.body, correct)
  Array.from(answerButtonsElement.children).forEach(button => {
    setStatusClass(button, button.dataset.correct)
  })
  if(shuffledQuestions.length > currentQuestionIndex + 1){
    nextButton.classList.remove('hide')
  } else{
    startButton.innerText = 'Restart'
    startButton.classList.remove('hide')
  }
}

function setStatusClass(element, correct){
  clearStatusClass(element)
  if(correct){
    element.classList.add('correct')
  } else{
    element.classList.add('wrong')
  }
}

function clearStatusClass(element){
  element.classList.remove('correct')
  element.classList.remove('wrong')
}

const questions = [
  {
    question: 'Creating a loop in the body of an existing loop is called a:',
    answers: [
      { text: 'Double loop', correct: false},
      { text: 'Nested loop', correct: true},
      { text: 'Child loop', correct: false},
      { text: 'Loop in loop', correct: false}
    ]
  },
  {
    question: 'Which data structure uses LIFO?',
    answers: [
      { text: 'Trees', correct: false},
      { text: 'Queues', correct: false},
      { text: 'Arrays', correct: false},
      { text: 'Stacks', correct: true}
    ]
  },
  {
    question: 'The variable that holds a single letter or number.',
    answers: [
      { text: 'int', correct: true},
      { text: 'char', correct: false},
      { text: 'double', correct: false},
      { text: 'String', correct: false}
    ]
  },
  {
    question: 'What does FIFO stand for?',
    answers: [
      { text: 'First in few out', correct: false},
      { text: 'Few in first out', correct: false},
      { text: 'First in first out', correct: true},
      { text: 'Few in few out', correct: false}
    ]
  },
  {
    question: 'The int variable holds decimal numbers.',
    answers: [
      { text: 'True', correct: false},
      { text: 'False', correct: true}
    ]
  },
  {
    question: 'A Syntax Error is due to:',
    answers: [
      { text: 'incorrect language in your code', correct: true},
      { text: 'user error', correct: false},
      { text: 'logical error', correct: false},
      { text: 'not knowing the language', correct: false}
    ]
  },
  {
    question: 'What does a line comment look like?',
    answers: [
      { text: '--this is a comment', correct: false},
      { text: '//this is a comment', correct: true},
      { text: '**this is a comment', correct: false},
      { text: '~~this is a comment', correct: false}
    ]
  },
  {
    question: 'What is an algorithm?',
    answers: [
      { text: 'Complicated code', correct: false},
      { text: 'Something only a computer can read', correct: false},
      { text: 'A set of rules to be followed', correct: true},
    ]
  },
  {
    question: 'What is finding and fixing problems in code?',
    answers: [
      { text: 'Coding', correct: false},
      { text: 'Debugging', correct: true},
      { text: 'Automating', correct: false},
      { text: 'Programming', correct: false}
    ]
  },
  {
    question: 'When coding in Java, every line must end in:',
    answers: [
      { text: ';', correct: true},
      { text: ':', correct: false},
      { text: '.', correct: false},
      { text: ',', correct: false}
    ]
  }
]
