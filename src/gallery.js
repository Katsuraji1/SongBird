import './gallery.html'
import './gallery.scss'
import birdsData from './modules/bird'
import { chooseBird } from './modules/chooseBird'
import { creategallery } from './modules/gallery'
//creategallery()
const birdtype = document.getElementsByClassName('bird-type')
Array.from(birdtype[0].children).forEach(el=>{
    el.addEventListener('click',()=>{
        let num = (Array.from(birdtype[0].children)).indexOf(el);
        chooseBird(birdsData[num],num,birdsData)
    })
})



const btnToMain = document.getElementsByClassName('to-main-page')
btnToMain[0].addEventListener('click',()=>{
    window.location.href = 'index.html'
})

const btnToQuiz = document.getElementsByClassName('to-quiz-page')
btnToQuiz[0].addEventListener('click',()=>{
    window.location.href = 'quiz.html'
})