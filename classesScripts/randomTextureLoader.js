var front = document.getElementById("front")
var back = document.getElementById("back")
var right = document.getElementById("right")
var left = document.getElementById("left")
var bottom = document.getElementById("top")
var grass = [
    "./Assets/loaderTexture/top.png",
    "./Assets/loaderTexture/bottom.jpg",
    "./Assets/loaderTexture/side.jpg"
]
var dirt = [
    "./Assets/loaderTexture/bottom.jpg"
]
var stone = [
    "./Assets/loaderTexture/stone.jpg"
]
var cobblestone = [
    "./Assets/loaderTexture/cobblestone.png"
]

var randomInt = Math.round(Math.random() * 3)
if(randomInt == 0) {
    document.getElementById("bottom").style.backgroundImage = `url(${grass[0]})`
    bottom.style.backgroundImage = `url(${grass[1]})`
    front.style.backgroundImage = `url(${grass[2]})`
    back.style.backgroundImage = `url(${grass[2]})`
    left.style.backgroundImage = `url(${grass[2]})`
    right.style.backgroundImage = `url(${grass[2]})`
}else if(randomInt == 1) {
    document.getElementById("bottom").style.backgroundImage = `url(${dirt[0]})`
    bottom.style.backgroundImage = `url(${dirt[0]})`
    front.style.backgroundImage = `url(${dirt[0]})`
    back.style.backgroundImage = `url(${dirt[0]})`
    left.style.backgroundImage = `url(${dirt[0]})`
    right.style.backgroundImage = `url(${dirt[0]})`
}else if(randomInt == 2) {
    document.getElementById("bottom").style.backgroundImage = `url(${stone[0]})`
    bottom.style.backgroundImage = `url(${stone[0]})`
    front.style.backgroundImage = `url(${stone[0]})`
    back.style.backgroundImage = `url(${stone[0]})`
    left.style.backgroundImage = `url(${stone[0]})`
    right.style.backgroundImage = `url(${stone[0]})`
}else if(randomInt == 3) {
    document.getElementById("bottom").style.backgroundImage = `url(${cobblestone[0]})`
    bottom.style.backgroundImage = `url(${cobblestone[0]})`
    front.style.backgroundImage = `url(${cobblestone[0]})`
    back.style.backgroundImage = `url(${cobblestone[0]})`
    left.style.backgroundImage = `url(${cobblestone[0]})`
    right.style.backgroundImage = `url(${cobblestone[0]})`
}