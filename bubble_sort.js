var a = [35, 10, 31,45,3,2,7, 11, 26]; 
var list1=[];   
    function my_fun()  
    {  
    for(i = 0; i < a.length; i++)     
    {    
        list1.push(a[i]);    
    }    
    }        
    for(i = 0; i < a.length; i++)    
    {    
        for (j = 0; j < a.length; j++)    
        {    
            if(a[i] < a[j])    
            {    
                temp = a[i];    
                a[i]=a[j];    
                a[j] = temp;     
            }    
        }    
    }    
my_fun() 
console.log(list1)
