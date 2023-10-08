var hitrn = 0;
function getNewHit(){
    hitrn = Math.floor(Math.random()*10);
    document.querySelector("#hitval").textContent= hitrn;
}

var score = 0;
function increaseSocre(){
    score+=10;
    document.querySelector("#scoreval").textContent = score;
}

function makeBubble (){
    var clutter = "";

    for (var i = 1; i<=182; i++){
        var rn = Math.floor(Math.random()*10)
       clutter += `<div class="bubble">${rn}</div>`; 
    }


    document.querySelector("#pbtm").innerHTML = clutter;
}

var timer = 60;

function runTimer(){
    var timerint = setInterval(function(){
        if (timer>=0){
        document.querySelector("#Timerval").textContent = timer;
        timer--;
        }
        else {
            clearInterval(timerint);
            document.querySelector("#pbtm").innerHTML =    `<h1>Game Over</h1>`;
        }
    }, 1000);

}



document.querySelector("#pbtm").addEventListener("click",function(dets)
{
    var sc = Number(dets.target.textContent);
    if(sc == hitrn){
        increaseSocre();
        getNewHit();
        makeBubble();
    }

})

runTimer();
makeBubble();
getNewHit();


