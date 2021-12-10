

//creating a function to count the minimum cost for reaching the top of the stairs
const MinimumCost = (InputArray) => {
    
    // creating a variable for the inputted array length
    let StairsLength = InputArray.length
    //control flow for default situation with only 1 array member
    if(StairsLength == 1) {
        return InputArray[0];
    };
    
    //use a for loop to find the cost of climbing the stairs
    for(let i = 2; i < StairsLength; i ++) {
        //using the Math.min function to determine the minimum cost
        InputArray[i] = Math.min(InputArray[i - 1], InputArray [i - 2]) + InputArray [i];

    };
    //returning the minimum cost value
    return Math.min(InputArray[StairsLength - 1], InputArray [StairsLength - 2]);

};
//Driver to test/run the function
let Stairs = [[0], [0, 2, 2, 1], [0, 2, 3, 2], [10, 15, 20], [0, 0, 0, 0, 0, 0], [1, 2, 3, 4, 5]];

for(let i = 0; i < Stairs.length; i ++) {
    console.log('--------------------------------------------------------------')
    console.log(`The minimum cost needed to climb these set of stairs is ${MinimumCost(Stairs[i])}.`);
};

console.log('--------------------------------------------------------------')

