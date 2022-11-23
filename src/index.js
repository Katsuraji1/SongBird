import './index.html'
import './index.scss'

const btnToMain = document.getElementsByClassName('to-main-page')
btnToMain[0].addEventListener('click',()=>{
    window.location.href = 'index.html'
})

const btnToQuiz = document.getElementsByClassName('to-quiz-page')
btnToQuiz[0].addEventListener('click',()=>{
    window.location.href = 'quiz.html'
})

const startbtn = document.getElementsByClassName('start-btn')
startbtn[0].addEventListener('click',()=>{
    window.location.href = 'quiz.html'
})