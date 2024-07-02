function analyzeSentence(sentence) {
    let length = 0;
    let wordCount = 0;
    let vowelCount = 0;
    
    const vowels = new Set(['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U']);
    
    let inWord = false;
    
    for (let i = 0; i < sentence.length; i++) {
        let char = sentence[i];
        length++;
        
        if (vowels.has(char)) {
            vowelCount++;
        }
        

        if (char === ' ') {

            if (inWord) {
                wordCount++;
                inWord = false; 
            }
        } else if (char === '.') {
            if (inWord) {
                wordCount++;
            }
        } else {
            inWord = true;
        }
    }
    
    return {
        length: length,
        wordCount: wordCount,
        vowelCount: vowelCount
    };
}


const sentence = "I hate everything";
const result = analyzeSentence(sentence);
console.log(result);
