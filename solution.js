//1.Declare the variables int1 and int2, assign them number values and Check if the two given integer values are in the range 50 to 99 (this includes both 50 and 99). 

const int1 = 50;
const int2 = 55;

if ((int1 >= 50 && int1 <= 90) || (int2 >= 50 && int2 <= 90)) {
    console.log(true)
} else {
    console.log(false)
}
console.log('---2---')
// 2. Declare the variable int3, assign it a number value and Check if the three given integer values are in the range 50 to 99 (inclusive). Print true if one or more of them are in the range.

const int3 = 80;

if ((int1 >= 50 && int1 <= 90) || (int2 >= 50 && int2 <= 90) || (int3 >= 50 && int3 <= 90)) {
    console.log(true)
} else {
    console.log(false)
}

console.log('----------------------------------------------------------------');

//3. Check which one out of the three variables has the largest value and print it to the console. do the same with int1, int2 and int3. Then change the values of the variables to see if your conditional still works.

const a = 15;
const b = 32;
const c = 54;

console.log(Math.max(a, b, c));
console.log(Math.max(int1, int2, int3));

//4.Declare the variables str with value "thon". If the given string begins with "Py" then print the original string, otherwise add the prefix "Py" to the behinning of the string and print the result. Change the value of str to test your condition.


const task4 = `thon`;
if (task4.startsWith(`Py`)) {
    console.log(task4);
    
} else {
    console.log('Py' + task4);
    
}

// 5.Calculate the sum of int1 and int2. If the sum is in the range 50 to 80, print 65, otherwise print 80.

const sum = int1 + int2;

if (sum >= 50 && sum <= 80){
    console.log(65);
    
} else {
console.log(80);
}

//6.Declare the variables int4 and int5 Check whether their sum is 8, or whether their difference is 8. If one of these is the case, print true. otherwise print false.



const int4 = 5;
const int5 = 5;
const sum2 = int4 + int5;
const difference = int4 - int5;
const difference2 = int5 - int4;

if (sum2 === 8 || difference === 8 || difference2 ===8){
    console.log(`True`);
} else{
    console.log('False');
    
}

//7.Check whether either one of int4 or int5 is 15, or if their sum is 15. If one of these is the case, print true. otherwise print false.

if (int4 === 15 || int5 ===15 || int4 + int5 === 15){
    console.log('True');
    
} else{
    console.log('False');
    
}

//8.Check whether either one of int4 or int5 is a multiple of 7 or 11. If so, print true. otherwise print false.

if(int4 % 7 === 0 || int5 % 7 === 0 || int4 % 11 === 0 || int5 % 11 === 0){
    console.log('True');
    
} else {
    console.log('False');
    
}

//9.Calculate the sum of int4 and int5. If the two values are equal, then print triple their sum. otherwise just return their sum.

if (int4 === int5) {
    console.log(sum2 * 3);
    
} else {
    console.log(sum2);
    
}

//10. Calculate the difference between int5 and the number 19. Print double the difference if the value of int5 is greater than 19. Otherwise just print the difference.

const difference3 = int5 - 19;
const difference4 = 19 - int5;


if(difference3 > 19){
    console.log(difference3 * 2);
    
} else {
 console.log(difference3);
 }


if(difference4 > 19){
    console.log(difference4 * 2);
    
} else {
 console.log(difference4);
 }


 //BONUS CHALLENGE: Make a variable for firstName and age and give each variable values. Create an if/else statement to check whether the person's age is less than 13. If so, print "firstName is a child". If the age is equal to or more than 13 and less than 20, print "firstName is a teenager". If the person's age is equal to and more than 20 and less than 30, then print "firstName is a young adult". If none of these conditions apply, print "firstName is a adult".

 const firstName = `Izolda`;
 const age = 35;

 if( age < 13) {
    console.log(firstName, `is a child`);
    } else if (age >= 13 && age < 20) {
 console.log(firstName, 'is a teenager')
  } else if (age >= 20 && age < 30) {
 console.log(firstName, 'is a young adult')
  }  else if (age > 30) {
 console.log(firstName, 'is a adult')
  }




