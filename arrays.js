
var matrix = [
    [1,2,3,4],
    [5,6,7,8],
    [9,10,11,12]
]

matrix.push([13, 14, 15, 16]);

console.log(matrix);
let removedRow = matrix.shift();
console.log(matrix);
console.log("Removed row:", removedRow);

matrix.forEach(row => row.push(row[row.length - 1] + 1));
console.log("After adding a column:", matrix);

