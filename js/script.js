const numItemsToGenerate = 1;

const imageURL = 'https://images.unsplash.com/photo-1652345408109-84e1f1ca130f?client_id=AsYq44X9bUjvLXG4Um1uB53gCwIFh_KKOoGxPDr_ojs' // creates element "url" with client id (access key) added


//element references
const $image = $('#image');

$.ajax({
    url: imageURL,
    contentType: 'image/jpg',
   cache: false,
   xhrFields: {
       responseType: 'blob'
   },
    success: function (image) {
        // $image.src="data:image/png;base64," + btoa(image)
        console.log("image is READY!")
        var url  = window.URL || window.webkitURL;
        document.getElementById("image").src = url.createObjectURL(image);  
      }
});
function logConsole() {
console.log("https://github.com/Trevor-F83/drum-machine")
}


//defines keydown event
document.addEventListener('keydown', function (e) {
    var myAudio = new Audio('./audio/snare.wav'); //tells the function where to get info once keydown event is initiated

    //is function in action. Repeat from "document." to "});" for each sound
    if (e.key == 'q') {
        myAudio.play();
    }
});

document.addEventListener('keydown', function (e) {
    var myAudio = new Audio('./audio/closed_high_hat.wav');

    if (e.key == 'w') {
        myAudio.play();
    }
});

document.addEventListener('keydown', function (e) {
    var myAudio = new Audio('./audio/cowbell.wav');

    if (e.key == 'e') {
        myAudio.play();
    }
});

document.addEventListener('keydown', function (e) {
    var myAudio = new Audio('./audio/crash.wav');

    if (e.key == 'r') {
        myAudio.play();
    }
});

document.addEventListener('keydown', function (e) {
    var myAudio = new Audio('./audio/floor_tom.wav');

    if (e.key == 't') {
        myAudio.play();
    }
});

document.addEventListener('keydown', function (e) {
    var myAudio = new Audio('./audio/kick.wav');

    if (e.key == 'y') {
        myAudio.play();
    }
});

document.addEventListener('keydown', function (e) {
    var myAudio = new Audio('./audio/low_tom.wav');

    if (e.key == 'u') {
        myAudio.play();
    }
});

document.addEventListener('keydown', function (e) {
    var myAudio = new Audio('./audio/open_high _hat.wav');

    if (e.key == 'i') {
        myAudio.play();
    }
});

document.addEventListener('keydown', function (e) {
    var myAudio = new Audio('./audio/ride.wav');

    if (e.key == 'o') {
        myAudio.play();
    }
});

document.addEventListener('keydown', function (e) {
    var myAudio = new Audio('./audio/tom_high.wav');

    if (e.key == 'p') {
        myAudio.play();
    }
});