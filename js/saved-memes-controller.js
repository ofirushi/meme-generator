'use strict'

var gSavedMemes

function loadSavedMemesToPage() {
     gSavedMemes = loadMemesFromStorage()
    console.log(gSavedMemes);
    var strHtmls = gSavedMemes.map((meme, i = 0) => {
        i++
        return `  <canvas onclick="onLoadCanvasMini(${i})" id="my-canvas${i}" ></canvas> `
    })
    document.querySelector('.saved-meme').innerHTML = strHtmls.join('')
    renderMiniCanvases(gSavedMemes)
}

function renderMiniCanvases(gSavedMemes) {
    gSavedMemes.map((meme, i = 0) => {
        i++
        var Canvas = document.querySelector(`#my-canvas${i}`);
        var Ctx = Canvas.getContext('2d');
        meme.elImage = document.getElementById(`${meme.selectedImgId}`)
        renderMiniCanvas(Ctx,meme,Canvas)
    })
}

function renderMiniCanvas(Ctx, meme,Canvas){
    Canvas.width = 250
    Canvas.height = 250
    Ctx.drawImage(meme.elImage, 0, 0,250,250)
    Ctx.shadowOffsetX = 0
    Ctx.shadowOffsetY = -1
    Ctx.shadowBlur = 2.2
    Ctx.shadowColor = '#000000'
    Ctx.lineWidth = 3
    meme.lines.map((line) => {
        Ctx.textAlign = line.align;
        Ctx.font = line.size + 'px impact'
        Ctx.fillStyle = line.color
        Ctx.strokeText(line.txt, Canvas.width/2, line.posY);
        Ctx.fillText(line.txt, Canvas.width/2, line.posY);
    })
}

function onLoadCanvasMini(canvasId){
    console.log(gSavedMemes);
    console.log('loading canvas ' + parseInt(canvasId));
    console.dir(gSavedMemes[canvasId-1]);
    document.querySelector('.gallery-page').style.display = 'none'
    document.querySelector('.editor-page').style.display = 'flex'
    document.querySelector('.saved-meme').style.display = 'none' 
    loadCanvasMini(gSavedMemes[canvasId-1])   
}