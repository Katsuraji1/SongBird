import birdsData from './modules/bird'
import { divideBird, isEnd, score } from './modules/quizArrar'
import './quiz.html'
import './quiz.scss'
let quizLevel = 0
function quizlogics(){
    divideBird(birdsData,quizLevel)
    const nextLevel = document.querySelector('.next-level-btn')
    const scoreDiv = document.querySelector(".score")
    const birdInfoBlock = document.querySelector('.bird-info-block')
    const navUl = document.querySelector('.nav-ul')
    nextLevel.addEventListener('click',()=>{
        if(isEnd === true){
            Array.from(navUl.children)[quizLevel].classList.add('currentLevel')
            birdInfoBlock.innerHTML = ''
            quizLevel++
            scoreDiv.textContent = score
            if(quizLevel === 6){
                window.location.href = 'result.html'
            }
            divideBird(birdsData,quizLevel)
        }else{
            console.log('false');
        }
    })
}

quizlogics()

const btnToMain = document.getElementsByClassName('header-logo')
btnToMain[0].addEventListener('click',()=>{
    window.location.href = 'index.html'
})