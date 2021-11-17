let timer = null;
const MAX=3;
let gamecount=0;
function init() {
  if (timer == null) {
    if(cells.firstChild){
    cells.removeChild(cells.firstChild);
    gamecount=0;
  }
    start = new Date();
    time();
    gameStart();
    startbutton.style.display="none";
  }
}

function gameStart() {
  let size=5;
  let qNum=Math.floor(Math.random()*q.length);
  for(let i=0;i<size*size;i++){
    let s=document.createElement("span");
    s.textContent=q[qNum][0];
    s.setAttribute("id","num"+i);
    s.addEventListener("click",function(){
      if(this.textContent==q[qNum][1]){
        //console.log("correct");
        correct.play();
        while(cells.firstChild){//sellsが存在していたらtrue
          cells.removeChild(cells.firstChild);
        }
        gamecount++;
        if(gamecount<MAX){
          gameStart();
          //console.log("continue");
        }else{
          clearTimeout(timer);
          let clear=document.createElement("span");
          clear.setAttribute("id","clear");
          clear.textContent="\\CLEAR/";
          cells.appendChild(clear);
          timer=null;
          startbutton.style.display="block";
          alert("Game Clear!");
          save();

        }
      }else{
        wrong.play();
      }
    });
    cells.appendChild(s);
    if(i%size==size-1){
      const br=document.createElement("br");
      cells.appendChild(br);
    }
  }
  let p=Math.floor(Math.random()*size*size);
  //console.log(p+1);
  let ans=document.getElementById("num"+p);
  ans.textContent=q[qNum][1];
}

function time() {
  let now=new Date();
  let eTime=parseInt((now.getTime()-start.getTime())/1000);
  score.textContent=eTime;
  timer=setTimeout("time()",1000);
  //if(end) send(eTime);
}
