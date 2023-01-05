function longestWord(stmt){
    let wordArray = stmt.split(" ");
    let wordLen=0;
    let lonWord="";
    for(let word of wordArray){
        if(word.length>wordLen){
            wordLen = word.length
            lonWord = word;
        }
    }
    return lonWord;
}

console.log(longestWord("Here is my laptop computer"));