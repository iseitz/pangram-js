// I did not use the alphabet array but here is the way to generate it and solve the task with it
// It looks like a longer Solution

// function genCharArray(charA, charZ) {
//     let a = [], i = charA.charCodeAt(0), j = charZ.charCodeAt(0);
//     for (; i <= j; i++) {
//         a.push(String.fromCharCode(i));
//     };
//     return a;
// }
// let alphabet = genCharArray('a', 'z');
//
// function onlyUnique(value, index, self) {
//     return self.indexOf(value) === index;
// }
//
// let isPangram = (sentence) => {
//   regex = /[.,\s]/g;
//   cleanedSentence = sentence.replace(regex, '');
//   letterArray = cleanedSentence.split('').sort();
//
//   let allLettersInSentence = alphabet.map((letter) => {
//       if (letterArray.includes(letter) ){
//         return letter;
//       }
//   });
//   let uniqueCollection = allLettersInSentence.filter(onlyUnique);
//   if(uniqueCollection.length === 26){
//     return true;
//   } else {
//     return false;
//   };
// };

// define the isPangram() function solution without generating the alphabet array
function onlyUnique(value, index, self) {
    return self.indexOf(value) === index;
}

let isPangram = (sentence) => {
  regex = /[.,\s]/gi;
  cleanedSentence = sentence.replace(regex, '');
  letterArray = cleanedSentence.split('').sort();
  alphabetCollection = [];
  letterArray.forEach((char) => {
    if (char === char.toUpperCase()){
      alphabetCollection = alphabetCollection.concat(char.toLowerCase());
    }
    else{
      alphabetCollection = alphabetCollection.concat(char);
    }
  });
  uniqueCollection = alphabetCollection.filter(onlyUnique);
  if(uniqueCollection.length === 26){
    return true;
  }
  else {
    return false;
  };
};

// test the isPangram() function, and print results to the console.
let testData = [
  { sentence: 'Waltz job vexed quick frog nymphs.', pangram: true },
  { sentence: 'The quick onyx goblin jumps over the lazy dwarf.', pangram: true },
  { sentence: 'Grumphy wizards make toxic brew for the evil queen and jack.', pangram: true },
  { sentence: 'Not a pangram', pangram: false },
  { sentence: '', pangram: false },
]

testData.forEach((trial) => {
  let result = isPangram(trial.sentence)
  let correct = (result == trial.pangram)
  if (correct === true) {
    console.log(`isPangram gave a correct result for: ${trial.sentence}`)
  } else {
    console.log(`isPangram gave an incorrect result for: ${trial.sentence}`)
  }
})
