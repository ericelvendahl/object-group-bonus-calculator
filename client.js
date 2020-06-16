const employees = [
  {
    name: "Atticus",
    employeeNumber: "2405",
    annualSalary: "47000",
    reviewRating: 3,
  },
  {
    name: "Jem",
    employeeNumber: "62347",
    annualSalary: "63500",
    reviewRating: 4,
  },
  {
    name: "Scout",
    employeeNumber: "6243",
    annualSalary: "74750",
    reviewRating: 5,
  },
  {
    name: "Robert",
    employeeNumber: "26835",
    annualSalary: "66000",
    reviewRating: 1,
  },
  {
    name: "Mayella",
    employeeNumber: "89068",
    annualSalary: "35000",
    reviewRating: 1,
  },
];

function submitClick() {
  document.getElementById("getEmployees").innerHTML = calculateBonuses(
    employees
  );
}

function calculateBonuses(employees) {
  //console.log("adsf;asdf");
  let myArray = [];
  for (let i = 0; i < employees.length; i++) {
    //console.log("Hello");
    console.log(calculateBonus(employees[i]));
    //console.log(employees[i]);
    myArray.push(employees[i]);
  }
  let tempArray = JSON.stringify(myArray);
  return tempArray;
}

// [object Object],[object Object],[object Object],[object Object],[object Object]

function calculateBonus(employee) {
  let tempEmployee = {};
  // * The `name` property should contain the employee's name.
  tempEmployee.name = employee.name;
  // * The `bonusPercentage` property should contain the bonus percentage the employee is to receive. See section below for calculation instructions.
  tempEmployee.bonusPercentage = calculateBonusPercentage(employee);
  // * The `totalCompensation` property should be the adjusted annual compensation (base annual + bonus)
  // console.log(
  //   tempEmployee.bonusPercentage,
  //   employee.annualSalary,
  //   employee.annualSalary
  // );
  tempEmployee.totalCompensation =
    tempEmployee.bonusPercentage * employee.annualSalary +
    Number(employee.annualSalary);
  // * The `totalBonus` should be the employee's total bonus rounded to the nearest dollar.
  tempEmployee.totalBonus =
    Number(employee.annualSalary) * tempEmployee.bonusPercentage;
  // tempEmployee.name = "1";
  // tempEmployee.employeeNumber = 12;
  // tempEmployee.annualSalary = 666;
  // tempEmployee.reviewRating = "Great";
  return tempEmployee;
}

function calculateBonusPercentage(employee) {
  let bonusPercentage = 0;

  //   ### Individual Bonus calculation
  // - Those who have a rating of a 2 or below should not receive a bonus.
  if (employee.reviewRating <= 2) {
    bonusPercentage = 0;
  }
  //- Those who have a rating of a 3 should receive a base bonus of 4% of their base annual income.
  if (bonusPercentage === 3) {
    bonusPercentage = 1.04;
  }
  // - Those who have a rating of a 4 should receive a base bonus of 6% of their base annual income.
  if (bonusPercentage === 4) {
    bonusPercentage = 1.06;
  }
  // - Those who have a rating of a 5 should receive a base bonus of 10% of their base annual income.
  if (bonusPercentage === 5) {
    bonusPercentage = 1.1;
  }
  // - If their employee number is 4 digits long, this means they have been with the company for longer than 15 years,
  // and should receive an additional 5%.
  if (employee.employeeNumber > 999) {
    bonusPercentage += 0.05;
  }
  // - However, if their annual income is greater than $65,000, they should have their bonus adjusted down 1%.
  // - No bonus can be above 13% or below 0% total.
  if (employee.annualSalary > 65000) {
    bonusPercentage -= 0.01;
    if (bonusPercentage <= 0) {
      bonusPercentage = 0;
    }
  }
  return bonusPercentage;
}
// YOU SHOULD NOT NEED TO CHANGE ANYTHING ABOVE THIS POINT

// Take small steps! Don't write a for loop and two functions that do all of the calculations right away.
// This problem is massive! Break the problem down. Use the debugger.
// What is the fewest lines of code I can write and test to get just a little closer?

// This is not a race. Everyone on your team should understand what is happening.
// Ask questions when you don't.

console.log(calculateBonuses(employees));
