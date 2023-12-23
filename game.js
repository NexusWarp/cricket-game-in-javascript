let score = 0;
let wickets = 0;
let overs = 0;
let balls = 0;

let playBtn = document.querySelector(".play");
document.querySelector(".score").innerHTML = score;
document.querySelector(".wickets").innerHTML = wickets;
document.querySelector(".overs").innerHTML = overs;
document.querySelector(".balls").innerHTML = balls;


playBtn.addEventListener('click', ()=>{
    document.querySelector(".ball").classList.add("ballanimate");
    document.querySelector(".bat").classList.add("batanimate");
    let random = Math.floor(Math.random() * 7);
   setTimeout(()=>{
    document.querySelector(".ball").classList.remove("ballanimate");
    document.querySelector(".bat").classList.remove("batanimate");
    if(random==0){
        balls ++;
        document.querySelector(".balls").innerHTML = balls;
    }
    else if(random ==1){
        balls ++;
        score++;
        document.querySelector(".score").innerHTML = score;
        document.querySelector(".balls").innerHTML = balls;
    }
    else if(random ==2){
        balls ++;
        score +=2;
        document.querySelector(".score").innerHTML = score;
        document.querySelector(".balls").innerHTML = balls;
    }
    else if(random ==3){
        balls ++;
        score +=3;
        document.querySelector(".score").innerHTML = score;
        document.querySelector(".balls").innerHTML = balls;
    }
    else if(random ==4){
        balls ++;
        score +=4;
        document.querySelector(".score").innerHTML = score;
        document.querySelector(".balls").innerHTML = balls;
    }
    else if(random ==5){
        balls ++;
        wickets++;
        document.querySelector(".wickets").innerHTML = wickets;
        document.querySelector(".balls").innerHTML = balls;
    }
    else if(random ==6){
        balls ++;
        score +=6;
        document.querySelector(".score").innerHTML = score;
        document.querySelector(".balls").innerHTML = balls;
    }
   },2000)
})
