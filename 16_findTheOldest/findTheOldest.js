const findTheOldest = function (people) {

    // First test: to find the oldest
    // First I need find their age
    // So I need to access a person, get their YOD and YOB
    let oldest = people[0];
    for (let i = 0; i < people.length; i++) {
        if (people[i].yearOfDeath === undefined) {
            people[i].yearOfDeath = new Date().getFullYear();
        }
        let ageCurrent = people[i].yearOfDeath - people[i].yearOfBirth;
        let ageOldest = oldest.yearOfDeath - oldest.yearOfBirth;

        if (ageCurrent > ageOldest) {
            oldest = people[i];
        }
    }
    return oldest;
};

// Solution 2 

function getAge(birth, death) {

    if (!death) {
   return new Date().getFullYear() - birth;
}
    return death - birth;
}

function findTheOldest(people) {

return people.reduce ((oldest, currentPerson) => {
    const oldestAge = getAge(oldest.yearOfBirth, oldest.yearOfDeath);
    const currentAge = getAge (currentPerson.yearOfBirth, currentPerson.yearOfDeath);

    return oldestAge < currentAge ? currentPerson : oldest;
}); 

// Do not edit below this line
module.exports = findTheOldest;