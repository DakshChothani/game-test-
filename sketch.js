var SERVE = 0;
var PLAY = 1;
var END = 2;
var gameState = SERVE;

var warrior, warrior_running,warrior1,warrior_jump;
var back_ground, background_image, invisibleGround;
var start_play;

function preload(){
  back_image = loadAnimation("background.png");
  warrior_running = loadAnimation("Warrior_Walk.gif");
  warrior_jump = loadAnimation("Warrior_Jump.gif");
  warrior_idle = loadAnimation("Warrior_IDLE.gif");
  warrior_attack = loadAnimation("Warrior_Attack.gif");
  warrior_skill = loadAnimation("Warrior_Skill.gif");
  warrior_hit= loadAnimation("Warrior_Hit.gif");
  enemy_idle = loadAnimation("Enemy_Idle.gif");
  enemy_attack = loadAnimation("Enemy_attack.gif");
  
}

function setup() {
  createCanvas(1900, 960);
  createEdgeSprites();
  
  back_ground = createSprite (1000,100);
  back_ground.addAnimation("displayImage",back_image);
  back_ground.scale = 3;
  back_ground.x = back_ground.width /2;
  console.log(back_ground.position.x);

  warrior = createSprite(100,800);
  warrior.addAnimation("running", warrior_running);
  warrior.scale = 1;
  warrior.addAnimation("jump1", warrior_jump);
  warrior.addAnimation("idle", warrior_idle);
  warrior.addAnimation("attack", warrior_attack);
  warrior.addAnimation("skill", warrior_skill);
  warrior.addAnimation("hit", warrior_hit);
  
  invisibleGround = createSprite(1000,950,2000,10);
  invisibleGround.visible = false;

  start_play = createSprite(900,280,50,50);

  enemysGroup = new Group();
 
}

