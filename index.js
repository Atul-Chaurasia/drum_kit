// alert("Hey world")
//document.querySelector("button").addEventListener("click", handleEvent);





// for(var i=0; i<handleAllDrum; i++){
//     document.querySelectorAll(".drum")[i].addEventListener("click", handleEvent);
// }
// function handleEvent(){
//     alert("Helo world!");
// }

//dectecting button press

var handleAllDrum = document.querySelectorAll(".drum").length;

for(var i=0; i<handleAllDrum; i++){
    var playAudio = document.querySelectorAll(".drum")[i].addEventListener("click", function() {

        var buttonInnerHtml = this.innerHTML;

        // handleAudio(buttonInnerHtml);
    
        makeSound(buttonInnerHtml);
        addAnimation(buttonInnerHtml);
    });

    
}

//dectecting keyboard press

document.addEventListener("keypress", function(event) {
    makeSound(event.key);
    addAnimation(event.key);
});


function makeSound(key) {

    switch (key) {
        case "w":
            var tom_1 = new Audio('sounds/tom-1.mp3');
            tom_1.play();
            break;
        case "a":
            var tom_2 = new Audio('sounds/tom-2.mp3');
            tom_2.play();
            break;
        case "s":
            var tom_3 = new Audio('sounds/tom-3.mp3');
            tom_3.play();
            break;
        case "d":
            var tom_4 = new Audio('sounds/tom-4.mp3');
            tom_4.play();
            break;
        case "j":
            var snare = new Audio('sounds/snare.mp3');
            snare.play();
            break;
        case "k":
            var crash = new Audio('sounds/crash.mp3');
            crash.play();
            break;
        case "l":
            var kick_bass = new Audio('sounds/kick-bass.mp3');
            kick_bass.play();
            break;    
        default:
            console.log(key)
            break;
    }    
}


function addAnimation(currentKey) {
    var activeButton = document.querySelector("."+ currentKey);
    activeButton.classList.add("pressed"); 
    // activeButton.style.color = "red";
    setTimeout(function() {activeButton.classList.remove("pressed");}, 100);
}



// function handleAudio(){
//     // this.style.color = "white"  //it is just like a identity of button.

//     var buttonInnerHtml = this.innerHTML;
//     // addAnimation(buttonInnerHtml);    

//     switch (buttonInnerHtml) {
//         case "w":
//             var tom_1 = new Audio('sounds/tom-1.mp3');
//             tom_1.play();
//             break;
//         case "a":
//             var tom_2 = new Audio('sounds/tom-2.mp3');
//             tom_2.play();
//             break;
//         case "s":
//             var tom_3 = new Audio('sounds/tom-3.mp3');
//             tom_3.play();
//             break;
//         case "d":
//             var tom_4 = new Audio('sounds/tom-4.mp3');
//             tom_4.play();
//             break;
//         case "j":
//             var snare = new Audio('sounds/snare.mp3');
//             snare.play();
//             break;
//         case "k":
//             var crash = new Audio('sounds/crash.mp3');
//             crash.play();
//             break;
//         case "l":
//             var kick_bass = new Audio('sounds/kick-bass.mp3');
//             kick_bass.play();
//             break;    
//         default:
//             console.log(buttonInnerHtml)
//             break;
//     }
// }








// var audio = new Audio('sounds/tom-1.mp3');
//     audio.play();