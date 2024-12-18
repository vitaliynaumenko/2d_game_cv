import kaboom from "kaboom"

export const k = kaboom({
    global:true,
    touchToMouse: true,
    keyboard:true,
    fullscreen:true,
    scale:2,
    clearColor:[0,0,0,1],
    canvas: document.getElementById('game')
})