
// Set numList to any number and the page will alert you, starting from 0 all the way up to whatever number numList is set to
let numList = 20;


// for every number in numList, alert the user if even or odd
for(let i =0; i <= numList; i++) {

    // if number divided by 2 has no remainder, then it's even
    if(i % 2 === 0) {
        alert(`${i} is even`);
    }


    // if number dividen by 2 has a remainder, then it's odd
    else {
        alert(`${i} is odd`);
    }
}