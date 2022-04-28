// always hungry
alwaysHungry([3.14, "food", "pie", true, "food"]);
alwaysHungry([4, 1, 5, 7, 2]);
function alwaysHungry(arr) {
    var foodcount=0;
    for(var i=0; i<arr.length; i++){
        if (arr[i] == "food"){
            console.log("yummy",'yummy!'); 
            foodcount++;
        }
    }
    if(foodcount == 0){
        console.log("I'm hungry!");
    }
}  

// high pass filter
var result = highPass([6, 8, 3, 10, -2, 5, 9], 5);
function highPass(arr, cutoff) {
    var filteredArr = [];
    for (var i=0; i<arr.length; i++){
        if(arr[i] > cutoff) {
            filteredArr.push(arr[i]);
        }
    }
    return filteredArr;
}
console.log(result); // we expect back [6, 8, 10, 9]


//Better than Average

var result = betterThanAverage([6, 8, 3, 10, -2, 5, 9]);
function betterThanAverage(arr) {
    var sum = 0;
    for(var i=0; i<arr.length; i++){
        sum += arr[i];
    }
    var count = 0
    var average = sum / arr.length;
    for(var i=0; i<arr.length; i++){
        if(arr[i] > average){
            count++;
        }
    }
    return count;
}
console.log(result); // we expect back 4


// Reverse
var result = reverse(["a", "b", "c", "d", "e"]);
function reverse(arr) {
    
    return arr;
}

console.log(result); // we expect back ["e", "d", "c", "b", "a"]
