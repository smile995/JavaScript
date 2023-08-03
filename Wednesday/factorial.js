// make a factorial function to calculate the factorial
function factorial(number){
    var multiplication=1;
    for (let i=1; i<=number;i++)
    {
        multiplication=multiplication*i;
    }
    return multiplication;
}
var factorialValue=9;
let fact=factorial(factorialValue);
console.log(fact);




// making another factorial by using reverse for loop that means value will be discrese from numbers one by one


function facto(number)
{
    var result=1;
    for (let i= number; i>=1; i--){
        result=result*i;
    }
    return result;
}
var num=9;
var factorial= facto(num);
console.log(factorial);