function draw() {
  background(180);
  
  // GameState is in play mode  
  if(gameState === 0){
    warrior.changeAnimation("idle",warrior_idle);
    back_ground.velocityX = 0;
    if(mousePressedOver(start_play)) {
      gameState = 1;
      warrior.changeAnimation("running",warrior_running);
      warrior.scale = 1;
    }
  }

  // GameState is in play mode
  if(gameState === 1) {
  back_ground.velocityX = -6;
  start_play.visible = false;
	if(keyWentDown("space")) {
		warrior.velocityY = -15;
    warrior.changeAnimation("jump1",warrior_jump);
    warrior.scale = 1.4;
  }
  if(keyWentUp("space")) {
    warrior.changeAnimation("running",warrior_running);
    warrior.scale = 1;
  }
    warrior.velocityY = warrior.velocityY + 0.8;
  
  if (back_ground.x < 0){
    back_ground.x = back_ground.width/2;
  }
  warrior.collide(invisibleGround);
  
  if(frameCount >= 300 ){
    spwanEnemy();
    if(frameCount > 300 && frameCount < 1000){
    back_ground.velocityX = 0;
    }
    if(keyWentDown("space")) {
      warrior.velocityY = -15;
      warrior.changeAnimation("jump1",warrior_jump);
      warrior.scale = 1.4;
    }
    if(keyWentUp("space")) {
      warrior.changeAnimation("running",warrior_running);
      warrior.scale = 1;
    }
      warrior.velocityY = warrior.velocityY + 0.8;
      
    if(keyDown("left")) {
      warrior.velocityX = -3;
      warrior.velocityY = 0;
    }
    if(keyDown("right")) {
      warrior.velocityX = 3;
      warrior.velocityY = 0;
    }
    if(keyDown("q")) {
      warrior.changeAnimation("attack", warrior_attack);
      warrior.scale = 1;

    }
    else{
      warrior.changeAnimation("running",warrior_running);
    }

    if(keyDown("c")) {
      warrior.changeAnimation("skill", warrior_skill);
    }
    else{
      warrior.changeAnimation("running",warrior_running);
    }
  }

  if(frameCount >= 1500 ){
    spwanEnemy();
    duoEnemy();
    if(frameCount > 1500 && frameCount < 2200){
    back_ground.velocityX = 0;
    }
    if(keyWentDown("space")) {
      warrior.velocityY = -15;
      warrior.changeAnimation("jump1",warrior_jump);
      warrior.scale = 1.4;
    }
    if(keyWentUp("space")) {
      warrior.changeAnimation("running",warrior_running);
      warrior.scale = 1;
    }
      warrior.velocityY = warrior.velocityY + 0.8;
      
    if(keyDown("left")) {
      warrior.velocityX = -3;
      warrior.velocityY = 0;
    }
    if(keyDown("right")) {
      warrior.velocityX = 3;
      warrior.velocityY = 0;
    }
    if(keyDown("q")) {
      warrior.changeAnimation("attack", warrior_attack);
      warrior.scale = 1;
    }
    else{
      warrior.changeAnimation("running",warrior_running);
    }

    if(keyDown("c")) {
      warrior.changeAnimation("skill", warrior_skill);
    }
    else{
      warrior.changeAnimation("running",warrior_running);
    }
  }

  if(frameCount >= 2700 ){
    spwanEnemy();
    duoEnemy();
    threeEnemy();
    if(frameCount > 2700 && frameCount < 3400){
    back_ground.velocityX = 0;
    }
    if(keyWentDown("space")) {
      warrior.velocityY = -15;
      warrior.changeAnimation("jump1",warrior_jump);
      warrior.scale = 1.4;
    }
    if(keyWentUp("space")) {
      warrior.changeAnimation("running",warrior_running);
      warrior.scale = 1;
    }
      warrior.velocityY = warrior.velocityY + 0.8;
      
    if(keyDown("left")) {
      warrior.velocityX = -3;
      warrior.velocityY = 0;
    }
    if(keyDown("right")) {
      warrior.velocityX = 3;
      warrior.velocityY = 0;
    }
    if(keyDown("q")) {
      warrior.changeAnimation("attack", warrior_attack);
      warrior.scale = 1;
    }
    else{
      warrior.changeAnimation("running",warrior_running);
    }

    if(keyDown("c")) {
      warrior.changeAnimation("skill", warrior_skill);
    }
    else{
      warrior.changeAnimation("running",warrior_running);
    }
  }

  if(frameCount >= 3900 ){
    spwanEnemy();
    if(frameCount > 3900 && frameCount < 4600){
    back_ground.velocityX = 0;
    }
    if(keyWentDown("space")) {
      warrior.velocityY = -15;
      warrior.changeAnimation("jump1",warrior_jump);
      warrior.scale = 1.4;
    }
    if(keyWentUp("space")) {
      warrior.changeAnimation("running",warrior_running);
      warrior.scale = 1;
    }
      warrior.velocityY = warrior.velocityY + 0.8;
      
    if(keyDown("left")) {
      warrior.velocityX = -3;
      warrior.velocityY = 0;
    }
    if(keyDown("right")) {
      warrior.velocityX = 3;
      warrior.velocityY = 0;
    }
    if(keyDown("q")) {
      warrior.changeAnimation("attack", warrior_attack);
      warrior.scale = 1;
    }
    else{
      warrior.changeAnimation("running",warrior_running);
    }

    if(keyDown("c")) {
      warrior.changeAnimation("skill", warrior_skill);
    }
    else{
      warrior.changeAnimation("running",warrior_running);
    }
  }

  if(frameCount >= 5100 ){
    spwanEnemy();
    if(frameCount > 5100 && frameCount < 5800){
    back_ground.velocityX = 0;
    }
    if(keyWentDown("space")) {
      warrior.velocityY = -15;
      warrior.changeAnimation("jump1",warrior_jump);
      warrior.scale = 1.4;
    }
    if(keyWentUp("space")) {
      warrior.changeAnimation("running",warrior_running);
      warrior.scale = 1;
    }
      warrior.velocityY = warrior.velocityY + 0.8;
      
    if(keyDown("left")) {
      warrior.velocityX = -3;
      warrior.velocityY = 0;
    }
    if(keyDown("right")) {
      warrior.velocityX = 3;
      warrior.velocityY = 0;
    }
    if(keyDown("q")) {
      warrior.changeAnimation("attack", warrior_attack);
      warrior.scale = 1;
    }
    else{
      warrior.changeAnimation("running",warrior_running);
    }

    if(keyDown("c")) {
      warrior.changeAnimation("skill", warrior_skill);
    }
    else{
      warrior.changeAnimation("running",warrior_running);
    }
  }

 }

  drawSprites();
  if(gameState === 1){
    if(frameCount > 290 && frameCount < 300 ){
    fill("red");
    textSize(50);
    text("Level 1", 800, 200);
    }

    if(frameCount > 1490 && frameCount < 1500 ){
      fill("red");
      textSize(50);
      text("Level 2", 800, 200);
      }

    if(frameCount > 2690 && frameCount < 2700 ){
       fill("red");
       textSize(50);
       text("Level 3", 800, 200);
      }

    if(frameCount > 3890 && frameCount < 3900 ){
      fill("red");
      textSize(50);
      text("Level 4", 800, 200);
      }

    if(frameCount > 5090 && frameCount < 5100 ){
      fill("red");
      textSize(50);
      text("Level 5", 800, 200);
      }
  }
  if(warrior.isTouching(enemysGroup)){
    enemysGroup.destroyEach();
 }
}



function spwanEnemy() {
  if (frameCount % 400 === 0) {
    var enemy = createSprite(1350,770,100,100);
    enemy.addAnimation("enemyIdle",enemy_idle);
    enemy.scale = 0.7;
    enemy.velocityX = 0;
    enemysGroup.add(enemy);
  } 
}

function duoEnemy() {
  if (frameCount % 400 === 0) {
    var enemy = createSprite(1350,770,100,100);
    enemy.addAnimation("enemyIdle",enemy_idle);
    enemy.scale = 0.7;
    enemy.velocityX = 0;
    enemysGroup.add(enemy);
  } 
}

function threeEnemy() {
  if (frameCount % 400 === 0) {
    var enemy = createSprite(1350,770,100,100);
    enemy.addAnimation("enemyIdle",enemy_idle);
    enemy.scale = 0.7;
    enemy.velocityX = 0;
    enemysGroup.add(enemy);
  } 
}

function fourEnemy() {
  if (frameCount % 400 === 0) {
    var enemy = createSprite(1350,770,100,100);
    enemy.addAnimation("enemyIdle",enemy_idle);
    enemy.scale = 0.7;
    enemy.velocityX = 0;
    enemysGroup.add(enemy);
  } 
}

function boss() {
  if (frameCount % 400 === 0) {
    var enemy = createSprite(1350,770,100,100);
    enemy.addAnimation("enemyIdle",enemy_idle);
    enemy.scale = 0.7;
    enemy.velocityX = 0;
    enemysGroup.add(enemy);
  } 
}