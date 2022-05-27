//  employee app

let newusersNames = [];
let result = [];
let Avgsalary;
let MaxinfoSalary = [];
let MininfoSalary = [];

let salaryPerHour;
let name = document.getElementById('name');
let family = document.getElementById('family');
console.log(name.value);
console.log(family);

let i;

function aDD(name, family, hourPerMonth, salaryPerHour) {
  hourPerMonth = 0;
  switch (hourPerMonth) {
    case hourPerMonth < 160:
      let nameInDb = name;
      let familyInDb = family;
      newusersNames.push(name);
      console.log(newusersNames);
      break;
    case hourPerMonth > 160:
      console.log(
        `error : Dear ${name} ${family} you have over 160 hours in month !!`
      );
      break;
  }
  return newusersNames;
}
console.log(name);
console.log(family);

// let res = aDD('ali', 'rezayi', 180, 5);
// console.log(res);

//---------------------------------
let newName;
function reMove(newName , family){  // this is check the newname and remove it
  
  return (newusersNames.indexOf(newName) !=  newusersNames.push(newName));
}

function check(){   // this is check the new name in databse
  if(newName != newusersNames);
  return {};
};
check('ali');

function findMaxSalary(){  // this is find max salary
    return Math.max(salaryPerHour);
};

function findMinSalary(){   // this is find max salary
  return Math.min(salaryPerHour);
};

function SalaryInfo(nameInDb, familyInDb ){ // this is salary info that shows above or below average salary

  return {above : [{name : nameInDb} , {salary : MaxinfoSalary}] , below: [{name : nameInDb} ,{salary : MininfoSalary} ]}
}



// function employeeInfoSalary (min, max){
//   for( let i =0 ; i < MininfoSalary.lenght ; i++ ){
//     MininfoSalary[i].salaryPerHour * MininfoSalary[i].salaryPerHour >= min && MininfoSalary[i].salaryPerHour * MininfoSalary[i].salaryPerHour >= min;
//   }
// } 
// reMove.push(MininfoSalary[i]);
// reMove.splice(i);
// reMove([i]);