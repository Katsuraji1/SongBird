import { audio, currentDuration, playAudio, vol } from "./playAudio"

export function creategallery(el,num,mainArray){
    const main = document.getElementsByClassName('bird-info-div')
    const li = document.querySelectorAll('li')
    main[0].innerHTML = ''
    let isPlay = false
    let int; 
    let secondInt;
    let isPlaySecond = false  
    const birdInfoBlock = main[0].appendChild(document.createElement('div'))
    birdInfoBlock.classList.add('bird-info-block')
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
                    mainArray[num].forEach(element => {
                        if(element.name === el.textContent){
                            birdSecondname.textContent = element.name
                            birdNameTranslate.textContent = element.species
                            birdPic.style.backgroundImage = `url('${element.image}')`
                            birdInfo.textContent = element.description

                            audioToggleBtn.addEventListener('click',()=>{
                                if(isPlaySecond === false){
                                    isPlay = false
                                    playAudio(element.audio,false,volumeSlide)
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
                                    playAudio(element.audio,true,volumeSlide)
                                    isPlaySecond = false
                                    clearInterval(secondInt)
                                    clearInterval(int)
                                }
                            })
                            li.forEach(liel=>{
                                liel.addEventListener('click',()=>{
                                    isPlay = false
                                    playAudio(element.audio,true,volumeSlide)
                                    isPlaySecond = false
                                    clearInterval(secondInt)
                                    clearInterval(int)
                                })
                            })
                        }
                    });
}