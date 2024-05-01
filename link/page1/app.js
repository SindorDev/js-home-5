function minMax(arr) {
     let min = arr[1];
     let max = arr[1];
     for(let i = 0; i < arr.length; i++){
         if(arr[i] > max){
             max = arr[i];
         }
     }
     return (min, max)
 }
 document.write(minMax([1, 2, 3, 4, 5]))