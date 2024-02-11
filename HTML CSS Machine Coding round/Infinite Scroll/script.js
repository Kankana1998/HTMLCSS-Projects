const container = document.querySelector('.container')
const URL = 'http://api.adorable.io/avatars/'


function getRandNum(){
   return Math.floor(Math.random()*100)
}

function loadImages(numImages = 10){
    let i = 0;
    while(i < numImages){
        const img = document.createElement('img')
        img.src = `${URL}${getRandNum()}`
        container.appendChild(img)
        i++
    }
}

loadImages()

window.addEventListener('scroll', ()=>{
    if(window.scrollY + window.innerHeight >= document.documentElement.scrollHeight){
        loadImages()
    }
})