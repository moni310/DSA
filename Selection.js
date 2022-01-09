function SelectionSort(list1) {  
    for (var i = 0; i < list1.length; i++) {  
        var s = list1[i];  
        for (var j = i ; j < list1.length; j++) {  
            if (s > list1[j]) {  
                s = list1[j];  
            }  
        }  
        var index = list1.indexOf(s);  
        var tempVal = list1[i];  
        list1[i] = s;  
        list1[index] = tempVal;  
    }  
}  
var list1 = [8,3,2,4,7,5,0,1,6,9];    
SelectionSort(list1);  
console.log(list1); 