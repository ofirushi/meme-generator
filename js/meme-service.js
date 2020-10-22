'use strict'

var gMeme


function setChosenMeme(imgId, elImage) {
    gMeme = {
        elImage,
        selectedImgId: imgId,
        selectedLineIdx: 0,
        lines: [
            {
                txt: 'Test Uno',
                size: 40,
                align: 'center',
                posY: 50,
                color: 'red',
            },
            {
                txt: 'Test Dos',
                size: 30,
                align: 'right',
                posY: 150,
                color: 'red',
            },
            {
                txt: 'Test Tres',
                size: 30,
                align: 'right',
                posY: 200,
                color: 'red',
            }
        ]
    }
}

function getCurrMeme() {
    return gMeme
}

function updateMemeTxt(txt) {
    var txtIdx = gMeme.selectedLineIdx
    gMeme.lines[txtIdx].txt = txt
}

function increaseFontBy1() {
    var txtIdx = gMeme.selectedLineIdx
    gMeme.lines[txtIdx].size += 3
}
function decreaseFontBy1() {
    var txtIdx = gMeme.selectedLineIdx
    gMeme.lines[txtIdx].size -= 3
}

function moveTxtUpBy1() {
    var txtIdx = gMeme.selectedLineIdx
    gMeme.lines[txtIdx].posY -= 3
}

function moveTxdownBy1() {
    var txtIdx = gMeme.selectedLineIdx
    gMeme.lines[txtIdx].posY += 3
}

function changeTxtFocus() {
    gMeme.selectedLineIdx = (gMeme.selectedLineIdx === gMeme.lines.length - 1) ? 0 : ++gMeme.selectedLineIdx
}