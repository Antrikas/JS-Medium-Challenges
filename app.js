//function progressiveSum(num) {
   // sum = 0;
    //for (let i = 1; i <= num; ++i){
        //Thi is how you loop through every element in an array
       // sum = sum + i;
    //}
    //return sum;
//}

///console.log(progressiveSum([4]));

function calTime(seconds) {
    let timerMinutes = Math.floor (seconds /60);
    let timerSeconds = seconds % 60;

   if (timerMinutes.toString().length === 1) {
    timerMinutes = '0' +timerMinutes
    }

    return timerMinutes + ':' + timerSeconds;
}

console.log(calTime([500]));