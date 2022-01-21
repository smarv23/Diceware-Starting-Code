//update numberKey with new random number each time
//repeat 5 times and display number 

let words = new Map();
let number;
let ygp = 'Your Generated Passphrase:';
let xposbox = 50;
let yposbox = 100;
let rectSizeX = 600;
let rectSizeY = 90;
let addInfo = 'Press space bar to add more security to your Passphrase '

function preload() {
  loadStrings('beale.wordlist.asc.txt', createMap);
}

let findKey = "12342";
let passphrase = "";

function findLookupKey() {
  let key = ""; // the problem was right here... key was oddly initialized to a space, which meant that the lookup key ended up being " #####", which means that words.get couldn't find it. 
  const randomNumber = [1, 2, 3, 4, 5, 6]
  for (let i = 0; i < 5; i++) {
    key = `${key}${random(randomNumber)}`;
  }
  return key;
}


function createMap(strings) {
  for (let line of strings) {
    let [key, word] = line.split('\t');
    if (key.length === 5) {
      words.set(key, word);
    }
  }
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  background('teal');
}

function draw() {
  textFont('Georgia');
  textSize(20);
  stroke('white');
  fill('white');
  text(ygp, width / 8, height / 6);
  text(addInfo, width / (10), height /(1.5));

  fill('lightsalmon');
  strokeWeight(10);
  stroke('white');
  rect(xposbox, yposbox, rectSizeX, rectSizeY);

  strokeWeight(1);
  fill('white');
 // text(words.get(findKey), xposbox + 125, yposbox + 50);
  text(passphrase, xposbox+5 , yposbox+50 );
  noLoop();
}

function keyPressed() {
  if (key === " ") {
    // you probably want to delete this code eventually
    // let number = int(numberKey);
    findKey = findLookupKey();
    passphrase = passphrase + words.get(findKey);
    redraw();
  }
    if (key === "r") {
      fill('lightsalmon');
  strokeWeight(10);
  stroke('white');
  rect(xposbox, yposbox, rectSizeX, rectSizeY);
    
    let key = ""; 
    const randomNumber = [1, 2, 3, 4, 5, 6];
  for (let i = 0; i < 5; i++) {
    key = `${key}${random(randomNumber)}`;
  }
  return key;


    findKey = findLookupKey();
    passphrase = passphrase + words.get(findKey);
    redraw();
  }
}

