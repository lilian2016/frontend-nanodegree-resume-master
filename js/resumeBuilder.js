

var bio = {
    "contacts" : {
    	"name" : "Lili Lin",
    	"role" : "Web Developer",
		"mobile" : "0086-183 3782 8650",
        "email" : "lili.lin2012@hotmail.com",
        "github" : "Oyster2015",
        "location" : "Ningbo, China",
        "skype" : "lili_lin0609"
	    },
	"welcomeMessage": "Life is beautiful",
	"skills" : ["reliable","time management","creative"],
	"bioPicture" : "images/lili_lin.jpg"
};


var work =  {
 	"jobs": [{
 		"title": "R&D Compliance Engineer Assistant",
 		"employer": "Ningbo David Medical Device Co. Ltd (300314)",
 		"years": "08.2015 — Present",
 		"location": "Ningbo, China",
 		"description": "Create procedures and guidelines to ensure that governmental and industry regulations are met by manufacturers in both international and domestic markets. Working with both management and lower-level staff to coordinate information between departments."
 	}, {
 		"title": "Marketing Manager",
 		"employer": "China National Tourism Board (Branch Office in London)",
 		"years": "04.2012 - 04.2015",
 		"location": "London, UK",
 		"description":"Responsible for promoting China as a fine destination, participation of Exhibition, and FAM trip organization, etc."
 	}, {
 		"title": "Director",
 		"employer": "Lotus Garden Restaurant, London",
 		"years": "02.2011 - 07.2015",
 		"location": "London, UK",
 		"description":"Fully responsible for day to day management of a Chinese restaurant"
 	},{
 		"title": "Research Visitor",
 		"employer": "Bioengineering Department, Imperial College London",
 		"years": "11.2011 - 04.2012",
 		"location": "London, UK",
 		"description":" "
 	}]
 };



var projects = {
	"projects": [{
		    "title": "A Novel 3D Reconstruction System for Assessment of Stent Struts Distribution in Vivo",
			"dates": "10.2009 - 09.2010",
			"description": "Coding with Matlab and editing with ImageJ, to rebuild a 3D Coronary Artery Model with 2D image sequences.Finalist of the VICON Prize for Best Medical Engineering Project (23rd Annual Medical Engineering Student Project Competition).An increasing number of Coronary artery disease patients undergo Percutaneous Coronary Intervention (PCI) as their treatment method. However, for many patients, this method causes serious complications, which are partly caused by the changes in stent pattern after a stent is implanted into an artery, so stent pattern distribution measurements are significant to doctors and researchers for post surgery study. In order to analyze the changes of stent pattern, cardiovascular optical coherence tomography (OCT), which is a catheter-based intracoronary imaging system, is employed to produce high-resolution in vivo images of coronary arteries and implanted stents.The objective of the project is to evaluate the distribution pattern of the stent after it is deployed into the artery or its bifurcations, and visualize the stent pattern in 3-dimensions by using 2-D cross- section OCT image of coronary artery.",
			"images": ["images/3D_reconstruction_1.png", "images/3D_reconstruction_2.png"]
		},{
		    "title": "Assistant with designing a promotion page for China Tourism Night in London",
			"dates": "06.2014 - 08.2014",
			"description": "China Tourism Night is an event to invite all the travel agencies and tourism related business across UK and promote China as a fine travel destination, I was responsible for all the event organization and promotions feature design. ",
			"images": [""]
		},
		{
	        "title": "Portfolio Project",
			"dates": "01.2016",
			"description": "Coding with HTML and CSS, using flex-box to display the items ",
			"images": ["images/portfolio_lili_lin.png"]
	}]
};



var education =  {
 	"schools": [{
 		"schoolname": "Imperial College London",
 		"dates":"10.2009 – 09.2010",
 		"location": "London, UK",
 		"degree": "MSc",
 		"major": "Biomechanics"
 	}, {
 		"schoolname": "University of Shanghai for Science and Technology (USST)",
 		"dates":"09.2005 – 06.2009",
 		"location": "Shanghai, China",
 		"degree": "BSc",
 		"major": "Biomedical Apparatus Engineering"
 	},{
	    "schoolname": "Udacity (Online Course)",
		"dates":"12.2015 - 07.2016",
		"location": "Online",	
		"degree": "Nanodegree",
		"major":"Front-End Web Development"		
 	}]
 };

$("#mapDiv").append(googleMap);

