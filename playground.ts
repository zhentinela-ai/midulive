// let x: number; //* Explicitly declares x as a number type
// let y = 1; //* Implicitly declares y as a number type
// let z; //* Declares z without initializing itlet x

// enum ContractStatus {
//   Permanent = 1, // 1
//   Temp, // 2
//   Apprentice, // 3
// }

// const employeeStatus: ContractStatus = ContractStatus.Temp;
// console.log(employeeStatus);

// console.log(ContractStatus[employeeStatus]);

let randomValue: unknown = 10;
randomValue = true;
randomValue = "Mateo";

(randomValue as string).toUpperCase();
(<string>randomValue).toUpperCase();

randomValue = true;
randomValue = "Mateo";

if (typeof randomValue === "string") {
  console.log((randomValue as string).toUpperCase()); //* Returns MATEO to the console.
} else {
  console.log("Error - A string was expected here."); //* Returns an error message.
}

// console.log(randomValue.name);  // Error: Object is of type unknown
// randomValue();                  // Error: Object is of type unknown
// randomValue.toUpperCase();      // Error: Object is of type unknown
