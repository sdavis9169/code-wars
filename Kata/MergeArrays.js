//Write a JavaScript function to merge two arrays and removes all duplicates elements.
var array1 = [1, 2, 3]; 
var array2 = [2, 30, 1]; 

//[3, 2, 30, 1]

function merge_array (array1, array2) {
    let newArr = [];
    for (let i = 0; i < array1.length; i++){
        for (let j = 0; j < array2.length; i ++) {
            if (array1[i] !== array2[j]) {
                newArr.push([i], [j])
            }
        } 
    }
}
console.log(newArr)

 console.log(merge_array(array1, array2));