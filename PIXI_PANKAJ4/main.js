const game = new PIXI.Application({
  width: innerWidth,
  height: innerHeight,
  backgroundColor: 0x3366ff,
});
document.getElementById("game").append(game.view);
loadAssets([
  { name: "back", url:"for.png" },
  { name: "front", url: "assets/JACKPOT.jpg" },
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
  setTimeout(() => {
      
    document.getElementById("loader").style.display = "";
      }, 3000);


}



function loadAssets(list, onLoadComplete) {
  game.loader.onProgress.add(preload);
  game.loader.add(list).load(onLoadComplete);
}
//----------------------------------
function start(loader, resources) {
   
    const smily = new PIXI.Texture(resources['front'].texture);
    //new PIXI.Rectangle(0,0,150,150));
    const front = PIXI.Sprite.from(smily);
     front.scale.set(1.8);
     front.x=150;
    front.y=20;
    game.stage.addChild(front);



      
    var text = new PIXI.Text('Welcome To our Game',
    {
      font : '50px Arial',
      fill : 0xFFFFFF,
      align : 'center',
    });
    text.scale.set(1.5);
    
    text.x=500;
    text.y=100;

    game.stage.addChild(text);
}