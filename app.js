var left = 0;

function abc() {
    var character = document.getElementById("character");
    if (event.keyCode === 68) {
        left = left + 10;
        character.style.left = left + "px";
    }
    if (event.keyCode === 68 && left < 1000) {
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
        // character.style.height = "230px"
        setTimeout(function(){
            character.src = "images/m-spiderman.gif"
        }, 200)
    }
    console.log(left)
    
}
window.onkeydown = abc;
