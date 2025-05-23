const reverseString = function(str) {
    let len = str.length;
    let arr = str.split("");
    for(let i = 0; i<len/2; i++){
        let temp = arr[i];
        arr[i] = arr[len-i-1];
        arr[len-i-1] = temp;
        
    }
    return arr.join("");
};

// Do not edit below this line
module.exports = reverseString;
