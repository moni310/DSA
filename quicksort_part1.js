var array = [9, 2, 5, 6, 4, 3, 7, 10, 1, 12, 8,0,-1,11];

function quicksort(array) {
    if (array.length == 0) return [];

    var left = [], right = [], p = array[0];

    for (var i = 1; i < array.length; i++) {
        if(array[i] < p)
            left.push(array[i])
        else
            right.push(array[i]);
    }

    return quicksort(left).concat(p, quicksort(right));
}

console.log(quicksort(array.slice())); 