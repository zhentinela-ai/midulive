"use strict";
let x; //* Explicitly declares x as a number type
let y = 1; //* Implicitly declares y as a number type
let z; //* Declares z without initializing itlet x
var ContractStatus;
(function (ContractStatus) {
    ContractStatus[ContractStatus["Permanent"] = 1] = "Permanent";
    ContractStatus[ContractStatus["Temp"] = 2] = "Temp";
    ContractStatus[ContractStatus["Apprentice"] = 3] = "Apprentice";
})(ContractStatus || (ContractStatus = {}));
const employeeStatus = ContractStatus.Temp;
console.log(employeeStatus);
console.log(ContractStatus[employeeStatus]);
let randomValue = 10;
randomValue = true;
randomValue = "Mateo";
randomValue.toUpperCase();
randomValue.toUpperCase();
randomValue = true;
randomValue = "Mateo";
if (typeof randomValue === "string") {
    console.log(randomValue.toUpperCase()); //* Returns MATEO to the console.
}
else {
    console.log("Error - A string was expected here."); //* Returns an error message.
}
// console.log(randomValue.name);  // Error: Object is of type unknown
// randomValue();                  // Error: Object is of type unknown
// randomValue.toUpperCase();      // Error: Object is of type unknown
