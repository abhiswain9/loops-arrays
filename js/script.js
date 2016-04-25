function getAnswers(){
	var correctAnswers = 0;
	var myQA = [
		["Who is the Business School named after? (Last Name Only)"    ,    "OLIN"     ],
		["Who is the Art School named after? (Last Name Only)"         ,    "FOX"      ],
		["Who is the Social Work School named after? (Last Name Only)" ,    "BROWN"    ],
		["Who is the Main Library named after? (Last Name Only)"       ,    "OLIN"     ],
		["Who is the Main Quadrangle named after? (Last Name Only)"    ,    "BROOKINGS"]
	];
	
	var questionDocument = "<h1> Results </h1>"; 
	var i =0;
	var ans = "";
	
	while(i < myQA.length){
		
		ans = prompt(myQA[i][0]);  
		
		if(ans.toUpperCase() == myQA[i][1]) { 
		questionDocument += "<p>" + myQA[i][0] + ". You got the correct answer : " + myQA[i][1] + "</p>"; //user got it right!
		correctAnswers++;
		} else {
		questionDocument += "<p>" + myQA[i][0] + ". You got the wrong answer : " + ans + ". The correct answer is " + myQA[i][1] + "</p>"; //user got it wrong!
		}
		
		i++;
	}
	
	questionDocument += "<h2> Your SCORE :" + correctAnswers + "/" + myQA.length + "</h2>";
	return 	questionDocument; //this is the html of the results
} 

function writeHTML(htmlString){
	document.write(htmlString);
}

var htmlResults = getAnswers(); 
writeHTML(htmlResults);

