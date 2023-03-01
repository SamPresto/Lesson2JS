
// can change petChoices, the order of inputs determines which choice is first second and third
const petChoices = ["Dogs", "Hamsters", "Pigs"];

for(let i = 0; i <= petChoices.length -1; i++) {
    // first choice
    if(i == 0) {
        alert(`My 1st choice of pet is ${petChoices[i]}`);
    }
    // second choice
    if(i == 1) {
        alert(`My 2nd choice of pet is ${petChoices[i]}`);
    }
    // third choice
    if(i == 2) {
        alert(`My 3rd choice of pet is ${petChoices[i]}`);
    }
}