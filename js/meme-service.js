'use strict'

var gMeme


function setChosenMeme(imgId) {
    gMeme = {
        selectedImgId: imgId,
        selectedLineIdx: 0,
        lines: []
    }
}

function getCurrMeme(){
    return gMeme
}
// = {
//     selectedImgId: 5,
//     selectedLineIdx: 0,
//     lines: [
//     {
//     txt: 'I never eat Falafel',
//     size: 20,
//     align: 'left',
//     color: 'red'
//     }
//     ]
//    }