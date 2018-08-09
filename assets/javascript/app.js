$(document).ready(function(){

    var questions = [{question: "What is not a component of a computer?",
                    answers: ["Motherboard", "CPU", "Sisterboard", "Hard-drive"],
                    correct: "Sisterboard"},
                    {question: "The brain of any computer is the...",
                    answers: ["GPU", "CPU", "Monitor", "PSU"],
                    correct: "CPU"},
                    {question: "The binary system uses powers of...",
                    answers: ["10", "8", "2", "16"],
                    correct: "2"},
                    {question: "Temporary data is stored in",
                    answers: ["RAM", "HDD", "The Cloud", "SSD"],
                    correct: "RAM"},
                    {question: "The improvement of computer hardware is summarized but which law?",
                    answers: ["Bill's Law", "Job's Law", "Moore's Law", "US Law"],
                    correct: "Moore's Law"},
                    {question: "What controls the way a computer system functions and how the user interacts with it?",
                    answers: ["Motherboard", "Application Software", "The Operating System", "The Keyboard"],
                    correct: "The Operating System"},
                    {question: "What does HTTP stand for?",
                    answers: ["Head Tail Transfer Protocol", "Hypertext Transfer Protocol", "Hypertext Traffic Protocol", "Hypertext Transfer Plot"],
                    correct: "Hypertext Transfer Protocol"},
                    {question: "What software creates smaller files?",
                    answers: ["Fragmentation", "Encapsulation", "Compression", "Photoshop"],
                    correct: "Compression"},
                    {question: "Which part interprets program instructions and initiate control operations?",
                    answers: ["Storage Unit", "Logic Unit", "Control Unit", "None of the above"],
                    correct: "Control Unit"},
                    {question: "What is not a type of input device?",
                    answers: ["Mouse", "Keyboard", "Printer", "Webcam"],
                    correct: "Printer"}

    ]
    var correct = 0;
    var incorrect = 0;
    var currentQuestion = 0;
    var time;
    display = $("#game");

    $("button").on("click", function(){
        nextQuestion();
    })

    $("#game").on("click", ".answer", function(){
        evaluateAnswer($(this).attr("data-answer"));
    })

    $("#game").on("click", ".restart", function(){
        currentQuestion = 0;
        correct = 0;
        incorrect = 0;
        nextQuestion();
    })


    function nextQuestion(){
        if(currentQuestion < questions.length){
            display.html("<div id='timer'>Time Remaining: 30</div>");
            timer();
            var question = $("<div>").text(questions[currentQuestion].question);
            var choices = $("<div>");
            for(var i = 0; i < questions[currentQuestion].answers.length; i++){
                var row = $("<div>")
                var button = $("<button>").text(questions[currentQuestion].answers[i]);
                button.css("width", "60%");
                button.css("margin", "10px");
                button.addClass("answer");
                button.attr("data-answer", questions[currentQuestion].answers[i]);
                row.append(button);
                choices.append(row);
            }
            display.append(question);
            display.append(choices);
        }
        else{
              display.html("<div><h2>All done!</h2></div>"+
                            "<div>Correct: " + correct + "</div>" +
                            "<div>Incorrect: " + incorrect + "</div>" +
                            "<button class='restart'>Restart?</button>");
        }
    }

    function evaluateAnswer(str){
        if(str === questions[currentQuestion].correct){
            correct++;
        }
        else{
            incorrect++;
        }
        currentQuestion++;
        clearInterval(time);
        nextQuestion();
    }
            
    function timer(){
        var count = 30;
        time = setInterval(function(){
        $("#timer").text("Time Remaining: " + count);
            if(count === 0){
                clearInterval(time);
                currentQuestion++;
                nextQuestion();
            }
            count--;
        }, 1000);            
    }

})