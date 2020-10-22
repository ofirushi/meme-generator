'use strict'

var gCanvas
var gCtx

function loadMemeEditor(imgId){
    setChosenMeme(imgId)
    loadCanvas()
    // loadControls()
    // loadTemplate()
}

function loadCanvas(){
    var meme = getCurrMeme()
    var elImage = new Image();
    elImage.onload
    elImage.src = `../img/gallery/${meme.selectedImgId}.jpg`
    document.querySelector('.editor-page').innerHTML=`
    <canvas id="my-canvas" onmousemove="handleMouse(event)" width=${elImage.width} height=${elImage.height}  ></canvas>
    <img id="curr-img" src=${elImage.src} style="display:none" alt=""></img>
    `
    gCanvas = document.querySelector('#my-canvas');
    gCtx = gCanvas.getContext('2d');
    renderCanvas()
}


function renderCanvas(){
    var meme = getCurrMeme()
    var elImage = document.getElementById('curr-img')
    gCtx.drawImage(elImage,0,0)

}

function handleMouse(ev){
    console.log(ev.type)
}