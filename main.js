canvases = document.getElementById("scanvas")
ctx = canvases.getContext("2d")

var lastposX, lastposY
var posX, posY
var mE = "none"

var col = "black"
var WoL = 2


canvases.addEventListener("mousedown", mDown)

function mDown(a){
    mE = "mouseDown"

    col = document.getElementById("colour").value
    WoL = document.getElementById("num").value
}

canvases.addEventListener("mousemove", mMove)

function mMove(a){
    posX = a.clientX - canvases.offsetLeft
    posY = a.clientY - canvases.offsetTop
    
    if (mE == "mouseDown"){
        ctx.beginPath()
        ctx.strokeStyle = col
        ctx.lineWidth = WoL
        ctx.moveTo(lastposX, lastposY)
        ctx.lineTo(posX, posY)
        ctx.stroke()
    }
    
    lastposX = posX
    lastposY = posY
}

canvases.addEventListener("mouseup", mUp)

function mUp(a){
    mE = "mouseUp"
}

canvases.addEventListener("mouseleave", mLeave)

function mLeave(a){
    mE = "mouseLeft"
}

function clear(){
    ctx.clearRect(0, 0, 1300, 950)
}