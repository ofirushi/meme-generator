'use strict'

var gImgs
var gNextId = 1

_createImages()


function _createImg(urlNum) {
    return { id: gNextId++, url: `img/gallery/${urlNum}.jpg` }
}

function _createImages() {
    var imgs = []

    for (let i = 1; i <= 25; i++) {
        imgs.push(_createImg(i))
    }
    gImgs = imgs;
    // console.log(gImgs)
}

function getImages(){
    return gImgs
}
