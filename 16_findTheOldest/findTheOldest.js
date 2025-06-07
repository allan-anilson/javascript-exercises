const findTheOldest = function(arr) {
    return arr.reduce((oldest,people)=>{
        const age = people.yearOfDeath - people.yearOfBirth;

        const oldestAge = oldest.yearOfDeath-oldest.yearOfBirth;

        return age>oldestAge?people:oldest


    })
};

// Do not edit below this line
module.exports = findTheOldest;
