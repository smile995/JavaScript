// convert inches to feet using user define function
function inchesToFeet(inches)
{
    const yourHeight=inches/12;
    return yourHeight;
}
const yourHeightInFeet=inchesToFeet(145);
const twoFixed=yourHeightInFeet.toFixed(2);
console.log('Your height in feet: ',twoFixed);