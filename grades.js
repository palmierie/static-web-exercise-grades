var scores = [82, 71, 95, 55, 98, 69, 72, 78, 84, 64, 58, 87];

/*
A score of 50-60 is an F
A score of 61-70 is a D
A score of 71-80 is a C
A score of 81-90 is a B
A score of 91-100 is an A
*/

var gradeF = [];
var gradeD = [];
var gradeC = [];
var gradeB = [];
var gradeA = [];


for (var i = 0; i < scores.length; i++) {
  if (scores[i] < 61) {
    gradeF.push(scores[i]);

  } else if(scores[i] < 71){
    gradeD.push(scores[i]);

  } else if(scores[i] < 81){
    gradeC.push(scores[i]);

  } else if (scores[i] < 91){
    gradeB.push(scores[i]);

  } else{
    gradeA.push(scores[i]);
  }
}

console.log('The highest grade is a ', Math.max.apply(Math,scores));
console.log('The lowest grade is a ', Math.min.apply(Math,scores));
console.log(gradeA.length, "A's");
console.log(gradeB.length, "B's");
console.log(gradeC.length, "C's");
console.log(gradeD.length, "D's");
console.log(gradeF.length, "F's");