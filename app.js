//function progressiveSum(num) {
   // sum = 0;
    //for (let i = 1; i <= num; ++i){
        //Thi is how you loop through every element in an array
       // sum = sum + i;
    //}
    //return sum;
//}

///console.log(progressiveSum([4]));

//function calTime(seconds) {
    //let timerMinutes = Math.floor (seconds /60);
    //let timerSeconds = seconds % 60;

   //if (timerMinutes.toString().length === 1) {
   // timerMinutes = '0' +timerMinutes
    //}

    //return timerMinutes + ':' + timerSeconds;
//}

//console.log(calTime([500]));

//function getMax(arr) {
//let max = arr[0];
//for (let i = 0; i < arr.length; ++i) {
//if (arr[i] >  max) {
 //   max =arr[i];
//}
//}
//return max;
//}
    

//console.log(getMax([-100], -200, -300));

//function reverseString(str) {
   // let reversedString = '';
    //for (let i = 0; i < str.length; ++i) {
      // This is how yo loop through every character in a string
      //  reversedString = str[i] + reversedString;
   // }
    //return reversedString;
//}
        
    
    //console.log(reverseString('abc'));

    function reverseString(str) {
        return str.split('').reverse().join('');
    }
            
        
        console.log(reverseString('abc'));