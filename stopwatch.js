
const stopWatch =document.getElementsByClassName("clock")[0];
const startTag =document.getElementsByClassName("start")[0];
const pauseTag =document.getElementsByClassName("pause")[0];
const continueTag =document.getElementsByClassName("continue")[0];
const restartTag =document.getElementsByClassName("restart")[0];

let seconds=0;
mininutes=0;
hours=0;


const start =()=>{
 seconds +=1;
 if(seconds==60){
    seconds = 0;
    mininutes +=1;
    if(mininutes==60){
        mininutes =0;
        hours +=1;
    }
    
 }
 const secondsText =seconds<10 ? "0"+seconds.toString() :seconds;
    const mininutesText =mininutes<10 ? "0"+mininutes.toString() :mininutes;
    const hoursText =hours<10 ? "0" + hours.toString() :hours;
 stopWatch.textContent= hoursText +":"+mininutesText+":"+secondsText;
}


let interVal;
spanTag.LlL

const starttime =()=>{
interVal =setInterval(start,1000);
}

const pause =()=>{
clearInterval(interVal);

}

continueTag.addEventListener("click",()=>{

 
      clearInterval(interVal);
    interVal =setInterval(start,1000);s
    startTag.disabled =ture;
});

restartTag.addEventListener("click",()=>{
  seconds=mininutes=hours=0;
    clearInterval(interVal);
    interVal =setInterval(start,1000);

});



startTag.addEventListener("click",starttime);
pauseTag.addEventListener("click",pause);


