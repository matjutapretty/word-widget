describe('Words Widget', function() {
    describe('', function() {

    it('should be able to highlight the words that has more than 4 characters in the sentence', function() {
        let testingWords = wordWidgets();
        testingWords.btnClicked('hello world');
            assert.equal(testingWords.btnClicked())

        });
    });
    it('should be able to count the words in a sentence', function() {
        let testingWords = wordWidgets();
        testingWords.btnClicked('the brown fox jumped over the over');
        assert.equal(testingWords.btnClicked(7))


    });
    describe('Hide and highlight', function() {

        it('the check button should be able to hide the shortest words in a sentence', function() {
            let testingWords = wordWidgets();
            testingWords.btnClicked('the fox jumped over the fence');
            assert.equal(testingWords.btnClicked('the fox over the'))
        });
        it('should be able to highlight the longest word in the setence', function() {
            let testingWords = wordWidgets();
            testingWords.btnClicked('I am visiting my dad in Krugersdorp next to Magalise');
            assert.equal(testingWords.btnClicked('Krugersdorp'))


        });
    });
    describe('Keep track', function() {

        it('Should keep track of the last 5 sentences entered and show them on the screen.', function() {
            let testingWords = wordWidgets();
            testingWords.btnClicked();
            assert.equal(testingWords.btnClicked())
        });
        it('Should keep track of the average length of words in the last 5 sentences.', function() {
            let testingWords = wordWidgets();
            testingWords.btnClicked();
            assert.equal(testingWords.btnClicked())
        });
        it('Show for the latest sentence entered if its average word length is higher or lower than the last 5 sentences by displaying a green dot if higher and an orange dot if lower.', function() {
            let testingWords = wordWidgets();
            testingWords.btnClicked();
            assert.equal(testingWords.btnClicked())
        });
    });
    
})