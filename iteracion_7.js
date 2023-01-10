// ! Iteración #7: Reduce

// 7.1 Dado el siguiente array, haz una suma de todos las notas de los examenes de 
// los alumnos usando la función .reduce().

const exams = [
    {name: 'Yuyu Cabeza Crack', score: 5}, 
    {name: 'Maria Aranda Jimenez', score: 1}, 
    {name: 'Cristóbal Martínez Lorenzo', score: 6}, 
    {name: 'Mercedez Regrera Brito', score: 7},
    {name: 'Pamela Anderson', score: 3},
    {name: 'Enrique Perez Lijó', score: 6},
    {name: 'Pedro Benitez Pacheco', score: 8},
    {name: 'Ayumi Hamasaki', score: 4},
    {name: 'Robert Kiyosaki', score: 2},
    {name: 'Keanu Reeves', score: 10}
];

const additionExams = exams.reduce((acc,exam)=>exam.score + acc,0);
console.log(additionExams);

// 7.2 Dado el mismo array, haz una suma de todos las notas de los examenes de los 
// alumnos que esten aprobados usando la función .reduce().

const addition5 = exams.reduce((acc,exam)=>{
    if (exam.score >= 5){
        return exam.score + acc
    } 
        return acc;
    
},0);
console.log(addition5);

// 7.3 Dado el mismo array, haz la media de las notas de todos los examenes .reduce().

const addition6 = exams.reduce((acc,exam)=>{
     return exam.score + acc 
},0);
const addition6New =addition6 / exams.length;
console.log(addition6New);