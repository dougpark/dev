// global variables
let game;
let myCounter = 0;
let myPacket = {};

window.onload = function () {
    let gameConfig = {
        width: 960,
        height: 540,
        type: Phaser.CANVAS,
        backgroundColor: 0xffffff,
        scene: [bootGame, playGame]
    }
    game = new Phaser.Game(gameConfig);
    window.focus();
    resizeGame();
    window.addEventListener("resize", resizeGame);

}

function resizeGame() {
    let canvas = document.querySelector("canvas");
    let windowWidth = window.innerWidth;
    let windowHeight = window.innerHeight;
    let windowRatio = windowWidth / windowHeight;
    let gameRatio = game.config.width / game.config.height;
    if (windowRatio < gameRatio) {
        canvas.style.width = windowWidth + "px";
        canvas.style.height = (windowWidth / gameRatio) + "px";
    } else {
        canvas.style.width = (windowHeight * gameRatio) + "px";
        canvas.style.height = windowHeight + "px";
    }
    //console.log('game.width= ' + game.config.width + ' game.height= ' + game.config.height);
    //console.log('window.width= ' + window.innerWidth + ' window.height= ' + window.innerHeight);
}