var canvas;
var backgroundImage, car1_img, car2_img, track;
<<<<<<< HEAD
var fuelImage, powerCoinImage, lifeImage;
var obstacle1Image, obstacle2Image, blastImage;
var database, gameState;
var form, player, playerCount=0;
var allPlayers, car1, car2, fuels, powerCoins, obstacles;
var cars = [];
//obo
=======
var database, gameState;
var form, player, playerCount;
var allPlayers, car1, car2;
var cars = [];

>>>>>>> 6c7548720d25656d3698cb9d2d59092696d7757d
function preload() {
  backgroundImage = loadImage("./assets/background.png");
  car1_img = loadImage("../assets/car1.png");
  car2_img = loadImage("../assets/car2.png");
  track = loadImage("../assets/track.jpg");
<<<<<<< HEAD
  fuelImage = loadImage("./assets/fuel.png");
  powerCoinImage = loadImage("./assets/goldCoin.png");
  obstacle1Image = loadImage("./assets/obstacle1.png");
  obstacle2Image = loadImage("./assets/obstacle2.png");
  lifeImage = loadImage("./assets/life.png");
  blastImg = loadImage("./assets/blast.png");
=======
>>>>>>> 6c7548720d25656d3698cb9d2d59092696d7757d
}

function setup() {
  canvas = createCanvas(windowWidth, windowHeight);
  database = firebase.database();
  game = new Game();
  game.getState();
  game.start();
}

function draw() {
  background(backgroundImage);
  if (playerCount === 2) {
    game.update(1);
  }

  if (gameState === 1) {
    game.play();
  }
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
