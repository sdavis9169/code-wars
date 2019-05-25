/* Write a JavaScript function to move an array element from one position to another.
Test Data :
console.log(move([10, 20, 30, 40, 50], 0, 2));
[20, 30, 10, 40, 50]
;
[10, 20, 30, 50, 40]*/ 

Array.prototype.move = function(from, to) {
    this.splice(to, 0, this.splice(from, 1)[0]);
};

console.log(move([10, 20, 30, 40, 50], -1, -2))