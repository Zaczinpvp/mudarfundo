var quadrado;






function setup() {
  createCanvas(400, 400);
  quadrado=createSprite(200,200,20,100);



}

function mudardecor(){
  if(keyDown("right")){
    background("red");


  }



}











function draw() {
  background(220);
  drawSprites();
  mudardecor();


}








