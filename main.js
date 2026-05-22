let precentToAdd2 = 50;
let isClicked = false
let isClicked2 = false
let isClicked3 = false
let isClicked4 = false

function mercyBlueBeam(){
    isClicked = true;
    console.log(isClicked)
}

function bapsAmplification(){
    isClicked3 = true
    console.log(isClicked3)
}
function junosRay(){
    isClicked4 = true
    console.log(isClicked4)
}    

function anaNano(){
    isClicked2 = true
    console.log(isClicked2)
}

function moriasUlt(){
    if (isClicked3 === true){
        calcUlt(70/2)
    }else{
        calcUlt(70)
    }
}
function junkerQueenUlt(){
    if (isClicked3 === true){
        calcUlt(30)
    }else{
        calcUlt(60)
    }
}
function orisaUlt(){
    if (isClicked3 === true){
        calcUlt(225/2)
    }else{
        calcUlt(225)
    }
}
function reinsEarthshatter(){
    if (isClicked3 === true){
        calcUlt(50)
    }else{
        calcUlt(100)
    }
}
function hogsWholeHog(){
    calcUlt(56)
}
function sigmasUlt(){
    if (isClicked3 === true){
        calcUlt(25)
    }else{
        calcUlt(50)
    }
}
function winstonsPrimalRage(){
    if (isClicked3 === true){
        calcUlt(67.5/2)
    }else{
        calcUlt(67.5)
    }
}

function thisBetterWork(){
    downloadFile("https://www.dropbox.com/scl/fi/f1a4yr7gxuebs6xzv6g4u/IMG_1828.jpeg?rlkey=9r8lpi51tcn5ls2ooafrr7hrs&e=1&st=pi9kk90o&dl=1", "haha")
    
}
function calcUlt(dmg){
    if (isClicked ===true && isClicked2 === true && isClicked3 === true && isClicked4 === true){
            document.getElementById("numberDisplay").textContent = (((dmg * (1 + 50 / 100) * (1 + 30 / 100))*2) * (1+30/100));
        }else{
            if (isClicked ===true && isClicked3 === true && isClicked2 === false){
                document.getElementById("numberDisplay").textContent = ((dmg * (1 + 30 / 100))*2)
            }
        }
        if (isClicked ===false && isClicked2 === false && isClicked3 === true && isClicked4 === false){
            document.getElementById("numberDisplay").textContent = dmg *2
        }
        if (isClicked===true && isClicked2 === true && isClicked3 === false && isClicked4 === false){
            document.getElementById("numberDisplay").textContent = (dmg * (1 + 50 / 100) * (1 + 30 / 100))
        }
        if (isClicked ===false && isClicked3 === false && isClicked2 == true && isClicked === false){
            document.getElementById("numberDisplay").textContent = (dmg * (1 + 50 /100))
        }
        if (isClicked === true && isClicked3 === false && isClicked2 === false && isClicked ===false){
            document.getElementById("numberDisplay").textContent = (dmg * (1+30/100))
        }
        if (isClicked === false && isClicked2 === false && isClicked3 === false && isClicked4 === false){
        document.getElementById("numberDisplay").textContent = dmg
        }
        if(isClicked === true && isClicked2 === false && isClicked3 === false && isClicked4 === true){
            document.getElementById("numberDisplay").textContent = (dmg * (1+30/100) * (1+30/100))
        }
        if(isClicked === true && isClicked2 ===true && isClicked3 === false && isClicked4 === true){
            document.getElementById("numberDisplay").textContent = (dmg)
        }
        if(isClicked == false && isClicked2=== true && isClicked3 === true && isClicked4 === true){
            document.getElementById("numberDisplay").textContent = (dmg * (1+30/100)*(1+50/100)*2)
        }
        if(isClicked === false && isClicked2 === true && isClicked3 === true && isClicked4 === false){
            document.getElementById("numberDisplay").textContent = (dmg * (1+50/100)*2)
        }
}
function pharahDmg(){
    calcUlt(120);
    
}

function bastionUlt(){
    calcUlt(550);
}
function cassityUlt(){
    calcUlt(1560);
}
function emreUlt(){
    calcUlt(140);
}
function ashesBob(){
    calcUlt(136);
}
function dragonBlade(){
    if (isClicked3 === true){
    calcUlt(110/2)
    } else {
    calcUlt(110)
    }
}
function frejasUlt(){
    calcUlt(200)
}
function pharasUlt(){
    calcUlt(1200)
}
function reapersUlt(){
    calcUlt(185)
}
function torbsUlt(){
    calcUlt(25)
}
function tracersUlt(){
    calcUlt(355)
}
function sunderingBlade(){
    if (isClicked3 === true){
    calcUlt(400/2)
    } else {
    calcUlt(400)
    }
}
function ventureUlt(){
    if (isClicked3 === true){
    calcUlt(130/2)
    } else {
    calcUlt(130)
    }
}
function ramsUlt(){
    calcUlt(35)
}
function dvaBomb(){
    if (isClicked === true && isClicked4 === true){
        document.getElementById("numberDisplay").textContent = 1300 * 1.35
    }else if (isClicked === false && isClicked4 === true){
        document.getElementById("numberDisplay").textContent = 1000 * 1.35
    }else if (isClicked === true && isClicked4 === false){
        document.getElementById("numberDisplay").textContent = 1300
    }else{
        document.getElementById("numberDisplay").textContent = 1000
    }
}
function dominaUlt(){
    if (isClicked3 === true){
        calcUlt(75/2)
    }else{
        calcUlt(75)
    }
}
function hazardsUlt(){
    calcUlt(90)
}
