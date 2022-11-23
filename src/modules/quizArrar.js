
import { createEl } from "./createDiv";
import { audio, currentDuration, playAudio, vol} from "./playAudio";
import { getRundomNum } from "./random";
import { shuffleArray } from "./shuffle";

export let isEnd = false
export let score = 0;
export function divideBird(array,n){
    let incorrect = []
    const birdPreview = document.querySelector('.bird-preview')
    birdPreview.innerHTML = ' '
    isEnd = false
    createEl('bird-preview','bird-preview__pic')
    createEl("bird-preview","right-side")
    createEl("right-side","bird-preview__name")
    createEl("right-side","bird-preview__audio-player")
    createEl("bird-preview__audio-player","progress-and-time")
    createEl("progress-and-time","start-pause-btn")
    createEl("bird-preview__audio-player","bottom-part-player")
    createEl("bottom-part-player","volume")
    createEl("volume","mute-btn")
    const scoreDiv = document.querySelector(".score")
    const progressAndTime = document.querySelector('.progress-and-time')
    const timeprogress = progressAndTime.appendChild(document.createElement('input'))
    timeprogress.classList.add('time-progress')
    timeprogress.type = 'range'
    timeprogress.value = 0
    const volumeDiv = document.querySelector('.volume')
    const volumeBtn = volumeDiv.appendChild(document.createElement('input'))
    volumeBtn.classList.add('volume-slide')
    volumeBtn.type = 'range'
    volumeBtn.min = 0;
    volumeBtn.max = 1
    volumeBtn.step = 0.1
    volumeBtn.value = 0.5


    const answerslist = document.querySelector('.answers-ul')
    answerslist.innerHTML = ' '
    /* const timeprogress = document.querySelector('.time-progress') */
    const birdName = document.querySelector('.bird-preview__name')
    const birdPicture = document.querySelector('.bird-preview__pic')
    /* const birdSecondPic = document.querySelector('.bird-pic')
    const birdSecondname = document.querySelector('.bird-name')
    const birdNameTranslate = document.querySelector('.bird-name-translate')
    const birdInfo = document.querySelector('.bird-info') */
    const birdInfoBlock = document.querySelector('.bird-info-block')
    birdInfoBlock.textContent = 'Прослушайте плеер.'
    const audioBtn = document.querySelector('.start-pause-btn')
    /* const volumeBtn = document.querySelector('.volume-slide') */






    let newArray = []
    array[n].forEach(element => {
        newArray.push(element)
    });

    for (let i = 0;i<newArray.length;i++){
        answerslist.appendChild(document.createElement('li'))
    }

    shuffleArray(newArray)
    let navChildren = Array.from(answerslist.children)
    let trueAnswer = newArray[getRundomNum(0,array.length-1)]


    let isPlay = false
    let isPlaySecond = false  
    let int; 
    let secondInt;
    audioBtn.addEventListener('click',()=>{  
            if(isPlay === false){
                isPlaySecond = false
                playAudio(trueAnswer.audio,false,volumeBtn)
                int = setInterval(function (){
                    currentDuration(timeprogress.className)},500)
                timeprogress.addEventListener('change',()=>{
                    audio.currentTime = timeprogress.value
                })
                clearInterval(secondInt)
                isPlay = true
            } 
            else if(isPlay === true){
                isPlaySecond = false
                playAudio(trueAnswer.audio,true,volumeBtn)
                isPlay = false
                clearInterval(int)
                clearInterval(secondInt)
            }

    })

    for(let i = 0; i<newArray.length;i++){
        navChildren[i].textContent = newArray[i].name
        const circle = navChildren[i].appendChild(document.createElement('div'))
        circle.classList.add('circle')
    }


    navChildren.forEach(el=>{
        el.addEventListener('click',()=>{
            clearInterval(secondInt)
            clearInterval(int)
            newArray.forEach(elArray=>{
                if(el.textContent === elArray.name){
                    birdInfoBlock.innerHTML = ''
                    const birdTopSide = birdInfoBlock.appendChild(document.createElement('div'))
                    birdTopSide.classList.add('bird-top-side')
                    const birdInfo = birdInfoBlock.appendChild(document.createElement('div'))
                    birdInfo.classList.add('bird-info')
                    const birdPic = birdTopSide.appendChild(document.createElement('div'))
                    birdPic.classList.add('bird-pic')
                    const playerBlock = birdTopSide.appendChild(document.createElement('div'))
                    playerBlock.classList.add('player-block')
                    const birdSecondname = playerBlock.appendChild(document.createElement('div'))
                    birdSecondname.classList.add('bird-name')
                    const hr = playerBlock.appendChild(document.createElement('hr'))
                    const birdNameTranslate = playerBlock.appendChild(document.createElement('div'))
                    birdNameTranslate.classList.add('bird-name-translate')
                    const Secondhr = playerBlock.appendChild(document.createElement('hr'))
                    const birdSong = playerBlock.appendChild(document.createElement('div'))
                    birdSong.classList.add('bird-song')
                    const progressTime = birdSong.appendChild(document.createElement('div'))
                    progressTime.classList.add('second-progress-and-time')
                    const audioToggleBtn = progressTime.appendChild(document.createElement('div'))
                    audioToggleBtn.classList.add('second-start-pause-btn')
                    const timeProgress = progressTime.appendChild(document.createElement('input'))
                    timeProgress.classList.add('second-time-progress')
                    timeProgress.type = 'range'
                    timeProgress.value = 0
                    const bottomPart = birdSong.appendChild(document.createElement('div'))
                    bottomPart.classList.add('second-bottom-part-player')
                    const volume = bottomPart.appendChild(document.createElement('div'))
                    volume.classList.add('second-volume')
                    const muteBtn = volume.appendChild(document.createElement('div'))
                    muteBtn.classList.add('second-mute-btn')
                    const volumeSlide = volume.appendChild(document.createElement('input'))
                    volumeSlide.classList.add('second-volume-slide')
                    volumeSlide.type = 'range'
                    volumeSlide.min = 0
                    volumeSlide.max = 1
                    volumeSlide.step = 0.1
                    volumeSlide.value = vol
                    birdSecondname.textContent = elArray.name
                    birdNameTranslate.textContent = elArray.species
                    birdPic.style.backgroundImage = `url('${elArray.image}')`
                    birdInfo.textContent = elArray.description
                    
                    
                    audioToggleBtn.addEventListener('click',()=>{
                        if(isPlaySecond === false){
                            isPlay = false
                            playAudio(elArray.audio,false,volumeSlide)
                            secondInt = setInterval(function start (){
                                currentDuration(timeProgress.className)},500)
                            timeProgress.addEventListener('change',()=>{
                                audio.currentTime = timeProgress.value
                            })
                            clearInterval(int)
                            isPlaySecond = true
                        } 
                        else if(isPlaySecond === true){
                            isPlay = false
                            playAudio(elArray.audio,true,volumeSlide)
                            isPlaySecond = false
                            clearInterval(secondInt)
                            clearInterval(int)
                        }
                    })

                    isPlay = false
                    playAudio(elArray.audio,true,volumeSlide)
                    isPlaySecond = false
                }
            })
            console.log(incorrect);
            if(el.textContent === trueAnswer.name){
                if(isEnd === false){
                    score +=5
                }
                isEnd = true
                Array.from(el.children)[0].classList.add('green')
                Array.from(el.children)[0].classList.remove('red')
                birdName.textContent = trueAnswer.name
                birdPicture.style.backgroundImage = `url('${trueAnswer.image}')`
            }  else{
                if(isEnd === false){
                    if(!incorrect.includes(el.textContent)){
                        score--;
                    }

                }

                incorrect.push(el.textContent)
                Array.from(el.children)[0].classList.add('red')
                Array.from(el.children)[0].classList.remove('green')
            }
        })
    })
    
}