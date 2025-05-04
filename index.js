function greeting(goodMorning, Michael, prof) {
let greeting1 = goodMorning + ' ' + Michael + ' ' + Prof; // Classical concatenation

let greeting2 = `${goodMorning} ${Michael} ${Prof}`; // Template literal

Return [greeting1, greeting2]

console.log(greeting1, greeting2)
}


let num1 = 20;
let num2 = 5;
function mathOperations(num1, num2) {
    const sum = num1 + num2;
    const product = num1 * num2;
    const difference = num1 - num2;
    const division = num2 !== 0 ? num1 / num2 : null;
    const isEven = sum % 2 === 0;

    console.log(mathOperations(20, 5))

    return{
        sum: 25, 
        product: 100,
        difference: 15,
        division: 4,
        iseven: false (1)
    };
}


function categoriseAge(age) {
    if(age < 13) {
        return 'child';
    }
    else if (age >= 13 && age <= 19) {
        return 'Teenager';
    } 
    else if (age >= 20 && age <= 64) {
        return 'Adult';
    } 
    else if (age >= 65) {
        return 'Elderly';
    } 
}

console.log(categoriseAge(80)); // Elderly
console.log(categoriseAge(15)); // Tenager
console.log(categoriseAge(40)); // Adult
console.log(categoriseAge(9)); // Child


function getDayType(day) {
    switch(day) {
        case 1:
            console.log('Monday');
        case 2:
            console.log('Tuesday');
        case 3:
            console.log('Wednesday');
        case 4:
            console.log('Thursday');
        case 5:
            console.log('Friday');
            return "Workday";
        case 6:
            console.log('Saturday');
        case 7:
            console.log('Sunday');
            return "Weekend";
        default:
            return "Invalid day.";
    }
}


function translateColor(englishColor) {
    const colormap = {
        red: "rosso",
        blue: "blu",
        green: "verde",
        yellow: "giallo",
        black: "nero",
        white: "bianc0",
        purple: "viola"
    };

    const lowerCaseColor = englishColor.tolowerCase();
    return colormap [lowerCaseColor] || "color not found.";

    console.log(translateColor(red))
    console.log(translateColor(green))
    console.log(translateColor(purple))
}


let number = " 20, 5, 30";
function isInRange(number, min, max) {
    return number >= min && number <= max;
  }
  
  function isOutOfRange(number, min, max) {
    return number < min || number > max;
  }

console.log("isInRange results:");
console.log(isInRange(5, 20, 30));   // false
console.log(isInRange(20, 5, 30));   // true
console.log(isInRange(30, 5, 20));   // false

console.log("isOutOfRange results:");
console.log(isOutOfRange(5, 20, 30));   // true
console.log(isOutOfRange(20, 5, 30));   // false
console.log(isOutOfRange(30, 5, 20));   // true


const n = 5;
function double(n) {
    return n * 2;
  }
  
  function square(n) {
    return n * n;
  }
  
  function doubleAndSquare(n) {
    return square(double(n));
  }
  

console.log(doubleAndSquare(5));


const processArray = " 2, 3, 6, 7, 5 ";
function processArray(numbers) {
    let result = [];

    for (let i = 0; i < numbers.length; i++) {
        if (numbers[i] % 2 === 0) {
            result.push(numbers[i] * 2);
        } else {
            result.push(numbers[i] + 1);
        }
    }

    return result;
}
console.log(processArray([2, 3, 6, 7, 5])); 



let filterNumbers =  " 5, 7, 8, 11, 15 ";
function filterNumbers(numbers, min, max) {
    let filtered = [];
  
    for (let i = 0; i < numbers.length; i++) {
      if (numbers[i] >= min && numbers[i] <= max) {
        filtered.push(numbers[i]);
      }
    }
  
    return filtered;
  }
  
  const result = filterNumbers([5, 7, 8, 11, 15], 7, 11);
  console.log(result); 


  // 1. Create and return a student object
function createStudent(firstName, lastName, grade) {
    return {
        firstName: firstName,
        lastName: lastName,
        grade: grade
    };
}

// 2. Add a student to the array
function addStudent(students, firstName, lastName, grade) {
    const student = createStudent(firstName, lastName, grade);
    students.push(student);
}

// 3. Calculate the average of the grades
function getAverageGrade(students) {
    if (students.length === 0) return 0;
    const total = students.reduce((sum, student) => sum + student.grade, 0);
    return parseFloat((total / students.length).toFixed(2));
}

// 4. Find the student with the highest grade
function getTopStudent(students) {
    if (students.length === 0) return null;
    return students.reduce((top, student) => student.grade > top.grade ? student : top);
}

// 5. Filter students with grade >= minGrade
function getStudentsByGrade(students, minGrade) {
    return students.filter(student => student.grade >= minGrade);
} 
const students = [];
addStudent(students, "Mario", "Rossi", 85);
addStudent(students, "Luigi", "Verdi", 90);
addStudent(students, "Anna", "Bianchi", 78);

console.log(getAverageGrade(students)); 
// Output: 84.33

console.log(getTopStudent(students)); 
// Output: { firstName: "Luigi", lastName: "Verdi", grade: 90 }

console.log(getStudentsByGrade(students, 80)); 
// Output: 
//   { firstName: "Mario", lastName: "Rossi", grade: 85 },
//   { firstName: "Luigi", lastName: "Verdi", grade: 90 }
// 