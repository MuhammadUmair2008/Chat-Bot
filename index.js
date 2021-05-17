// let age = prompt("What is your age?");
// if ((age>15) || (age <= 30)) {
//     console.log("You Are Eligible For Cricket");
// }
// else {
//     console.log("You Are not Eligible For Cricket")
// let message = prompt("WELCOME TO MERITORIOUS SCHOOL \n Choose Your Answer \n Admissions are open? : type admissions \n How much fees? : type fees")

// if ((message=="admissions") ||(message=="Admissions")){
//    document.write("Admissions are open for 7th class only");
// }
// else if((message=="fees")||(message=="Fees")){
//     document.write("RS 9000/ per months")
// }
// else{
//     alert("data not found")
// }


var questionNum = 0;													// keep count of question, used for IF condition.
var question = '<h1>what is your name?</h1>';				  // first question

var output = document.getElementById('output');				// store id="output" in output variable
output.innerHTML = question;													// ouput first question

function bot() { 
    var input = document.getElementById("input").value;
    console.log(input);

    if (questionNum == 0) {
    output.innerHTML = '<h1>hello ' + input + '</h1>';// output response
    document.getElementById("input").value = "";   		// clear text box
    question = '<h1>how old are you?</h1>';			    	// load next question		
    setTimeout(timedQuestion, 2000);									// output next question after 2sec delay
    }

    else if (questionNum == 1) {
    output.innerHTML = '<h1>That means you were born in ' + (2016 - input) + '</h1>';
    document.getElementById("input").value = "";   
    question = '<h1>where are you from?</h1>';					      	
    setTimeout(timedQuestion, 2000);
    }   
}

function timedQuestion() {
    output.innerHTML = question;
}

//push enter key (using jquery), to run bot function.
$(document).keypress(function(e) {
  if (e.which == 13) {
    bot();																						// run bot function when enter key pressed
    questionNum++;																		// increase questionNum count by 1
  }
});
