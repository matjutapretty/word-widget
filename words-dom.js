const inputSentence = document.querySelector(".inputSentence")
const analyseBtn =document.querySelector(".analyseBtn")
const hideWords = document.getElementById("hideWords")
const NumberOfWords = document.querySelector(".countingWords")
const messages = document.querySelector(".sentences")
const sentence = document.querySelector(".list")
const types = document.querySelector('.longest')
const previousSentence = []

function btnClicked() {
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

  const longestWords = wordList.filter(word => word.length === longestWord.length);
  // longestWords.forEach(word => word.type = "longest")
  // wordList[longestWord.index].type = '<span>' + longestWords + '</span>'
  types.innerHTML = `Longest Word : <span style="background-color: pink;"> ${longer} </span>`

  for(let i = 0; i < splitWords.length; i++) {
    const element = splitWords[i];

    let averageLength = " ";

    if(element.length >= 5 ){
      string += '<mark> ' + element + '</mark> '
     if (element.length > string.length) {
       averageLength += '<span>' + element + '</span>'
     } 
    } else {
      string += element + " ";
     }
  }

  previousSentence.push(string)
  if (previousSentence.length <= 5) {
    sentence.innerHTML = `Last 5 sentences : ${previousSentence},`;
  }
  messages.innerHTML = ` ${string},`;
}


hideWords.addEventListener('click', function(){
  let mySrting = " ";
  const longestWords = inputSentence.value.split(" ")
  if (hideWords.checked == true){
    for(let i = 0; i < longestWords.length; i++){
      const element = longestWords[i];

      if (element.length > 4){
        mySrting += "<mark> " + element + "</mark> "
      }
    }
  } else {
    for (let i = 0; i < longestWords.length; i++){
      const element = longestWords[i];

      if(element.length > 4){
        mySrting += "<mark> " + element + "</mark> "
      } else {
        mySrting += element + " "
      }
    }
  }
  messages.innerHTML = `${mySrting},`;
})
analyseBtn.addEventListener('click', btnClicked)

  