const batteryBatches = [4, 5, 3, 4, 4, 6, 5];

// Code your solution here
// Normal version
// const doubledAndSummed = [1, 2, 3].reduce(function(accumulator, element){ return element * 2 + accumulator}, 0)

const totalBatteries = batteryBatches.reduce(function(accumulator, element){ return accumulator + element}, 0);

console.log(`totalBatteries: ${totalBatteries}`);

// Crazy version aka ignore:
// incomingStudents.reduce(function(showcases, student) { showcases[studentSorter.showcaseAssign(student)].push(student)}, allShowcases)
