
import './result.html'
import './result.scss'

const btnToMain = document.getElementsByClassName('to-main-page')
btnToMain[0].addEventListener('click',()=>{
    window.location.href = 'index.html'
})

const btnToQuiz = document.getElementsByClassName('to-quiz-page')
btnToQuiz[0].addEventListener('click',()=>{
    window.location.href = 'quiz.html'
})



const mainMenu = document.getElementsByClassName('mainMenu')
mainMenu[0].addEventListener('click',()=>{
    window.location.href = 'index.html'
})

const restartBtn = document.getElementsByClassName('restartBtn')
restartBtn[0].addEventListener('click',()=>{
    window.location.href = 'quiz.html'
})

const galleryBtn = document.getElementsByClassName('galleryBtn')
galleryBtn[0].addEventListener('click',()=>{
    window.location.href = 'gallery.html'
})