var left = 0;

function abc() {
    var character = document.getElementById("character");
    if (event.keyCode === 68 && left < 1200) {
        left = left + 10;
        character.style.left = left + "px";
    }
    if (event.keyCode === 65 && left > 60) {
        left = left - 10;
        character.style.left = left + "px";
    }
    if (event.keyCode === 87) {
        character.src = 'images/spidey-flipkick-fk.gif'
        character.style.width = "400px"
        character.style.height = "230px"
        setTimeout(function(){
            character.src = "images/m-spiderman.gif"
        }, 3000)
    }
    if (event.keyCode === 83) {
        character.src = 'images/spidey-crouch.gif'
        // character.style.width = "400px"
        character.style.height = "230px"
        setTimeout(function(){
            character.src = "images/m-spiderman.gif"
        }, 200)
    }

    var character2 = document.getElementById("character2");
    if (event.keyCode === 37 && left > 1200) {
        left = left - 10;
        character2.style.right = left + "px";
        character2.src = 'images/iron-walk.gif'
        character2.style.width = "400px"
        character2.style.height = "230px"
        setTimeout(function(){
            character2.src = "images/iron-man-stance.gif"
        }, 3000)
    }
    if (event.keyCode === 39 && left > 60) {
        left = left + 10;
        character2.style.right = left + "px";
        character2.src = 'images/iron-walk.gif'
        character2.style.width = "400px"
        character2.style.height = "230px"
        setTimeout(function(){
            character2.src = "images/iron-man-stance.gif"
        }, 3000)
    }
    if (event.keyCode === 38) {
        character2.src = 'images/iron-fly.gif'
        character2.style.width = "400px"
        character2.style.height = "400px"
        setTimeout(function(){
            character2.src = "images/iron-man-stance.gif"
            character2.style.height = "230px"
        }, 1000)
    }
    if (event.keyCode === 40) {
        character2.src = 'images/iron-chk.gif'
        character.style.width = "400px"
        character.style.height = "230px"
        setTimeout(function(){
            character2.src = "images/iron-man-stance.gif"
            character2.style.height = "230px"
        }, 1000)
    }

 console.log(left)    
}


//////character2////


function bcd(){
    
   
}
window.onkeydown = bcd;
window.onkeydown = abc;
