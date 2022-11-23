import { creategallery } from "./gallery";

export function chooseBird(subarray,num,mainArray){
    const mainUl = document.getElementsByClassName('typeUl')
    mainUl[0].innerHTML = ''
    const ul = mainUl[0].appendChild(document.createElement('ul'))
    subarray.forEach(element => {
        let li = ul.appendChild(document.createElement('li'))
        li.textContent = element.name
    });
    Array.from(ul.children).forEach(el=>{
        el.addEventListener('click',()=>{
            creategallery(el,num,mainArray)
        })
    })
}