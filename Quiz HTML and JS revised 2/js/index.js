
//Question bank
var questionBank= [
    {
        question : 'What’s the fastest land animal in the world?',
        option : ['Lion','Rabbit','Leopard','Cheetah'],
        answer : 'Cheetah'
    },
    {
        question : 'How many eyes does a bee have?',
        option : ['two','four','five','seven'],
        answer : 'five'
    },
    {
        question : 'Which mammal has no vocal cords?',
        option : ['Giraffe','Pig','Tiger','Monkey'],
        answer : 'Giraffe'
    },
    {
        question : 'What name is used to refer to a group of frogs?',
        option : ['colony','army','brood','bloat'],
        answer : 'army'
    },
    {
        question : 'How many hearts does an octopus have?',
        option : ['Three','eight','six','eleven'],
        answer : 'Three'
    },
    {
        question : 'What is the name of the largest ocean on earth?',
        option : ['Arctic Ocean', 'Atlantic Ocean', 'Indian Ocean', 'Southern Ocean', 'Pacific Ocean'],
        answer : 'Pacific Ocean'
    },
    {
        question : 'What was the first soft drink in space?',
        option : ['Pepsi', 'Coca-Cola', 'Fanta', 'Sprite', 'Dr. Pepper'],
        answer : 'Coca-Cola'
    },
    {
        question : 'Which is the only edible food that never goes bad?',
        option : ['Nuts','Oatmeal','Honey','Soy Sauce'],
        answer : 'Honey'
    },
    {
        question : 'How many teeth does an adult human have?',
        option : ['30','31','32','34'],
        answer : '32'
    },
    {
        question : 'What is the nearest planet to the sun?',
        option : ['Venus','Mars','Mercury','Saturn'],
        answer : 'Mercury'
    }
]

var question= document.getElementById('question');
var quizContainer= document.getElementById('quiz-container');
var scorecard= document.getElementById('scorecard');
var option0= document.getElementById('option0');
var option1= document.getElementById('option1');
var option2= document.getElementById('option2');
var option3= document.getElementById('option3');
var next= document.querySelector('.next');
var points= document.getElementById('score');
var span= document.querySelectorAll('span');
var i=0;
var score= 0;

//function to display questions
function displayQuestion(){
    for(var a=0;a<span.length;a++){
        span[a].style.background='none';
    }
    question.innerHTML= 'Q.'+(i+1)+' '+questionBank[i].question;
    option0.innerHTML= questionBank[i].option[0];
    option1.innerHTML= questionBank[i].option[1];
    option2.innerHTML= questionBank[i].option[2];
    option3.innerHTML= questionBank[i].option[3];
    stat.innerHTML= "Question"+' '+(i+1)+' '+'of'+' '+questionBank.length;
}

//function to calculate scores
function calcScore(e){
    if(e.innerHTML===questionBank[i].answer && score<questionBank.length)
    {
        score= score+1;
        document.getElementById(e.id).style.background= 'limegreen';
    }
    else{
        document.getElementById(e.id).style.background= 'tomato';
    }
    setTimeout(nextQuestion,300);
}

//function to display next question
function nextQuestion(){
    if(i<questionBank.length-1)
    {
        i=i+1;
        displayQuestion();
    }
    else{
        points.innerHTML= score+ '/'+ questionBank.length;
        quizContainer.style.display= 'none';
        scoreboard.style.display= 'block'
    }
}

//click events to next button
next.addEventListener('click',nextQuestion);

//Back to Quiz button event
function backToQuiz(){
    location.reload();
}

//function to check Answers
function checkAnswer(){
    var answerBank= document.getElementById('answerBank');
    var answers= document.getElementById('answers');
    answerBank.style.display= 'block';
    scoreboard.style.display= 'none';
    for(var a=0;a<questionBank.length;a++)
    {
        var list= document.createElement('li');
        list.innerHTML= questionBank[a].answer;
        answers.appendChild(list);
    }
}

function showSlide(n) {
    // Hide all slides by removing "active-slide" class from all questions
    slides[currentSlide].classList.remove("active-slide");
    // Show new slide by adding "active-slide" class to current question
    slides[n].classList.add("active-slide");
    // Update the current slide number
    currentSlide = n;

    // First slide - hide previous button - Else show previous button
    if(currentSlide === 0) {
        previousButton.style.display = "none";
    } else {
        previousButton.style.display = "inline-block";
    }

    // Last slide - hide next button and show submit button - Else show next button and hide submit button
    if(currentSlide === slides.length - 1) {
        nextButton.style.display = "none";
        submitButton.style.display = "inline-block";
    } else {
        nextButton.style.display = "inline-block";
        submitButton.style.display = "none";
    }
}


displayQuestion();