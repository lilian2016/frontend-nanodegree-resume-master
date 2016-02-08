
/*var awesomeThoughts="I am Lili Lin and I am awesome";
var name="Lili Lin";
console.log(awesomeThoughts);

var funThoughts=awesomeThoughts.replace("awesome","FUN");
$("#main").append(funThoughts);

console.log(funThoughts);*/

var name = "Lili Lin";

var role = "Web Developer";

var formattedName = HTMLheaderName.replace("%data%",name);

var formattedRole =HTMLheaderRole.replace("%data%",role);

$("#header").prepend(formattedRole);

$("#header").prepend(formattedName);

//var str1 = 'The morning is upon us.';
//var str2 = str1.slice(2, -1);

//console.log(str2); // OUTPUT: morning is upon u

var str = 'The morning is upon us.';
str.slice(0);     // returns 'us.'
//str = str.slice(-3, -1); // returns 'us'
/*str.slice(0, -1);  // returns 'The morning is upon us'*/
console.log(str); 

//console.log(str.toUpperCase(-1)); 



var array1 = ["Euler", 3.14159, {name: "James", job: "Course Developer"}, "myFunc"];
//var length1 = array1.length;

console.log(array1.length); 


var bio = {
	"name":"Lili Lin",
	"role" : "Web Developer",
	"contacts" : {
		"mobile": "0086-183 3782 8650",
        "email": "lili.lin2012@hotmail.com",
        "github":"Oyster2015",
        "location":"Ningbo, China",
        "skype":"lili_lin0609"
	    },
	"welcomeMessage": "Life is beautiful",
	"skills":["reliable","time management","creative"],
	"bioPicture" : "Downloads/IMG_8070.jpg"
}

$("#main").append(bio.name);
$("#main").append(bio.role);
$("#main").append(bio.contacts);
$("#main").append(bio.bioPicture);


/*var bio = {
"role" : "R&D Compliance Engineer Assistant",
"employer":"Ningbo David Medical Device Co. Ltd (300314)",
"years":"08.2015 — Present",
"city":"Ningbo,China"
}*/

var bio = {};
bio.role = "R&D Compliance Engineer Assistant";
bio.employer = "Ningbo David Medical Device Co. Ltd (300314)";
bio.years = "08.2015 — Present";
bio.city = "Ningbo,China";

$("#main").append(bio.role);
$("#main").append(bio.employer);

$("#main").append(bio.years);
$("#main").append(bio.city);


var edu ={};
edu["school"] = "Imperial College London"; 
    edu["years"] = "10.2009 – 09.2010";
    edu["city"] = "London, UK";



$("#main").append(edu["school"]);


$("#main").append(edu.years);

$("#main").append(edu.city);


var education =  {
 	"schools": [{
 		"name": "Imperial College London",
 		"city": "London, UK",
 		"degree": "MSc",
 		"major": "Biomechanics"
 	}, {
 		"name": "University of Shanghai for Science and Technology (USST)",
 		"city": "Shanghai, China",
 		"degree": "BSc",
 		"major": "Biomedical Apparatus Engineering"
 	}]
 }


 