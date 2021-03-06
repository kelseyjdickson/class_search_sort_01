let obj = {
    valueToSearchFor: 200,
    sortedArr: [10, 50, 200, 230, 400, 530, 720],
    unSortedArr: [1000, 50, 200, 850, 430, 230],
    init:function(){
        //// DO NOT NEED TO EDIT ////
        let keys = Object.keys(this);
        let terminalArgs = process.argv.slice(2);
        let methodNames = keys.slice(keys.indexOf("init")+1);
        let commands = {};
        methodNames.forEach((methodName)=>{
            let capitalLetters = "";
            for(let i = 0; i < methodName.length; i++){
                let letter = methodName.charAt(i);
                if(letter === letter.toUpperCase()){
                    capitalLetters+=letter.toLowerCase();
                }
            }
            commands[methodName[0] + capitalLetters] = methodName;
        })
        let result;
        let methodToRun = commands[terminalArgs[0]];
        if(methodToRun){
            result = this[methodToRun](this.sortedArr, terminalArgs[1] ? Number(terminalArgs[1]) : this.valueToSearchFor);
        } else {
            let methodCommandList = Object.entries(commands).map((method)=>`\n(${method[0]}) - ${method[1]}`);
            result = `Please provide an abbreviation as a terminal argument:` + methodCommandList;
        }
        console.log(result);
        //// DO NOT NEED TO EDIT ////
    },
    binaryRecursive:function(arr, valueToFind, start=0, end=arr.length-1){
        // Find the middle index
        // Check if the start index is greater than the end index
        // Return -1
        
        // Check value of middle index and see if it's equal to the value we're trying to find
        // Return the middle index
        // If the value we're trying to find is less than the value that is in the position of the middle index
        // Recursive call setting new start index and end index values
        // If the value we're trying to find is greater than the value that is in the position of the middle index 
        // Recursive call setting new start index and end index values

        // console.log("Current array elements: ", arr.slice(startIndex, endIndex+1)); // Helpful printing to see what the current array elements are in this method call

    },
    binaryIterative:function(arr, valueToFind){
        // Initially set start value
        // Initially set end value to the last index in the array
        // While the start value is less than or equal to the end value
        // Find the middle index
        // Check value of the middle index and see if it's equal to the value we're trying to find
        // Return the middle index
        // If the value we're trying to find is greater than the value that is in the position of the middle index 
        // Set start index to the middle index plus one
        // Otherwise
        // Set end index to the middle index minus one
        // Return -1
    },
    exponentialIterative:function(){

    },
    exponentialRecursive:function(){

    },
    linearRecursive:function(){

    },
    linearIterative:function(){

    },
    jumpIterative:function(){

    },
    interpolationIterative:function() {

    },
    interpolationRecursive:function() {

    }
}
require.main === module && obj.init();
module.exports = obj;