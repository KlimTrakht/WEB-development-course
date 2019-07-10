//function returning elem class; 
// classOf([]) === "Array", classOf('') === "String", classOf(null) === "Null" и т. д.
function classOf(elem) {
    return Object.prototype.toString.call(elem).slice(8, -1);
};


function calculateSquare(n) {
    //checking whether "n" is an integer figure
    const check = Number.isInteger(n) && classOf(n) == "Number" && n >= 1; 
    
    return check ? Math.pow(n, 2) + Math.pow(n - 1, 2) : "Param must be integer and bigger than 0";
}