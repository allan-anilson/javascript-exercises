const palindromes = function (str) {
    str = str.replaceAll(" ","");
    str = str.toLowerCase();
    const length = str.length;
    for(let i = 0; i<length/2; i++){
        if(str[i]!=str[length-i-1]){
            return false;
        }
    }
    return true;
};

// Do not edit below this line
module.exports = palindromes;
