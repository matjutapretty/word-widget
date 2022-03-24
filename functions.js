function wordWidgets() {
    function btnClicked() {
        // let string = "";
        // const words = inputSentence.value;
        // const splitWords = words.split(" ");
        
        //   let wordCount = words.match(/(\w+)/g).length;
        //   NumberOfWords.innerHTML = `Word Count : ${wordCount}`;
        
        
          // decoupling sentences
        //   const wordList = splitWords.map(word => {
        //     return {
        //       word,
        //       length : word.length,
        //       type : word.length > 4 ? "longer" : ""
        //     }
        //   });
        
        //   let longestWord = {
        //     length : 0
        //   }
        
        //   wordList.forEach((word, index) => {
        //     if (word.length > longestWord.length) {
        //       longestWord = {...word, index}
        //     }
        //   });
        // }
        // hideWords.addEventListener('click', function(){
        //     let mySrting = " ";
        //     const longestWords = inputSentence.value.split(" ")
        //     if (hideWords.checked == true){
        //       for(let i = 0; i < longestWords.length; i++){
        //         const element = longestWords[i];
          
        //         if (element.length > 4){
        //           mySrting += "<mark> " + element + "</mark> "
        //         }
        //       }
        //     } else {
        //       for (let i = 0; i < longestWords.length; i++){
        //         const element = longestWords[i];
          
        //         if(element.length > 4){
        //           mySrting += "<mark1> " + element + "</mark> "
        //         } else {
        //           mySrting += element + " "
        //         }
        //       }
        //     }
        //     messages.innerHTML = `${mySrting},`;
        //   })
    }
    return {
        btnClicked,
    }
}
