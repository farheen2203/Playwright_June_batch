function checkNumberType(num) {
    result="";
    if (num > 0) 
        {
        result="The number is positive."
       
        } 
    else if (num < 0) {
        result="The number is negative."
    } else {
        result="The number is zero."
    }
    return result;
}
console.log(checkNumberType(5));
console.log(checkNumberType(-3));
console.log(checkNumberType(0));