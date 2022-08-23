console.log("test")
var randomQuestion;

var questions = [
                "What year was the very first model of the iPhone released?",
                "What's the shortcut for the “copy” function on most computers?",
                "What is often seen as the smallest unit of memory?",
                "Who is often called the father of the computer?",
                "What does “HTTP” stand for?"
                ];

var answers = [ 
                 ["2000", "2005", "2007", "2010"],
                 ["ctrl + c", "ctrl + v", "ctrl + x", "ctrl + t"],
                 ["Kilobyte", "Terabyte", "Gigabyte", "Megabyte"],
                 ["Steve Jobs", "Bill Gates", "Mark Zuckerberg", "Charles Babage"],
                 ["Hyper Technology Transfer Protocol", "Hyper Text Technology Protocol", "Hyper Text Transfer Protocol", "Hyper Text Transfer Program"]
                ];





function triggerQuestion(){
    randomQuestion = Math.floor(Math.random()*questions.length);
    document.getElementById("question").innerHTML = questions[randomQuestion];

    for(i = 0; i < 5; i++){
        document.getElementById("text-choice-"+i).innerHTML = answers[randomQuestion][i];

    }

}


function checkAnswer(){
    for(i = 0; i < 5; i++){
        if(document.getElementById("option-"+i).checked){
            var answer = document.getElementById("option-"+i).value;
        }
    if(randomQuestion == 0){
        if(answer == 2){
            document.getElementById("result").innerHTML = "Correct";
        }else{
            document.getElementById("result").innerHTML = "Incorrect";
        }
    }
    }

}

window.onload = function() {
    triggerQuestion();
}



