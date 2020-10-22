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
    drawText(meme)
    updateTxtInputValue(meme)
}

function drawText(meme) {
    gCtx.shadowOffsetX = 0
    gCtx.shadowOffsetY = -1
    gCtx.shadowBlur = 2.2
    gCtx.shadowColor = '#000000'
    gCtx.lineWidth = 3
    meme.lines.map((line) => {
        gCtx.textAlign = line.align;
        gCtx.font = line.size + 'px impact'
        gCtx.fillStyle = line.color
        gCtx.strokeText(line.txt, gCanvas.width/2, line.posY);
        gCtx.fillText(line.txt, gCanvas.width/2, line.posY);
    })
}

function handleMouse(ev) {
    console.log(ev.offsetX, ev.offsetY)
}

function onLoadTxtInpt(elTxtInput) {
    var meme = getCurrMeme()
    elTxtInput.value = meme.lines[selectedLineIdx]
}

function onTxtInptChange(elTxtInput) {
updateMemeTxt(elTxtInput.value)
renderCanvas()
}

function updateTxtInputValue(meme) {
    var txtIdx = meme.selectedLineIdx
    document.getElementById('line-txt').value = meme.lines[txtIdx].txt
}

function onIncreaseFont(){
    increaseFontBy1()
    renderCanvas()
}
function onDecreaseFont(){
    decreaseFontBy1()
    renderCanvas()
}

function onMoveTxtUp(){
    moveTxtUpBy1()
    renderCanvas()
}
function onMoveTxtDown(){
    moveTxdownBy1()
    renderCanvas()
}

function onTxtFocusChange(){
    changeTxtFocus()
    var meme = getCurrMeme()
    updateTxtInputValue(meme)
}