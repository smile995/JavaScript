function sum (a,b)
{
    console.log (a,b);
    var sum=a+b;
    // console.log('your sum is:',sum);
    return sum;
}
var total=sum(10,20);
console.log('your total is :', total);


// make a function to find the quantity of singara according to your given money
function singara(taka)
{
    var singaraPrice=5;
    var quantity=taka/singaraPrice;
    return quantity;
}
var my_valance=150;
var you_got= singara(my_valance);
console.log('you will got the quantity of singara is:',you_got);