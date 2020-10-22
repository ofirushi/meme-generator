'use strict'

function onInit() {
    var imgs = getImages()
    renderImgs(imgs)
}

function onImageClick(imgId) {
    document.querySelector('.gallery-page').style.display = 'none'
    document.querySelector('.editor-page').style.display = 'block'
    loadMemeEditor(imgId)
}

function renderImgs(imgs) {
    var strHtmls = imgs.map((img) => {
        return `<img onclick="onImageClick(${img.id})" src=${img.url} alt=""></img>`
    })
    document.querySelector('.gallery-container').innerHTML = strHtmls.join('')
}