function sumCalc(array) {
    var sum = 0;
    for (let i = 0; i < array.length; i++) {
        var element = array[i];
        sum = sum + element;
    }
    return sum;

}


function oddSum(array){
    var oddArray=[];
    for (let i=0; i<array.length;i++){
        var element=array[i];
        if(element%2!==0){
            oddArray.push(element);
        }
    }
    return oddArray;
}
var numbers = [12, 52,42,62,63,55,45,21,95];
var odd_array=oddSum(numbers);
console.log(odd_array);
var total = sumCalc(odd_array);
console.log('total summation of numbers: ', total);
