//Part 1
let jumbotron = document.querySelector('#jumbotron');
let donateABkike  = document.querySelector('#donateABikebtn');
let volunteer = document.querySelector('#volunteerbtn');

let blueButton = document.querySelector('#blueBtn');
blueButton.addEventListener('click', function(){
    jumbotron.style.backgroundColor = `#588fbd`;
    donateABkike.style.backgroundColor = `#ffa500`;
    volunteer.style.backgroundColor = `#000000`;
    volunteer.style.color = `#ffffff`;

});

let orangeButton = document.querySelector('#orangeBtn');
orangeButton.addEventListener('click', function(){
    jumbotron.style.backgroundColor = `#f0ad4e`;
    donateABkike.style.backgroundColor = `#5751fd`;
    volunteer.style.backgroundColor = `#31b0d5`;
    volunteer.style.color = `#ffffff`;

});

let greenButton = document.querySelector('#greenBtn');
greenButton.addEventListener('click', function(){
    jumbotron.style.backgroundColor = `#87ca8a`;
    donateABkike.style.backgroundColor = `#000000`;
    volunteer.style.backgroundColor = `#8c9c08`;

});


//Part 2

