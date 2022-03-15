document.addEventListener('DOMContentLoaded', () => {
    const selectors = [
      '.inputSentence',
      '.analyseBtn',
      '.outputSentence',
      '.wordCount',
      '#hideWords'
    ]; 
  
    const elements = selectors.map((selector) =>
      document.querySelector(selector),
    );
  
    const [inputSentence, analyseBtn, outputSentence, wordCount, hideWords] = elements;
  
    analyseBtn.addEventListener('click', () => {
      let sentence = inputSentence.value;
      if (sentence !== '') {
        sentence = sentence.trim();
        const words = sentence.split(/\s+/);
        let longestWords = words.reduce((longestWords, word) => {
            word = word.replace(/\W+/g, '');
            if (!longestWords || word.length > longestWords[0].length){
                return [word];
            }else if (word.length ==longestWords[0].length){
                return [word, ...longestWords]
            }else {
                return longestWords
            }
        })
        sentence = words.map((word) => {
          const chars = word.replace(/\W+/g, '');
          if (longestWords.includes(chars)) {
            word = `<mark class="longer">${word}</mark>`;
          }else if (chars.length > 4){
              word = `<mark>${word}</mark>`
          }
          return `<span>${word}</span>`;
        });
        outputSentence.innerHTML = sentence.join(' ');
        wordCount.innerHTML = `Word count: ${words.length}`;
      }
    });
    hideWords.addEventListener('click', () => {
        let words = outputSentence.children
        for (let i =0; i < words.length; i++){
            let word = words[i].innerHTML
            if (word.length < 5){
                words [i].classList.toggle('hidden')
            }
        }
    })
  });
