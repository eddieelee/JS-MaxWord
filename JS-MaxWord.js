function maxWord(str) {
    //create an array of words with split method
    var words = str.split(' ');
    //initial value to 0
    var longestWord = 0;
    for (var i = 0; i < words.length; i++) {
        //compare current word length with previous longestWord
        if (words[i].length > longestWord) {
            //asign new value to longestWord
            longestWord = words[i].length;
        }
    }
    return longestWord;
}

maxWord('My favorite day is Sunday.'); //8 favorite
maxWord('Hello guys and nice to meet you!'); //5 hello

/*
function maxWord(str) {
    var words = str.split(' ');
    var longestWord = '';
    for (var i = 0; i < words.length; i++) {
        if (words[i].length > longestWord.length) {
            longestWord = words[i];
        }
    }
    return longestWord.length;
}
*/