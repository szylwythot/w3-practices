function addTwoIntegers(firstInteger, secondInteger){
    // console.log(firstInteger + secondInteger);
    // return firstInteger + secondInteger;
    // return "hello";
    if(typeof(firstInteger) === "number" && typeof(secondInteger) === "number"){
        return firstInteger + secondInteger
    } else{
        return "One of the arguments is not a number, and the functuin is not applicable."
    }
}

console.log(addTwoIntegers(12, "13") );
console.log(addTwoIntegers(1920, 85) );
console.log(0==="0");