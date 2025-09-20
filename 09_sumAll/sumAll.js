const sumAll = function(first, last) {
    if (first < 0 || last < 0 || typeof first !== "number" || typeof last !== "number" || !Number.isInteger(first) || !Number.isInteger(last)) {
        return 'ERROR';
    }
    if (first > last) {
        let temp = 0;
        temp = last;
        last = first;
        first = temp;
    }
    let answer = 0;
for (let i = first; i <= last; i++) {

    answer += i;
    
}
return answer;
};


sumThem = sumAll(1, 11);
console.log(sumThem);

// Do not edit below this line
module.exports = sumAll;


// I need to add e.g function(1, 5) 
// I need to get 1 + 2 + 3 + 4 + 5
// so 1 to 5 inclusive of them 1,5
//