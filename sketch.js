const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var canvas;
var palyer, playerBase, playerArcher;
var baseimage;
var playerArm;
var arrow;
var playerArmImg;
var arrowImg


function preload() {
  backgroundImg = loadImage("./assets/background.png");
  baseimage = loadImage("./assets/base.png");
  playerimage = loadImage("./assets/player.png");
  playerArmImg = loadImage("./assets/playerArcher.png");
}

function setup() {
  canvas = createCanvas(windowWidth, windowHeight);

  engine = Engine.create();
  world = engine.world;
  angleMode(DEGREES);

  var options = {
    isStatic: true
  };
  //create player base body
  playerBase = Bodies.rectangle(200,350,180,150,options);
  World.add(world, playerBase);
  //create player body
  player = Bodies.rectangle(250,playerBase.position.y-160,50,100,options);
  World.add(world,player);
  //create player arm and arrow
  playerArm = Bodies.rectangle(270,playerBase.position.y-170,50,100,options);
  World.add(world,playerArm);

}

function draw() {
  background(backgroundImg);

  //show the player image using image() function
  image(baseimage, playerBase.position.x, playerBase.position.y,180,50);
  //show the playerbase image using image() function
  image(playerimage,player.position.x,player.position.y,50,180);
  //show the player arm
  image(playerArmImg,playerArm.position.x,playerArm.position.y,60,190);

  Engine.update(engine);

  // Title
  fill("#FFFF");
  textAlign("center");
  textSize(40);
  text("EPIC ARCHERY", width / 2, 100);
}
