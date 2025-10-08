const teachers = [
  'Nathan',
  'Ed',
  'Fabio',
  'Phil',
  'Carlo',
  'Lewis',
  'Luca'
]; // NON MODIFICARE QUESTA VARIABILE

// 1. Inverti l'ordine degli insegnanti nell'array teachers
// e salva il risultato nella variabile reversedTeachers
console.log(teachers);
const reversedTeachers = [];
for(let i = teachers.length - 1; i >= 0; i--){
  const teacher = teachers[i];
  reversedTeachers.push(teacher); 
}
console.log(reversedTeachers);

// 2. Crea un nuovo array chiamato 'longNames' che contenga solo gli insegnanti
// con un nome di lunghezza maggiore o uguale a 5 caratteri
for(let i = 0; i < teachers.length; i++){
  if(teachers[i].length >= 5){
    const longNames = teachers[i];
    console.log(`Nome con lunghezza 5 o maggiore: ${longNames}`);   
  }
}

// 3. Rimuovi 'Ed' dall'array teachers
teachers.splice(1, 1);
console.log(teachers);

// 4. Verifica se 'Fabio' è presente nell'array teachers
// e salva il risultato nella variabile isFabioPresent
let isFabioPresent;
for(let i = 0; i < teachers.length; i++){
  if(teachers.indexOf("Fabio") >= 0){
    isFabioPresent = true;
  }
}
console.log(`Fabio è presente? ${isFabioPresent}`);


// 5. Unisci tutti gli insegnanti nell'array teachers in una stringa  separata da virgole e salvala nella variabile teachersString
const teachersString = null;