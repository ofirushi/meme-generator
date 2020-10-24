'use strict'

function onInit() {
    var imgs = getImages()
    renderImgs(imgs)
}

function onImageClick(imgId,elImage) {
    document.querySelector('.gallery-page').style.display = 'none'
    document.querySelector('.editor-page').style.display = 'flex'
    document.querySelector('.saved-meme').style.display = 'none' 
    loadMemeEditor(imgId, elImage)
}

function renderImgs(imgs) {
    var strHtmls = imgs.map((img) => {
        return `<img id="${img.id}" onclick="onImageClick(${img.id},this)" src=${img.url} alt=""></img>`
    })
    document.querySelector('.gallery-container').innerHTML = strHtmls.join('')
}

function openNavMobile(){
    var x = document.getElementById("myLinks");
    if (x.style.display === "block") {
      x.style.display = "none";
    } else {
      x.style.display = "block";
    }
    console.log('open nav')
}

function onGalleryClick(){
    document.querySelector('.gallery-page').style.display = 'block'
    document.querySelector('.editor-page').style.display = 'none' 
    document.querySelector('.saved-meme').style.display = 'none' 
}

function onMemesClick(){
    document.querySelector('.gallery-page').style.display = 'none'
    document.querySelector('.editor-page').style.display = 'none' 
    document.querySelector('.saved-meme').style.display = 'block' 
    loadSavedMemesToPage()
}