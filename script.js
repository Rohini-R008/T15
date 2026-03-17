let arr = [4, 8, 2, 11, 6, 7, 10];

// 1. find maximum (normal function)
function findMax(array) {
    let max = array[0];
    for (let i = 1; i < array.length; i++) {
        if (array[i] > max) {
            max = array[i];
        }
    return max;
}
}

// 2. sum of elements (arrow function)
let findSum = (array) => {

    let sum = 0;

    for (let i = 0; i < array.length; i++) {
        sum += array[i];
    }

    return sum;
};


// 3. count odd numbers (anonymous function)
let countOdd = function(array) {

    let count = 0;

    for (let i = 0; i < array.length; i++) {

        // if remainder is not 0 → odd
        if (array[i] % 2 !== 0) {
            count++;
        }
    }

    return count;
};

function runCode() {

    let result = "";

    result += "Array: " + arr + "\n\n";
    result += "Maximum number: " + findMax(arr) + "\n";
    result += "Sum of all elements: " + findSum(arr) + "\n";
    result += "Count of odd numbers: " + countOdd(arr);

    document.getElementById("output").innerText = result;
}