window.onload = () => {
    //elements
    var remaining = document.getElementById("time");
    var question = document.getElementById("text");
    var buttonA = document.getElementById("a");
    var buttonB = document.getElementById("b");
    var buttonC = document.getElementById("c");
    var buttonD = document.getElementById("d");

    //setting the questions
    var quizQuestions = {
        quizQuestions: ["what is 4+4"],
        quizAnswers: ["a"],
        quizChoices: [
            ["8", "16", "24", "32"]
        ]
    };

    let i = 0;
    let time = 0;

    question.innerHTML = quizQuestions.quizQuestions[i];
    buttonA.innerHTML = quizQuestions.quizChoices[i][0];
    buttonB.innerHTML = quizQuestions.quizChoices[i][1];
    buttonC.innerHTML = quizQuestions.quizChoices[i][2];
    buttonD.innerHTML = quizQuestions.quizChoices[i][3]

    buttonA.addEventListener("click", () => {
        if (quizQuestions.quizAnswers[i] == "a") {
            i++;
            time = 0;
        } else {
            time = 0;
            i++;
        }

    });

    buttonB.addEventListener("click", () => {
        if (quizQuestions.quizAnswers[i] == "b") {
            i++;
            time = 0;
        } else {
            time = 0;
            i++;
        }
    });

    buttonC.addEventListener("click", () => {
        if (quizQuestions.quizAnswers[i] == "c") {
            i++;
            time = 0;
        } else {
            i++;
            time = 0;
        }
    });

    buttonD.addEventListener("click", () => {
        if (quizQuestions.quizAnswers[i] == "d") {
            i++;
            time = 0;
        } else {
            i++;
            time = 0;
        }
    });

    let intervalId = setInterval(interval, 1000);

    function interval() {
        if (time == 30) {
            i++;
            time = 0;
            question.innerHTML = quizQuestions.quizQuestions[i];
            buttonA.innerHTML = quizQuestions.quizChoices[i][0];
            buttonB.innerHTML = quizQuestions.quizChoices[i][1];
            buttonC.innerHTML = quizQuestions.quizChoices[i][2];
            buttonD.innerHTML = quizQuestions.quizChoices[i][3];
        }
        if (i = quizQuestions.quizQuestions.length) {
            clearInterval(intervalId);
        }
        remaining.innerHTML = `Time left: ${29 - time}`;
        time++;
    }
}
