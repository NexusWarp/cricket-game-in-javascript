let score = 0;
let wickets = 0;
let overs = 0;
let balls = 0;
let oversSelected = 1;
let target;
let playBtn = document.querySelector(".play");
let fiveBtn = document.querySelector(".five");
let tenBtn = document.querySelector(".ten");
document.querySelector(".score").innerHTML = score;
document.querySelector(".wickets").innerHTML = wickets;
document.querySelector(".overs").innerHTML = overs;
document.querySelector(".balls").innerHTML = balls;
fiveBtn.style.backgroundColor = "rgb(238, 146, 54)" ; 

fiveBtn.addEventListener("click" , ()=>{
    fiveBtn.style.backgroundColor = "rgb(238, 146, 54)" ;
    tenBtn.style.backgroundColor = " rgb(71, 70, 69)" ;
    oversSelected = 5;
})
tenBtn.addEventListener("click", ()=>{
    fiveBtn.style.backgroundColor = "rgb(71, 70, 69)" ;
    tenBtn.style.backgroundColor = " rgb(238, 146, 54)";
    oversSelected = 10;
})




playBtn.addEventListener('click', ()=>{
    document.querySelector(".ball").classList.add("ballanimate");
    playBtn.style.visibility="hidden"

    let random = Math.floor(Math.random() * 7);
   setTimeout(()=>{
    document.querySelector(".ball").classList.remove("ballanimate");
    document.querySelector(".bat").classList.remove("batanimate");
    if(random==0){
       
        document.querySelector(".balls").innerHTML = balls;
        shotAnim(0);
    }
    else if(random ==1){
    
        score++;
        document.querySelector(".score").innerHTML = score;
        document.querySelector(".balls").innerHTML = balls;
        shotAnim(1);
    }
    else if(random ==2){
        
        score +=2;

        shotAnim(2);
        document.querySelector(".score").innerHTML = score;
        document.querySelector(".balls").innerHTML = balls;
    }
    else if(random ==3){
        
        score +=3;
        document.querySelector(".score").innerHTML = score;
        document.querySelector(".balls").innerHTML = balls;
        shotAnim(3);
    }
    else if(random ==4){
        
        score +=4;
        document.querySelector(".score").innerHTML = score;
        document.querySelector(".balls").innerHTML = balls;
        shotAnim(4);
    }
    else if(random ==5){
        
        wickets++;
        document.querySelector(".wickets").innerHTML = wickets;
        document.querySelector(".balls").innerHTML = balls;
        shotAnim("W");
    }
    else if(random ==6){
       
        score +=6;
        document.querySelector(".score").innerHTML = score;
        document.querySelector(".balls").innerHTML = balls;
        shotAnim(6);
    }
    playBtn.style.visibility="visible"
   },2000)
})
function shotAnim(per){
    document.querySelector(".shot").innerHTML = per;
    
    document.querySelector(".shot").classList.add("shotanimate");
    setTimeout(()=>{
        document.querySelector(".shot").classList.remove("shotanimate");
        overCount();
    },1000)
}
function overCount(){
    balls ++;
    document.querySelector(".balls").innerHTML = balls;
    if(balls>5){
        balls = 0;
        overs++;
        document.querySelector(".overs").innerHTML = overs;
        
    }
    if(overs==oversSelected){
        document.querySelector(".teamname").innerHTML="Team 2 Batting";
        target = score+1;
        document.querySelector(".target").innerHTML ="Target: " + target;
        score = 0;
        wickets=0;
        overs=0;
        balls=0;
        document.querySelector(".balls").innerHTML = balls;
        document.querySelector(".score").innerHTML = score;
        document.querySelector(".wickets").innerHTML = wickets;
        document.querySelector(".overs").innerHTML = overs;
    }
   
}