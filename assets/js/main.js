
const cat = document.body.querySelector("#cat")
let catPosition = 0;
let catInterval;
let walkToRight = true

let speed = 200

const walkFunc = () => {
    if (catPosition +300 < window.innerWidth && walkToRight) {
        catPosition += 50
    } else if (catPosition > 0){
        catPosition -= 50
        walkToRight = false
        cat.style.transform = "rotateY(180deg)"
    } else if (catPosition === 0){
        walkToRight = true
        cat.style.transform = "rotateY(360deg)"
    }
    cat.style.left = catPosition + "px"
}



let turnBtn = false

const turn = () => {
    turnBtn = !turnBtn 
    if (turnBtn) {
        catPosition -= 50
        walkToRight = false
    } else {
        catPosition += 50
        walkToRight = true
        cat.style.transform = "rotateY(360deg)"
    }

}



const pause = () => {
    clearInterval(catInterval);
}


const catSpeed = () => {
    clearInterval(catInterval);
    speed = speed / 2 
    catInterval = setInterval(walkFunc, speed);
}

const catWalk = () => {
    catInterval = setInterval(walkFunc, speed);
}