function quickSort(Arr) {
      if (Arr.length <= 1) {
         return Arr;
         } else {
               var leftArr = [];              
               var rightArr = [];
               var newArr = [];
               var pivot = Arr.pop(); 
                  
               var length = Arr.length;
               for (var i = 0; i < length; i++) {
                  if (Arr[i] <= pivot) {  
                     leftArr.push(Arr[i]);      
               } 
               else {
                       rightArr.push(Arr[i]);
             }
           }
         return newArr.concat(quickSort(leftArr), pivot, quickSort(rightArr));                                                                            //returned untill sorting occurs
      }
   }
   var myArray = [9, 0, 2, 7, -2, 6, 1 ];
   console.log(myArray);
   console.log()
   console.log(quickSort(myArray));