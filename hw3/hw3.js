let listOfWords = ["черепаха","лікар","посуд","гроші","пальто","тролейбус"];

let word = listOfWords[Math.floor(Math.random() * listOfWords.length)];

let answerWord = [];
for(let i = 0; i < word.length; i++){
    answerWord[i] = "_"
};
let remainedLetters = word.length;

while(remainedLetters > 0){
    alert(answerWord.join(" "));
    
    let guess = prompt("Відгадайте букву або нажміть скасувати, щоб вийти з ігри");
    if(guess === null){
        break;
    } else if(guess.length !== 1){
        alert("Будь ласка, введіть тільки одну літеру");
    } else{
        for(let a = 0; a < word.length; a++){
            if(word[a] === guess){
                answerWord[a] = guess;
                remainedLetters--;
            }
        }
    }
}
alert(answerWord.join(" "));
alert("Чудово, Ви виграли, було загадано слово: " + word);