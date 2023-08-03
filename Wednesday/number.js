// check even or odd using user defined function
function even_odd_checker(number)
{
    var reminder=number%2;
    if(reminder===0){
        return true;
    }
    else{
        return false;
    }
}
var decimal=30;
const yourNum=even_odd_checker(decimal);
console.log(yourNum);