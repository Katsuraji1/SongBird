export const audio = new Audio()

export let vol = 0.5
const timeprogress = document.querySelector('.time-progress')

export function playAudio(song,isPlay,style){
    audio.volume = document.querySelector(`.${style.className}`).value
    vol = audio.volume
    document.querySelector(`.${style.className}`).addEventListener('change',()=>{
        audio.volume = document.querySelector(`.${style.className}`).value
    })
    if(isPlay === false){
            audio.src = song;
            audio.currentTime = 0;
            audio.play()
    } 
    if(isPlay === true){
        audio.pause()
        return
    }
}

export function currentDuration(styl){
    const name = document.querySelector(`.${styl}`)
    console.log(name);
    name.value = audio.currentTime
    name.max = audio.duration
}
