
/*
let me = 'usman';
      if(me==='usman')alert('javascript is fun');

      console.log(10+20+70);
      console.log('My Love Myself')
      alert('Muhammad Usman')
      console.log('Muhammad Usman');
      console.log(50);
      let MyName="Maani Bhai is Great";
      console.log(MyName);
      console.log(MyName);
      console.log(MyName);
      console.log(MyName);
      console.log(MyName);
      console.log(MyName);

      let myLove_Afair="no Afair";
      console.log(myLove_Afair);
      let $noOfRelations="000";
      console.log($noOfRelations);
      let PI=3.1415;
      console.log(PI);
      let firstJob="programmer";
      let myCurrentJob="teacher";
      console.log(firstJob);
      console.log(myCurrentJob);

      let job1="programmer";
      let job2="teacher";

alert('hi Usman');
let age=31;
age=35;

const birthday=1992;
//birthday=1990;



var joob='programmer';
const jooob ='teacher'
const lastName='myself usman';
console.log(lastName);




const now='2037';
const ageJonas=now-1991;
const ageSara=now-2018;
console.log(ageJonas,ageSara);
//2**3 means 2 to the power of 3=2+2+2
console.log(ageJonas *2,ageJonas /10,2**3);
const firstName='Muhammad ';
const lastNamee='Usman';
console.log(firstName+lastName);


//assignment operators
let x=10+5;
x+=10;//x=x+10
x*=4//x=x*4 =100
x++;
x--;
console.log(x);

//comparitve operators
console.log(ageJonas>ageSara);//<,>,<=,>=
console.log(ageSara>=18);



console.log(now-1991>now-2018);
console.log(25-10-5);

let b,y;
b = y = 25 - 10 - 5;//x=y=10
console.log(b,y);

const averageAge=(ageJonas + ageSara) / 2;
console.log(ageJonas,ageSara,averageAge);

//coding challenge no#1
const massMark=78;
const heightMark=1.69;
const massJohn=92
const heightJohn=1.95;

const BMIMark=massMark/heightMark**2;
const BMIJohn=massJohn/(heightJohn*heightJohn);
console.log(BMIMark,BMIJohn);

const markHeigherBMI=BMIMark>BMIJohn;
console.log(BMIMark,BMIJohn,markHeigherBMI);




const myName='Muhammad Usman';
const myjob='devolper';
const birthDay=2002;
let year=2022-birthDay;

const usman="i'm "+ myName +',a '+ myjob + ' and ' + 'my age is ' + year +'.';
console.log(usman);

const mee=`i am ${myName} ,a ${myjob} and ${year} years old `;
console.log(mee);

//console.log(`i am a silent boy.`);

console.log('string \n\
with\n\
multiple\n\
lines');

console.log(`string
with
multiple
lines`);



const agee=12;
const isOldEnough=agee>=18;

if(isOldEnough){
console.log('sara can start driving license🚗.');
}
else{
  const yearsLeft=18-agee;
  console.log(`sara is too young.wait another ${yearsLeft} years`);
}

const birthYear=2022;
const c='st century';
let century;
if(birthYear<=2000){
  century=20;
}else{
  century=21;
}
console.log(century,c);



let meee='Usman Bhatti';
let place='Yazman';
let work='Web Devolper';
const years=2002;
let myAge=2022-years;
let education='FSc Pre-Engineering';
const aboutMyself=`Myself, ${meee}, ${myAge} years old belongs to ${place},have done ${education} and currently works as ${work}`;
console.log(aboutMyself);
console.log('Good Luck...😍🥰😘')


/*
//coding challenge no# 2

const massMark=78;
const heightMark=1.69;
const massJohn=92
const heightJohn=1.95;

const BMIMark=massMark/heightMark**2;
const BMIJohn=massJohn/(heightJohn*heightJohn);
console.log(BMIMark,BMIJohn);

if (BMIMark > BMIJohn){
  console.log("Mark's BMI is higher then John's!");
}else{
  console.log("John's BMI is higher then Mark's!")
}
*/


