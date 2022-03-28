const inputSentence = document.querySelector(".inputSentence")
const analyseBtn =document.querySelector(".analyseBtn")
const hideWords = document.getElementById("hideWords")
const NumberOfWords = document.querySelector(".countingWords")
const messages = document.querySelector(".results")
const sentence = document.querySelector(".list")
let previousSentence = [];

let slider = document.getElementById("sliderRange")
let output = document.getElementById("theSlider")
output.innerHTML = slider.value;

slider.oninput = function () {
  output.innerHTML = this.value;
  return this.value;
}

function btnClicked() {
let mm = slider.oninput();
let string = "";
const words = inputSentence.value;
const splitWords = words.split(" ");

  let wordCount = words.match(/(\w+)/g).length;
  NumberOfWords.innerHTML = `Word Count : ${wordCount}`;


  // decoupling sentences
  const wordList = splitWords.map(word => {
    return {
      word,
      length : word.length,
      type : word.length > 4 ? "longer" : ""
    }
  });

  let longestWord = {
    length : 0
  }

  wordList.forEach((word, index) => {
    if (word.length > longestWord.length) {
      longestWord = {...word, index}
    }
  });

  const longer = wordList[longestWord.index].word

  for (let i = 0; i < splitWords.length; i++) {
    const element = splitWords[i];

    if(element.length == mm ){ 
      string += '<mark style = "background-color : dodgerblue">' + element + '</mark> '
     } if (element.length >= longer.length) {
      string += '<mark style = "background-color : pink">' + element + '</mark> '
     } else {
    string += element + " ";
  }
}

  previousSentence.unshift(string)
  if (localStorage['previous']) {
    sentence.innerHTML = `Last 5 sentences : ${previousSentence} `;
  }
    if (previousSentence.length <= 5){
      localStorage['previous'] = sentence.innerHTML = `Last 5 sentences : ${previousSentence}`
    }
  
    messages.innerHTML = ` ${mm} Character(s) : ${string} `;



hideWords.addEventListener('click', function(){
  let mySrting = " ";
  const longestWords = inputSentence.value.split(" ")
  
  if (hideWords.checked == true){
    for(let i = 0; i < longestWords.length; i++){
      
      const element = longestWords[i];

      if (element.length == mm){
        mySrting += '<mark style = "background-color : dodgerblue">' + element + '</mark> '
      } if (element.length >= longer.length){
        mySrting += '<mark style = "background-color : pink;">' + element + '</mark> '
      }
    }
  } else {
    for (let i = 0; i < splitWords.length; i++){
      
      const element = splitWords[i];

      if(element.length == mm){
          mySrting += '<mark style = "background-color : dodgerblue;">' + element + '</mark> '
        } if (element.length >= longer.length){ 
          mySrting += '<mark style = "background-color : pink;">' + element + '</mark> '
        } else {
          mySrting += element + " "
        }
      }
    }
  
  messages.innerHTML = `5 Character(s) : ${mySrting}`;
})
}

slider.oninput();

analyseBtn.addEventListener('click', btnClicked)


  