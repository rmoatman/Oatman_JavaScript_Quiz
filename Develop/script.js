    // FUNCTION LIST //

    // beginquiz - Executes the timer function and the quiz question function when the begin quiz button is clicked //
    // quizquestions - Populates the quiz questions and answers from the questions array, then listens for an answer, then calls the appropriate checkAnswer function  //
    // checkAnswera - If btn1El is clicked, check to see if the answer is correct //
    // checkAnswerb - If btn2El is clicked, check to see if the answer is correct //
    // checkAnswerc - If btn3El is clicked, check to see if the answer is correct //
    // displaystats - Gets user's current score and initials; gets high score from storage; adds current score to high scores; sorts high scores and keeps top 5 scores; updates high scores in local storage; displays high scores; and asks if user wants to play again //
    // playagain - Prepares to play again //
    // outoftime - Ends game if player's score < 0 //
    // countdown (timer.js) - Uses the setInterval() method to call a function to be executed every second //
    // stopClock (timer.js) - Stops the clock if time remains after the last question has been answered; clears the timeInterval, and executes displaystats //
 

    
    // VARIABLES //

      // h3 element located in the header. //
      var h3subtitleEl = document.querySelector(".h3subtitle"); // the content of this subtitle changes at different stages of the quiz  //

      // local storage //
      var highScores = JSON.parse(localStorage.getItem("highScores")) || []; // this is the variable used to pull high scores from local storage.  If it doesn't already exist, it inializes it as an empty array //

      // buttons //
      var startbuttonEl = document.querySelector("#start"); // creates a variable for the start button //
      var playagainbuttonEl = document.querySelector("#playagain"); // creates a variable for the play again button //

      var instructionsEl = document.querySelector(".instructions"); // creates a variable for the instructions p //
      
      // containers //
      var quizcontainerEl = document.querySelector(".quizcontainer"); //creates a variable for the quiz container div //
      var questionEl = document.querySelector("#question"); //creates a variable for the question //
      var btn1El = document.querySelector("#btn1"); // creates a variable for the first answer button //
      var btn2El = document.querySelector("#btn2"); // creates a variable for the second answer button //
      var btn3El = document.querySelector("#btn3"); // creates a variable for the third answer button //
      var highscorecontainerEl = document.querySelector(".highscorecontainer");  //creates a variable for the high score container div //

        // high scores //
        var name0El = document.querySelector("#name_0");  // creates a variable for the Username stored at index 0 //
        var name1El = document.querySelector("#name_1");  // creates a variable for the Username stored at index 1 //
        var name2El = document.querySelector("#name_2");  // creates a variable for the Username stored at index 2 //
        var name3El = document.querySelector("#name_3");  // creates a variable for the Username stored at index 3 //
        var name4El = document.querySelector("#name_4");  // creates a variable for the Username stored at index 4 //
        
        var score0El = document.querySelector("#score_0");  // creates a variable for the score stored at index 0 //
        var score1El = document.querySelector("#score_1");  // creates a variable for the score stored at index 1 //
        var score2El = document.querySelector("#score_2");  // creates a variable for the score stored at index 2 //
        var score3El = document.querySelector("#score_3");  // creates a variable for the score stored at index 3 //
        var score4El = document.querySelector("#score_4");  // creates a variable for the score stored at index 4 //

      // index //
      var i = 0; // saves the starting index for the questions array //

      // quiz questions //
      var questions = [
          {
              question: "Which is NOT a correct mathematical operator in JavaScript?",
              a: "%",
              b: "**",
              c: "=>",
              answer: "C"
            },
          {
              question: "Which item represents an element class?",
              a: "#Hide",
              b: ".btn",
              c: "&Header&",
              answer: "B"
            },
          {
              question: "Consider the following: arr[14, 24, 16, 9]  What is the value of arr[3]?",
              a: "3",
              b: "16",
              c: "9",
              answer: "C"
            },
          {
              question: "Which of the following is usually the best place to put JavaScript code?",
              a: "in an HTML file",
              b: "in a JavaScript file",
              c: "In a CSS file",
              answer: "B"
            },
          {
              question: "Which of the following operators means 'not equal to' in Javascript?",
              a: "!=",
              b: "<>",
              c: "||",
              answer: "A"
            }
          ];

      // variables located at variables.js //
      // var timeLeft = 30; Amount of seconds the timer starts with //
      // var timeInterval = ""; Initializes the timeInterval variable //



    // FUNCTIONS //

    // Executes the timer function and the quiz question function when the begin quiz button is clicked //
    function beginquiz() {
        console.log("beginquiz()");
        // Hides the instructions and the start button //
        instructionsEl.classList.add("hide");
        startbuttonEl.classList.add("hide");
        // Starts timer located in timer.js//
        countdown();
        // Begins the quiz //
        quizquestions();
    }
    // End of beginquiz() //
       

    // Populates the quiz questions and answers from the questions array, then listens for an answer, then calls the appropriate checkAnswer function //
    function quizquestions() {
      console.log("quizquestions()")

      // Hides the text "Are You Ready" //
      h3subtitleEl.classList.add("hide");

      // This conditional statement checks to see if all questions have been asked.  If they have, the clock stops. //
      if (i < questions.length) {

        // Updates the quiz questions from the array //
        questionEl.innerHTML = (questions[i].question);
        btn1El.innerHTML = (questions[i].a);
        btn2El.innerHTML = (questions[i].b);
        btn3El.innerHTML = (questions[i].c);

        // Displays the quiz container //
        quizcontainerEl.classList.remove("hide");

        // Listens for an answer //
        btn1El.addEventListener("click", checkAnswera);
        btn2El.addEventListener("click", checkAnswerb);
        btn3El.addEventListener("click", checkAnswerc);

      } else {
        stopClock(); // Executes stopClock() timer.js //
      }

    }
    // End of quizquestions() //


    // Check the Answers //

      // If btn1El is clicked, check to see if the answer is correct //
      function checkAnswera(){

        console.log("clicked a");

        if(questions[i].answer === "A") {
          console.log("correct");
          timeLeft = timeLeft + 5; // Adds 5 seconds to the timer //

          } else {
            console.log("not correct");
            timeLeft = timeLeft - 5;  // Deletes 5 seconds from the timer //
          }

        i++;
        quizquestions();
      }
      // End of checkAnswera()

      // If btn2El is clicked, check to see if the answer is correct //
      function checkAnswerb(){

        console.log("clicked b");
      
        if(questions[i].answer === "B") {
          console.log("correct");
          timeLeft = timeLeft + 5; // Adds 5 seconds to the timer //

          } else {
            console.log("not correct");
            timeLeft = timeLeft - 5;  // Deletes 5 seconds from the timer //
          }

        i++;
        quizquestions();
      }
      // End of checkAnswerb() //

      // If btn3El is clicked, check to see if the answer is correct //

      function checkAnswerc(){

        console.log("clicked c");

        if(questions[i].answer === "C") {
          console.log("correct");
          timeLeft = timeLeft + 5; // Adds 5 seconds to the timer //

          } else {
            console.log("not correct");
            timeLeft = timeLeft - 5;  // Deletes 5 seconds from the timer //
          }

        i++;
        quizquestions();
      }
      // End of checkAnswerc() //

    // End of Check the Answers //
    

    // Gets user's current score and initials; gets high score from storage; adds current score to high scores; sorts high scores and keeps top 5 scores; updates high scores in local storage; displays high scores; and asks if user wants to play again //
    function displaystats(){

      console.log("Display Stats");

      // Hides the quiz //
      quizcontainerEl.classList.add("hide");

      // Displays current score and asks for initials //
      if(timeLeft > 1) {
        var username = prompt("Game Over.  Your score is: " + timeLeft + ". Please enter your initials: ");

        } else {
          outoftime();
        }

      // Temporarily stores player's initials (username) and score (timeLeft) //
      var currentScore = {
        score: timeLeft,
        name:username
      };

      // Adds new data to highScores array--which was pulled from local storage when declaring the variable highScores in line 5 above //
      highScores.push(currentScore);

      // Sorts the high scores from highest to lowest //
      highScores.sort((a, b) =>  b.score - a.score);

      // Removes any score other than the top 5 in the highScore array //
      highScores.splice(5);

      // Displays high scores //
      highscorecontainerEl.classList.remove("hide");
      playagainbuttonEl.classList.remove("hide");
      h3subtitleEl.classList.remove("hide");
      
      // If there are less than 5 high scores in local storage, this conditional displays only the number of existing scores //
      if (highScores.length > 4) {
        // displays the unorderd list of names //
        name0El.innerHTML = highScores[0].name;
        name1El.innerHTML = highScores[1].name;
        name2El.innerHTML = highScores[2].name;
        name3El.innerHTML = highScores[3].name;
        name4El.innerHTML = highScores[4].name;

        // displays the ordered list of scores //
        score0El.innerHTML = highScores[0].score;
        score1El.innerHTML = highScores[1].score;
        score2El.innerHTML = highScores[2].score;
        score3El.innerHTML = highScores[3].score;
        score4El.innerHTML = highScores[4].score;

       } else {
 
         if (highScores.length > 3) {
          name0El.innerHTML = highScores[0].name;
          name1El.innerHTML = highScores[1].name;
          name2El.innerHTML = highScores[2].name;
          name3El.innerHTML = highScores[3].name;
          score0El.innerHTML = highScores[0].score;
          score1El.innerHTML = highScores[1].score;
          score2El.innerHTML = highScores[2].score;
          score3El.innerHTML = highScores[3].score;

        } else {

          if (highScores.length > 2 ) {
            name0El.innerHTML = highScores[0].name;
            name1El.innerHTML = highScores[1].name;
            name2El.innerHTML = highScores[2].name;
            score0El.innerHTML = highScores[0].score;
            score1El.innerHTML = highScores[1].score;
            score2El.innerHTML = highScores[2].score;

          } else {

            if (highScores.length > 1) {
              name0El.innerHTML = highScores[0].name;
              name1El.innerHTML = highScores[1].name;
              score0El.innerHTML = highScores[0].score;
              score1El.innerHTML = highScores[1].score;

            } else {
              name0El.innerHTML = highScores[0].name;
              score0El.innerHTML = highScores[0].score;
            }
          }
        } 
      }

      // Resets the high scores in local storage //
      localStorage.setItem("highScores", JSON.stringify(highScores));

      // Listens for a click on the play again button.  If so execute playagain() //
      playagainbuttonEl.addEventListener("click", playagain);

    }
    // End of displaystats() //


    // Prepares to play again //
    function playagain(){;
      playagainbuttonEl.classList.add("hide"); // Hides playagain button //
      highscorecontainerEl.classList.add("hide"); // Hides high scores //
      i=0; // Resets question number index to 0 //
      timeLeft = 30; // Resets timeLeft (timer) to 30 //
      beginquiz();
    }
    // End of playagain() //

    // Ends game if score < 0 //
    function outoftime(){
      console.log("out of time");
      quizcontainerEl.classList.add("hide"); // Hides question container //
      playagainbuttonEl.classList.remove("hide"); // Shows playagain button //
      alert("You are out of time");  // Displays message to user that time is up //
      // Listens for a click on the play again button.  If so, execute playagain() //
      playagainbuttonEl.addEventListener("click", playagain);
    }


    // EXECUTION //
    // Listens for the startbutton to be clicked, then executes beginquiz() //
    startbuttonEl.addEventListener("click", beginquiz);


// Credit:  Code for storing and retrieving high scores was influenced by James Q Quick's video "Build a Quiz App (8) - Save High Scores in Local Storage" https://www.youtube.com/watch?v=DFhmNLKwwGw //
    
// Last Revised 5/23/21 //
// Raemarie Oatman raemarie.oatman@gmail.com //
// Homework Week 4 - 05 Third-Party APIs: Work Day Scheduler //