bio.display = function() {

var formattedRole =HTMLheaderRole.replace("%data%",bio.contacts.role);
$("#header").prepend(formattedRole);

var formattedName = HTMLheaderName.replace("%data%",bio.contacts.name);
$("#header").prepend(formattedName);

var formattedMobile = HTMLmobile.replace("%data%",bio.contacts.mobile);
$("#topContacts").append(formattedMobile);
$("#footerContacts").append(formattedMobile);

var formattedEmail = HTMLemail.replace("%data%",bio.contacts.email);
$("#topContacts").append(formattedEmail);
$("#footerContacts").append(formattedEmail);

var formattedGithub = HTMLgithub.replace("%data%",bio.contacts.github);
$("#topContacts").append(formattedGithub);
$("#footerContacts").append(formattedGithub);

var formattedLocation = HTMLlocation.replace("%data%",bio.contacts.location);
$("#topContacts").append(formattedLocation);
$("#footerContacts").append(formattedLocation);

var formattedPic = HTMLbioPic.replace("%data%",bio.bioPicture);
$("#header").append(formattedPic);

var formattedMessage = HTMLWelcomeMsg.replace("%data%",bio.welcomeMessage);
$("#header").append(formattedMessage);

if(bio.skills.length > 0){
	$("#header").append(HTMLskillsStart);
	var formattedSkill = HTMLskills.replace("%data%",bio.skills[0]);
	$("#skills").append(formattedSkill);
	formattedSkill = HTMLskills.replace("%data%",bio.skills[1]);
	$("#skills").append(formattedSkill);
	formattedSkill = HTMLskills.replace("%data%",bio.skills[2]);
	$("#skills").append(formattedSkill);
}
};

bio.display();





work.display = function() {

for (var job in work.jobs){

    $("#workExperience").append(HTMLworkStart);

	var formattedEmployer = HTMLworkEmployer.replace("%data%",work.jobs[job].employer);
	var formattedTitle = HTMLworkTitle.replace("%data%",work.jobs[job].title);
	var formattedEmployerTitle = formattedEmployer + formattedTitle;
	$(".work-entry:last").append(formattedEmployerTitle);

    var formattedDates = HTMLworkDates.replace("%data%",work.jobs[job].years);
    $(".work-entry:last").append(formattedDates);

    var formattedLocation = HTMLworkLocation.replace("%data%",work.jobs[job].location);
    $(".work-entry:last").append(formattedLocation);

    var formattedDescription = HTMLworkDescription.replace("%data%",work.jobs[job].description);
	$(".work-entry:last").append(formattedDescription);
	 
}
};


work.display();


projects.display = function() {

	for (var project in projects.projects) {
		$("#projects").append(HTMLprojectStart);

		var formattedTitle = HTMLprojectTitle.replace("%data%", projects.projects[project].title);
		$(".project-entry:last").append(formattedTitle);

		var formattedDates = HTMLprojectDates.replace("%data%", projects.projects[project].dates);
		$(".project-entry:last").append(formattedDates);

		var formattedDescription = HTMLprojectDescription.replace("%data%", projects.projects[project].description);
		$(".project-entry:last").append(formattedDescription);

		if (projects.projects[project].images.length > 0) {
			for (var image = 0; image < projects.projects[project].images.length; image++) {
				var formattedImage = HTMLprojectImage.replace("%data%", projects.projects[project].images[image]);

				$(".project-entry:last").append(formattedImage);
			}
		}
	}
};

projects.display();


education.display = function() {
	for (var school in education.schools) {
		$("#education").append(HTMLschoolStart);

		var formattedName = HTMLschoolName.replace("%data%", education.schools[school].schoolname);
		var formattedDegree = HTMLschoolDegree.replace("%data%", education.schools[school].degree);
		$(".education-entry:last").append(formattedName + formattedDegree);

		var formattedLocation = HTMLschoolLocation.replace("%data%", education.schools[school].location);
		$(".education-entry:last").append(formattedLocation);

		var formattedDates = HTMLschoolDates.replace("%data%", education.schools[school].dates);
		$(".education-entry:last").append(formattedDates);

	    var formattedMajor = HTMLschoolMajor.replace("%data%", education.schools[school].major);
	    $(".education-entry:last").append(formattedMajor);
			
		
	}

	
};

education.display();


function inName(name) {
	name = bio.contacts.name.trim().split(" ");
	console.log(name);
	name[0] = name[0].slice(0,1).toUpperCase() + name[0].slice(1).toLowerCase();
	name[1] = name[1].toUpperCase();
	//finalName = name.join(" ");
	return name[0] + "  " + name[1];
}

$("#main").append(internationalizeButton);
console.log(inName(bio.name));


$("#mapDiv").append(googleMap);



















