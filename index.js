
// alert("Hi")
var n= document.querySelectorAll(".drum").length
// alert(auds)
var as= ["sounds/kick-bass.mp3", "sounds/snare.mp3", "sounds/tom-1.mp3", "sounds/tom-2.mp3", "sounds/tom-3.mp3", "sounds/tom-4.mp3", "sounds/crash.mp3"]
for(var i=0; i<n; i++)
    document.querySelectorAll(".drum")[i].addEventListener("click", function()
    {
        var tt= this.innerText
        avaajKarde(tt);
    });

    document.querySelector(".set").addEventListener("keydown", function(event) {
        var aa= event.key
        // console.log(aa)
        avaajKarde(aa)
    });
        

function avaajKarde(key)
{
    switch (key) {
        case "w":
            var aud= new Audio("sounds/kick-bass.mp3")
            aud.play()
            break;
        
        case "a":
            var aud= new Audio("sounds/snare.mp3")
            aud.play()
            break;

        case "s":
            var aud= new Audio("sounds/tom-1.mp3")
            aud.play()
            break;

        case "d":
            var aud= new Audio("sounds/tom-2.mp3")
            aud.play()
            break;

        case "j":
            var aud= new Audio("sounds/tom-3.mp3")
            aud.play()
            break;
        
        case "k":
            var aud= new Audio("sounds/tom-4.mp3")
            aud.play()
            break;
        
        case "l":
            var aud= new Audio("sounds/crash.mp3")
            aud.play()
            break;

        default:
            break;
    }
}