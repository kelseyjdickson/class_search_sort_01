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
        let mid = Math.floor((start + end)/2); // Find the middle index
        if(start > end){ // Check if the start index is greater than the end index
            return -1; // Return -1
        }
        if(valueToFind === arr[mid]){ // Check value of middle index and see if it's equal to the value we're trying to find
            return mid; // Return the middle index
        } else if(valueToFind > arr[mid]){ // If the value we're trying to find is less than the value that is in the position of the middle index
            return this.binaryRecursive(arr, valueToFind, mid+1, end); // Recursive call setting new start index and end index values
        } else if(valueToFind < arr[mid]){ // If the value we're trying to find is greater than the value that is in the position of the middle index 
            return this.binaryRecursive(arr, valueToFind, start, mid-1); // Recursive call setting new start index and end index values
        }
        // console.log("Current array elements: ", arr.slice(startIndex, endIndex+1)); // Helpful printing to see what the current array elements are in this method call

    },
    binaryIterative:function(arr, valueToFind){
        // console.log("Current array elements: ", arr.slice(startIndex, endIndex+1)); // Helpful printing to see what the current array elements are in this method call
        let start = 0; // Initially set start value
        let end = arr.length-1; // Initially set end value to the last index in the array
        while(start <= end){ // While the start value is less than or equal to the end value
            let mid = Math.floor((start + end)/2); // Find the middle index
            if(valueToFind === arr[mid]){ // Check value of the middle index and see if it's equal to the value we're trying to find
                return mid; // Return the middle index
            } else if(valueToFind > arr[mid]){ // If the value we're trying to find is greater than the value that is in the position of the middle index 
                start = mid+1; // Set start index to the middle index plus one
            } else if(valueToFind < arr[mid]){ // Otherwise
                end = mid-1; // Set end index to the middle index minus one
            }
        }
        return -1; // Return -1

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