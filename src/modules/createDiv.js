export function createEl(parents,child){
    const parantsElement = document.querySelector(`.${parents}`)
    const children = parantsElement.appendChild(document.createElement('div'))
    children.classList.add(`${child}`)
}