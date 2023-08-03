// convert miles to kilometers using user defined function
function kilometerConverter(miles)
{
    var kilo=1.6093;
    const kilometer=miles*kilo;
    return kilometer;
}
const totalMiles=245;
const totalKilometer=kilometerConverter(totalMiles);
const kiloFixed=totalKilometer.toFixed(2);
console.log ('the arouned area in kilometers:',kiloFixed);