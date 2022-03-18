// localStorage.setItem()
// localStorage.getItem()

const inputSentence = document.querySelector(".inputSentence")
const analyseBtn =document.querySelector(".analyseBtn")
const hideWords = document.getElementById("hideWords")
const NumberOfWords = document.querySelector(".countingWords")
const messages = document.querySelector(".sentences")
const sentence = document.querySelector(".list")
const previousSentence = []

function btnClicked() {
let string = " ";
const words = inputSentence.value;
const splitWords = words.split(" ")

  let wordCount = words.match(/(\w+)/g).length;
  NumberOfWords.innerHTML = `Word Count : ${wordCount}`;

  for(let i =0; i < splitWords.length; i++) {
    const element = splitWords[i];
    if(element.length > 4 ){
      string += '<mark>' + element + '</mark>'
    } else {
      string += element + " ";
    }
  }
  previousSentence.push(string)
  messages.innerHTML = ` ${string},`;
  sentence.innerHTML = `Last 5 sentences : ${previousSentence}`;
}

hideWords.addEventListener('click', function(){
  let mySrting = ' ';
  const longestWords = inputSentence.value.split(" ")
  if (hideWords.checked == true){
    for(let i = 0; i < longestWords.length; i++){
      const element = longestWords[i];

      if (element.length > 4){
        mySrting += '<mark>' + element + '</mark>'
      }
    }
  } else {
    for (let i = 0; i < longestWords.length; i++){
      const element = longestWords[i];

      if(element.length > 4){
        mySrting += '<mark>' + element + '</mark>'
      } else {
        mySrting += element + ' '
      }
    }
  }
  messages.innerHTML = `${mySrting}`;
})
analyseBtn.addEventListener('click', btnClicked)

  