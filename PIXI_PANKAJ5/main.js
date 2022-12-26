const game = new PIXI.Application({
  width: innerWidth,
  height: innerHeight,
  backgroundColor: 0x3366ff,
});
document.getElementById("game").append(game.view);
loadAssets([
  { name: "back", url:"assets/close.png" },
  { name: "front", url: "assets/menu.jpg" },
], start);
//------------------------------
const pBar = document.getElementById("bar");
const pText = document.getElementById("progress");
document.getElementById("but").style.display="none";
function preload(e) {
  console.log(e.progress);
  if(e.progress===50)
  {
    pBar.style.backgroundColor = "black";
      pBar.style.width = e.progress +"%" ;
      pText.innerText = e.progress +"%" 
    console.log('hello bro');
    setTimeout(() => {
      
  pText.innerText = e.progress +"%";
  pBar.style.width = e.progress +"%" ;
    }, 1000);
    

  }
 
  if (e.progress === 100) {
    // console.log("hide loader");
    pBar.style.backgroundColor = "red";
    
    setTimeout(() => {
      pBar.style.width = e.progress +"%" ;
      // document.getElementById("loader").style.display = "none";
      document.getElementById("bar").style.display = "none"; 
      document.getElementById("lo").style.display = "none";     
      document.getElementById("progress").style.display = "none";  
      document.getElementById("but").style.display="";             
    }, 2000);
  }
  
}

function startgame()
{
  console.log("clicked");
  document.getElementById("loader").style.display = "none";
  // setTimeout(() => {
      
  //   document.getElementById("loader").style.display = "";
  //     }, 3000);


}



function loadAssets(list, onLoadComplete) {
  game.loader.onProgress.add(preload);
  game.loader.add(list).load(onLoadComplete);
}
//----------------------------------
function start(loader, resources) {
 


    const smily2 = new PIXI.Texture(resources['back'].texture);
    //new PIXI.Rectangle(0,0,150,150));
    const front2 = PIXI.Sprite.from(smily2);
     front2.scale.set(.6);
     front2.x=986;
     front2.width=100;
     front2.height=80;
    front2.y=18;
    game.stage.addChild(front2);
    front2.interactive = true;
front2.on('mousedown', (event) => {

     console.log("dbjhdsghj");
     document.getElementById("loader").style.display = "";
    // Handle event
});

    
 
   const font = new PIXI.Text('Text Button!');
        font.anchor.set(0.5);
       // font.position.set(renderer.screen.width / 2, renderer.screen.height / 2);
        font.interactive = true;
      
        font.x=400;
        font.y=62;
        
        font.buttonMode = true;
        font.on('pointerdown', function () {
            font.scale.y *= 1.25;
        });
        game.stage.addChild(font);
}