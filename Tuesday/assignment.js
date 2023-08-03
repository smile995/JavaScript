function avarageMark(assignment1, assignment2, assignment3)
{
    const totalMark=assignment1+assignment2+assignment3;
    const totalAassignment=3;
    const avarage=totalMark/totalAassignment;
    return avarage;
}
var ava=avarageMark(60,56,47);
var fixed=ava.toFixed(2);
console.log('your avarage mark of assignment:', fixed);
