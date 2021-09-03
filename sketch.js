  var Runner, runner_2
  let Power, Power_up
  let Ground, Ground_up
  let roof, roof_2, roof_3, roof_4
  let line, line_2, line_3, line_4;
  let position, position2;


  function preload(){
    //pre-load images
    Runner_2 = loadAnimation("Runner-1.png", "Runner-2.png");
    Power = loadAnimation("power.png");
    Ground_up = loadAnimation("path.png")
    roof_2 = loadAnimation("2222.png")
    roof_3 = loadAnimation("3333.png")
    line_2 = loadAnimation("Line.png")
    line_4 = loadAnimation("Line2.png");
  }




  function setup(){
    createCanvas(1750 ,850);

    //create sprites here

    Ground = createSprite(200,200,200,200)
    Ground.addAnimation("ground", Ground_up)
    Ground.scale = 2
    Ground.x = 775
    Runner = createSprite(200,200,200,200)
    Runner.addAnimation("running", Runner_2);
    Runner.scale = 0.15
    Runner.x = 775
    Runner.y = 375
    roof = createSprite(200,200,200,200);
    roof.addAnimation("ground", roof_2);
    roof.y = 350
    roof_4 = createSprite(1300,200,100,200);
    roof_4.addAnimation("ground", roof_3);
    roof_4.y = 350
    roof_4.x = 1350
    line = createSprite(200,200,200,200)
    line.addAnimation("ground", line_2)
    line.y = 400
    line.x = 500
    line_3 = createSprite(1300,200,200,200)
    line_3.addAnimation("ground", line_4);
    line_3.x = 1052
    line.y = 400

  

    Ground.velocityY = -4
    Ground.y = Ground.height/2
    
  }


  function powerUp (){
    if(frameCount % 300 == 0){
      Power_up = createSprite(200,200,200,200);
      Power_up.addAnimation("ground", Power)
      Power_up.scale = 0.3
      Power_up. x = 800
      Power_up.y = Math.round(random(50,600))
    Power_up.x = Math.round(random(525,1077))
    Power_up.velocityY = -15
    }
    
  }



  function positionplace(){
    position = Runner.x
    position2 = Runner.y
    console.log(position, position2)
  if (Ground.y > 400){
    Ground.y = Ground.y/2   
  }
  if (Ground.y > 400){
    Ground.y = Ground.y/2   
  }  

  

    }


  function draw() {
    background("blue");
    drawSprites();
  }
