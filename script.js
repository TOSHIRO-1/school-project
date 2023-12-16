var prevScrollpos = window.pageYOffset;
var clickCount = 0;

window.onscroll = function () {
    var currentScrollPos = window.pageYOffset;
    if (prevScrollpos > currentScrollPos) {
        document.querySelectorAll(".section").forEach(function (section) {
            section.style.opacity = 1;
        });
    } else {
        document.querySelectorAll(".section").forEach(function (section) {
            section.style.opacity = 0;
        });
    }
    prevScrollpos = currentScrollPos;
};

function addHeart(section) {
    var heart = section.querySelector('.heart');
    heart.style.opacity = 1;
    setTimeout(function () {
        heart.style.opacity = 0;
    }, 2000); // Le cœur disparaît après 2 secondes
    
    // Augmentez le compteur de clics
    clickCount++;

    // Si le compteur atteint 6 clics, lancez la vidéo en plein écran
    if (clickCount === 6) {
        var myVideo = section.querySelector('#myVideo');
        launchFullscreen(myVideo);
    }
}

// Simulate six rapid clicks
function simulateRapidClicks() {
    var section = document.querySelector(".section"); // Assuming you want to click on the first section
    for (var i = 0; i < 6; i++) {
        setTimeout(function () {
            addHeart(section);
        }, i * 200); // Click every 200 milliseconds
    }
}

// Call the function to simulate six rapid clicks
simulateRapidClicks();

// Fonction pour lancer la vidéo en plein écran
function launchFullscreen(element) {
    if (element.requestFullscreen) {
        element.requestFullscreen();
    } else if (element.mozRequestFullScreen) {
        element.mozRequestFullScreen();
    } else if (element.webkitRequestFullscreen) {
        element.webkitRequestFullscreen();
    } else if (element.msRequestFullscreen) {
        element.msRequestFullscreen();
    }
}
