function getNickname(){
    let nickname = ""
    let nicknameH1 = document.getElementById('nickname')

    while(!nickname){
        nickname = prompt('nickname:')
    }

    nicknameH1.innerText = nickname
}
getNickname()


let player = document.getElementById("player")

let down = document.getElementById("baixo")
let up = document.getElementById("cima")
let left = document.getElementById("esquerda")
let right = document.getElementById("direita")

let x = 0
let y = 0

let posX = document.getElementById('positionX')
let posY = document.getElementById('positionY')

right.style.opacity = 0
down.style.opacity = 1
up.style.opacity = 0
left.style.opacity = 0

window.addEventListener("keydown",function(event){
    let key = event.keyCode
    // eixo x
    if(key == "68"){

        x += 19
        posX.innerHTML = "X: "+x
        player.style.marginLeft = x + "px"
        right.style.opacity = 1
        down.style.opacity = 0
        up.style.opacity = 0
        left.style.opacity = 0

    }else if(key == "65"){
        // -1121
        if(x == -1121){
            x-=0
        }else{
            x -= 19
        }
        posX.innerHTML = "X: "+x
        player.style.marginLeft = x + "px"
        right.style.opacity = 0
        down.style.opacity = 0
        up.style.opacity = 0
        left.style.opacity = 1

    }
    // eixo y
    else if(key == "83"){

        if(y == 99){
            y+=0
        }else{
            y += 11
        }
        posY.innerHTML = "Y: "+y
        player.style.marginTop = y + "px"
        right.style.opacity = 0
        down.style.opacity = 1
        up.style.opacity = 0
        left.style.opacity = 0



    }else if(key == "87"){

        if(y == -77){
            y-=0
        }else{
            y -= 11
        }
        posY.innerHTML = "Y: "+y
        player.style.marginTop = y + "px"
        right.style.opacity = 0
        down.style.opacity = 0
        up.style.opacity = 1
        left.style.opacity = 0
    }
})