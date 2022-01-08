/**
 * @param {number[]} seats
 * @param {number[]} students
 * @return {number}
 */
 var minMovesToSeat = function(seats, students) {
    students.sort((a, b)=>a - b);
    return seats.sort((a, b)=>a - b).reduce((acc, cur, ind)=>{
        return acc + Math.abs(cur - students[ind]);
    }, 0);
};