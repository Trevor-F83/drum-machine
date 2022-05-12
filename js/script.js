const numItemsToGenerate = 1;


// $(document).ready(function() {
    //     let endpoint = 'https://api.unsplash.com/'
//     let apiKey = 'AsYq44X9bUjvLXG4Um1uB53gCwIFh_KKOoGxPDr_ojs&query'

//     $(".content a").each(function(index, element) {
    
    //         $.ajax({
//             url: endpoint + "$key=" + apiKey + " &q=" + $(this).text(),
//             contentType: "application/json",
//             dataType: 'json',
//             success: function(result){
//                console.log(result);
//             }
//         })
//     })
// });


const URL = 'https://api.unsplash.com/photos/?client_id=AsYq44X9bUjvLXG4Um1uB53gCwIFh_KKOoGxPDr_ojs&query="rPOmLGwai2w"' // creates element "url" with client id (access key) added

$.ajax(URL).then(function(image) { //calling the function to access url
    console.log('image is ready') //making sure the above is correct. acts like an eventListener
    console.log(image);
}, function(error) {
     console.log("something went wrong")
 })






// function renderItem() {
//     fetch(URL).then((response) => {
//         // let item = document.createElement('div');
//         // item.classList.add('item');
//         // item.innerHTML = `<img class='music-image' src='${data.img}'/>`
//         // document.body.appendChild(item);
//         console.log(response.json())
//     }).then((data) => {
//         console.log(data)
//     })
// }
// renderItem()
// (function($){
// var albumID = 'iQdfU9G'
// var albumAPI = 'https://api.imgur.com/3/account/me/images/'

// $.ajax({
//     url: albumAPI,
//     headers: {
//         'Authorization' : 'Bearer 	f93a14b880009b7'
//     },
//     error: function(){console.log(Error);}
// });
// })(jQuery);













// const $image = $('image');
// console.log(URL)
// //from the lesson day 2 AJAX
// function handleGetDate(){

//     $.ajax(URL).then(function(data) {
//         console.log('image data is ready')
//         $data.image(data.image)
//         $('main').append(`<img src='${data.image}'/>`)
//         console.log(error)
//     })
// }





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