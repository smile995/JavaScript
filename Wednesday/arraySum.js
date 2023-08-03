function arraySum(numbers)
{
    let sum=0;
    for (let i=0; i< numbers.length; i++){
        // let index=i;
        let sigNum=numbers[i];
        sum=sum+sigNum;
        // console.log (index, numbers[i], sum);

        
    }
   return sum;
}

let num=[12,14,25,35,14,15,27,65,25];
var totalSum=arraySum(num);
console.log(totalSum);
 