

// sound variables
var gotEm = new Audio('../sounds/ha-got-eeem.mp3');
var alright = new Audio('../sounds/alright_alright_alright_-_dazed_and_confused.mp3');

// Q&A array
var QA = {
    "What color is the sky" : {
        colors: ["red","blue","n/a"]
    }
    "Which is best" : {
        best: ["ice cream", "pizza","pasta"]
    }
    "Choose wisely" : {
        politics: ["universal healthcare", "$1k monthly stipend","yo momma"]
    }
}


 //  Set our number counter to 10
 var number = 10;

 //  Variable that will hold our interval ID when we execute
 //  the "run" function
 var intervalId;

 //  When the stop button gets clicked, run the stop function.
 $("#stop").on("click", stop);

 //  When the resume button gets clicked, execute the run function.
//  $("#resume").on("click", run);

 //  The run function sets an interval
 //  that runs the decrement function once a second.
 //  *****BUG FIX******** 
 //  Clearing the intervalId prior to setting our new intervalId will not allow multiple instances.
 function run() {
   clearInterval(intervalId);
   intervalId = setInterval(decrement, 1000);
 }

 //  The decrement function.
 function decrement() {

   //  Decrease number by one.
   number--;

   //  Show the number in the time div
    $("#time").html("<p>" + number + "</p>");

    //forloop for picking index in array..
    for (var i =0; i < QA.length< i++) {

        //displaying questions and answers
        $('#question').append( QA[i] );
        $('#choices').append( QA[i].val() );

        //  Once number hits zero...
        if (number === 0) {

        //  ...run the stop function.
        stop();

        //  Alert the user that time is up
        alert("Time Up!");
        gotEm.play();

  }
    }

   //  Once number hits zero...
   if (number === 0) {

     //  ...run the stop function.
     stop();

     //  Alert the user that time is up
     alert("Time Up!");
     gotEm.play();

   }
 }
//add on click here.....
 //  The stop function
 function stop() {

   //  Clears our intervalId
   //  We just pass the name of the interval
   //  to the clearInterval function.
   clearInterval(intervalId);
   number = 10;
 }

 //  Execute the run function.
 run();
