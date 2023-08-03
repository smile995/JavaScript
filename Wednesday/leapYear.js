function leapYear(year)
{
    if(year%400===0) {
        return true;
    }
    else if (year%100===0){
        return false;
    }
    else if (year%4===0){
        return true;
    }
    else{
        return false;
    }
}
var myYear=leapYear(2016);
console.log (myYear);