/*
//Type COnversion
const inputYear='1990';
console.log(Number(inputYear),inputYear);
console.log(Number(inputYear)+18);

console.log(Number('jonas'));
console.log(typeof NaN);
console.log(String(23),23);

//Type coerction
console.log('I am ' + 23 + ' years old')

console.log('I am ' + '23' + ' years old')

//Falsy Values:
// 1: 0
// 2: ' '
// 3: undefined
// 4: null
// 5: False itself




console.log(Boolean(0));
console.log(Boolean(undefined));
console.log(Boolean('jonas'));
console.log(Boolean({}));
console.log(Boolean(''));

const money=110;
if (money){
  console.log("Don't spend it all")
}else{
  console.log("You should get a job")
}

let height="";
if (height){
  console.log('YAY! height is Defiend')
}else{
  console.log("height is UNDEFINED")
}



//Double And Triple Equality signs 

//const age = 18;
//only means 18 = 18 and not means 18 = '18'



if (age===18){
  console.log("You just became an Adult!","(strict)")
}

//means it wil work in condition 18 = '18'
if (age=='18'){
  console.log("You just became an Adult!","(loose)")
}

//To take input value  from user in any web page use "promt"
const myNamee = prompt("What's your Name?"); 
console.log(myNamee);
console.log(typeof myNamee);



const favouriteNumber = Number(prompt("What's your favourite number"));



console.log(favouriteNumber);
console.log(typeof favouriteNumber);

//(5471 is string '5471' = 5471) loose equality operator
if(favouriteNumber == 5471){
  console.log("'5471' is an amzing number")
}




//('5471' which is a string and not equal to 5471 which is a number) Strict Equality Opearator
if(favouriteNumber === 5471){
  console.log("'5471' is an amzing number")
}else if(favouriteNumber===547){
  console.log("it's also a cool number")
}else if(favouriteNumber===125471){
  console.log("it's a wonderful number")
}else if(favouriteNumber===12547){
  console.log("it's super cool")
}else{
 console.log("irrelvent number")
}

if(favouriteNumber!==5471)console.log("But why not 5471")




//Booleab Logic
const driversLicense = true; //A
const driversVision = true; //B

console.log(driversLicense && driversVision);
console.log(driversLicense || driversVision);
console.log(!driversLicense)

const shouldDrive = driversLicense &&
driversVision ;

// if(shouldDrive){
//   console.log("Sara is able to drive")
// }else{
//   console.log("soemone else can drive...")
// }

const isTired = false;
console.log(driversLicense && driversVision && isTired);

if(driversLicense && driversVision && !isTired){
  console.log("Sara is able to drive")
}else{
  console.log("soemone else can drive...")
}
*/


/*
// //Coding Chellenge #3
const scoreDolphin = (96 + 108 + 89) / 3;
const scoreKoalas = (88 + 91 + 110) / 3;
console.log(scoreDolphin,scoreKoalas)

if(scoreDolphin > scoreKoalas){
console.log("Dolphin wins the trophy")
}else if(scoreKoalas > scoreDolphin){
   onsole.log("Koalas wins the tropy")
}else if(scoreDolphin === scoreKoalas){
   console.log("Match Equalls")
 }


// BONUS 1

const scoreDolphin = (97 + 112 + 101) / 3;
const scoreKoalas = (109 + 95 + 123) / 3;

console.log(scoreDolphin,scoreKoalas)

if(scoreDolphin > scoreKoalas && scoreDolphin >= 100){
   console.log("Dolphin wins the trophy")
 }else if(scoreKoalas > scoreDolphin && scoreKoalas>= 100){
   console.log("Koalas wins the tropy")
 }else if(scoreDolphin === scoreKoalas){
   console.log("Match Equalls")
}
*/



/*
// SWITCH Statement

const day = prompt("what is the day");



switch(day){
  case'monday': //day === monday
  console.log("plan course structure")
  console.log("go to code meet up")
  break;
  case'tuesday':
  console.log("prepare theory videos")
  break;
  case'wednesday':
  case'thursday':
  console.log("write code examples")
  break;
  case'friday':
  console.log("i record videos")
  break;
  case'saturday':
  case'sunday':
  console.log("enjoy the weekend...")
  break;
  default:
    console.log("not a valid day" )
}


if(day==='monday'){
  console.log("plan course structure")
  console.log("go to code meet up")
}else if(day==='tuesday'){
  console.log("prepare theory videos")
}else if(day==='wednesday'){
  console.log("prepare theory videos")
}else if(day==='thursday'){
  console.log("write code examples")
}else if(day==='friday'){
  console.log("i record videos")
}else if(day==='saturday'){
  console.log("enjoy the weekend...")
}else if(day==='sunday'){
  console.log("enjoy the weekend...")
}else{
  console.log("not a valid day" )
}




//27* Statements And Expressions

3 + 4
1991
true && false && !false

if (23>10){
  const str= '23 is greater';
}

//Exmale
const i='usman';
console.log(`I'am ${2037-2002} years old ${i}`)
*/



//28* The Conditional (Ternary) Operator

// const age = prompt("what's your age")

// age >= 18 ? console.log("You are allowed to drink Wine🍷") : console.log("You can drink Water only💧");


/*
// *** PRACTICE ***

let saving = prompt("Enter your saving amount");
let amount='20000';

switch(saving){
case'20000':
console.log("finally i can buy oppo A1k.")
break;
case'25000':
console.log("Now you can buy vivo s1.")
break;
case'30000':
console.log("Now can buy RedmE note 10.")
break;
case'35000':
console.log("BE HAPPY! You can buy 'RedmE Note 10 Pro' or 'vivo s1 Pro'")
break;
}

// CCCOOODDDEEE OOOKKK !!!
*/



//29* CODING CHALLENGE # 4
const bill = 275;
const tip = bill <= 300 && bill >= 50 ? bill * 0.15 : bill * 0.15 ;
console.log(`The bill was ${bill}, the tip was ${tip},and the total value ${bill + tip}`);
 
 
 
//30* Javascript Releases : ES5 , ES6 + AND ES Next


//   _____ SECTION 3 : JAVASCRIPT FUNDAMENTALS PART - 2 _____

// ...INTRO TO SECTION ...


//32* Activating Strict Mode

