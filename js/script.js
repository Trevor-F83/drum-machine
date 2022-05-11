// const URL = 'https://api.unsplash.com/photos/?client_id=AsYq44X9bUjvLXG4Um1uB53gCwIFh_KKOoGxPDr_ojs=s/photos/music'

// const numItemsToGenerate = 1;

// function renderItem() {
//     fetch('https://source.unsplash.com/s/photos/music').then((response) => {
//         let item = document.createElement('div');
//         item.classList.add('item');
//         item.innerHTML = `<img class='music-image' src='${data.img}'/>`
//         document.body.appendChild(item);
//     })
// }


//from the lesson day 2 AJAX
function handleGetDate(){

    $.ajax(URL).then(function(data) {
        console.log('img data is ready')
        $data.img(data.img)
        $('main').append(`<img src='${data.img}'/>`)
        console.log(error)
    })
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