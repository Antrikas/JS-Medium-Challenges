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
      // This is how you loop through every character in a string
      //  reversedString = str[i] + reversedString;
   // }
    //return reversedString;
//}
        
    
    //console.log(reverseString('abc'));

    //Solution 1
    function convertToZeros(arr) {
        for (let i = 0; i < arr.length; ++i) {
           arr[i] = 0
    }
    return arr;    
    }
        console.log(convertToZeros([5, 100, 0]));

     // Sotution 2   
        function convertToZeros(arr) {
            return new Array(arr.length).fill (0);
        }
            console.log(convertToZeros([5, 100, 0]));

    //Solution 3
    function convertToZeros(arr) {
      return arr.map(elem => 0)
    }
       console.log(convertToZeros([5, 100, 0]));
    
       //New challenge
        //function removeApples(arr) {
          //  let noApples = []
            //for (let i = 0; i < arr.length; ++i) {
              //  if (arr[i] !== 'Apple') {
                //    noApples.push (arr[i]);
                //}
            //}
             //   return noApples;
          //}
            //  console.log(removeApples(['Banana', 'Apple', 'Orange', 'Apple']));
      
              //Solution 2
              function removeApples(arr) {
                return arr.filter (elem => elem !== 'Apple')
              }
                  console.log(removeApples(['Banana', 'Apple', 'Orange', 'Apple']));
            