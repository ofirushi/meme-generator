'use strict'

var gCanvas
var gCtx

function loadMemeEditor(imgId, elImage) {
    gCanvas = document.querySelector('#my-canvas');
    gCtx = gCanvas.getContext('2d');
    setChosenMeme(imgId, elImage)
    renderCanvas()
}



function renderCanvas() {
    var meme = getCurrMeme()
    gCanvas.width = meme.elImage.width
    gCanvas.height = meme.elImage.height
    gCtx.drawImage(meme.elImage, 0, 0)
    
}

function handleMouse(ev) {
    console.log(ev.type)
}