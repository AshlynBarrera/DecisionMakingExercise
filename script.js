////DecisionMakingExercise 


//1a 
let randomNum = Math.random();
randomNum *= 6;
randomNum = Math.floor(randomNum);
randomNum ++;
console.log(randomNum); //1,2,3,4,5

//1b
if(randomNum >= 4){
    console.log( randomNum +  ' is Greater than or equal to 4');
}else if(randomNum == 3 || randomNum == 2 ){
    console.log(randomNum +  'is "Equal to 2 or 3"');
}else{
    console.log('Equal to 1');
}


//1c
if(randomNum != 3){
    console.log(+ randomNum + ' is Not equal to three.');
}




//BONUS
//4 
//5 