//board
let board;
let boardWidth = 750;
let boardHeight = 250;
let context;


//dino
let dinoWidth = 88;
let dinoHeight = 94
let dinoX = 50;
let dinoY = boardHeight - dinoHeight;
let dinoImg;

let dino = {
    x : dinoX,
    y : dinoY,
    width  : dinoWidth,
    height : dinoHeight
}

//cactus poop
let cactucArray = [];

let cactus1Width = 34;
let cactus2Width = 69;
let cactuc3Width = 102;

let cactusHeight = 70;
let cactusX = 700;
let cactusY = boardHeight - cactusHeight;

let cactus1Img;
let cactus2Img;
let cactus3Img;


window.onload = function() {
    board = document.getElementById("board");
    board.height = boardHeight;
    board.width = boardWidth;

    context = board.getContext("2d"); //used for drawing dino shit on board

    //draw dino
    //context.FillStyle="green";
    //context.fillRect(dino.x, dino.y, dino.width, dino.height)

    dinoImg =  new Image();
    dinoImg.src = "./img/dino.png";
    dinoImg.onload = function() {
        context.drawImage(dinoImg, dino.x, dino.y, dino.width, dino.height);
    }

    cactus1Img = new Image();
    cactus1Img.src = "./img/cactus1.png";

    cactus2Img = new Image();
    cactus2Img.src = "./img/cactus2.png";

    cactus3Img = new Image();
    cactus3Img.src = "./img/cactus3.png";

    

    requestAnimationFrame(update);
    setInterval(placeCactus, 1000);

function update() {
    requestAnimationFrame(update);

    context.drawImage(dinoImg, dino.x, dino.y, dino.width, dino.height);
    //cactus
    for (let i = 0; i < cactusArray.length; i++) {
        let cactus = cactusArray[i];
        context.drawImage(cactus.img, cactus.x, cactus.y, cactus.width, cactus.height);
    }
    
}

function placeCactus() {
    let cactus = {
        img: null,
        x: cactusX,
        y: cactusY,
        width: null,
        height: cactusHeight
    }

    let placeCactusChance = Math.random();

    if (placeCactusChance > 0.90) {
        cactus.img = cactus3Img;
        cactus.width = cactus3Width;
        cactusArray.push(cactus);
    } else if (placeCactusChance > 0.70) {
        cactus.img = cactus2Img;
        cactus.width = cactus2Width;
        cactusArray.push(cactus);
    } else if (placeCactusChance > 0.50) {
        cactus.img = cactus1Img;
        cactus.width = cactusWidth;
        cactusArray.push(cactus);
    }
}


