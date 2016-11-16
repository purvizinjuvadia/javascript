
var bio = {                                   //This is object
  "name" : "Purvi Zinjuvadia",
  "role" : "web developer",
  "contacts" : {                                   // This is also object
         "mobile": "408-888-3000",                 // with key value pair
         "email":  "purvi.zinjuvadia@gmail.com",
         "github": "purvizinjuvadia",
         "location": "milpitas"
  },
 "welcomeMsg": "Hello  I am still Learningcd ..",
 "skills" : ["awesomeness", " programming" , " teaching"," js"], // array
 "bioPic" : "images/fry.jpg"
}

bio.display = function() {
    var formattedName = HTMLheaderName.replace("%data%", bio.name);
    $("#header").prepend(formattedName);
    var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
    $("#header").append(formattedRole);
    var formattedBiopic = HTMLbioPic.replace("%data%", bio.bioPic);
    $("#header").append(formattedBiopic);
    var formattedMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
    $("#topContacts").append(formattedMobile);
    var formattedEmail = HTMLemail.replace("%data%", bio.contacts.email);
    $("#topContacts").append(formattedEmail);
    var formattedGithub = HTMLgithub.replace("%data%", bio.contacts.github);
    $("#topContacts").append(formattedGithub);
    var formattedLocation = HTMLlocation.replace("%data%", bio.contacts.location);
    $("#topContacts").append(formattedLocation);

    var formattedMsg = HTMLwelcomeMsg.replace("%data%", bio.welcomeMsg);
    $("#header").append(formattedMsg);
    $("#header").append(HTMLskillsStart);
    var formattedSkill = HTMLskills.replace("%data%",bio.skills[0]);
    $("#header").append(formattedSkill);
    var formattedSkill = HTMLskills.replace("%data%",bio.skills[1]);
    $("#header").append(formattedSkill);
    var formattedSkill = HTMLskills.replace("%data%",bio.skills[2]);
    $("#header").append(formattedSkill);
    var formattedSkill = HTMLskills.replace("%data%",bio.skills[3]);
    $("#header").append(formattedSkill);

}
bio.display();



var education = {
  "schools" : [
     {
       "name": "Eckerd College",
       "location": "Saint Petersburg, FL, US",
       "degree" : "BA",
       "major" :["CompSci", "French"],
       "dates": 2013,
       "url": "http://example.com"
     },
     {
       "name" : "Nova Southeastern University",
       "location": "Fort Lauderdale, FL, US",
       "degree" : "Masters",
       "majors" : ["CompSci"],
       "dates" : 2013,
       "url": "http://example.com"
     }
   ],
  "onlineCourses": [
             {
              "title": "Javascript Basics",
              "school": "Udacity",
              "dates": 2016,
              "url": "https://classroom.udacity.com/courses/ud804"
            },
            {
              "title" : "Into to HTML and CSS",
              "school": "Udacity",
              "dates": 2016,
              "url": "https://classroom.udacity.com/courses/ud304"
            },
            {
              "title" : "Into to Git and Github",
              "school": "Udacity",
              "dates": 2016,
              "url": "https://classroom.udacity.com/courses/ud775"
            },
            {
              "title" : "Responsive Web Design Fundaments",
              "school": "Udacity",
              "dates": 2016,
              "url": "https://classroom.udacity.com/courses/ud893"
            }
  ]
}

education.display = function() {
  for (school in education.schools) {
    $("#education").append(HTMLschoolStart);
    var formattedName = HTMLschoolName.replace("%data%", education.schools[school].name);
    $(".education-entry:last").append(formattedName);
    // var formattedLocation = HTMLschoolLocation.replace("%data%", education.schools[school].location);
    // $(".education-entry:last").append(formattedLocation);
    // var formattedDegree = HTMLschoolDegree.replace("%data%", education.schools[school].degree);
    // $(".education-entry:last").append(formattedDegree);
    var formattedDates = HTMLschoolDates.replace("%data%", education.schools[school].dates);
    $(".education-entry:last").append(formattedDates);
    var formattedMajor = HTMLschoolMajor.replace("%data%", education.schools[school].majors);
    $(".education-entry:last").append(formattedMajor);
  }
  for (course in education.onlineCourses) {
    // $("#education").append(HTMLonlineClasses);
    var formattedTitle = HTMLonlineTitle.replace("%data%", education.onlineCourses[course].title);
    $(".education-entry:last").append(formattedTitle);
    // var formattedLocation = HTMLschoolLocation.replace("%data%", education.schools[school].location);
    // $(".education-entry:last").append(formattedLocation);
    // var formattedDegree = HTMLschoolDegree.replace("%data%", education.schools[school].degree);
    // $(".education-entry:last").append(formattedDegree);
    var formattedSchool = HTMLonlineSchool.replace("%data%", education.onlineCourses[course].school);
    $(".education-entry:last").append(formattedSchool);
    var formattedDates = HTMLonlineDates.replace("%data%", education.onlineCourses[course].dates);
    $(".education-entry:last").append(formattedDates);
  }


}



education.display();


var work = {
  "jobs" : [
     {
       "employer" : "Planet Express",
       "title" : "Delivery Boy",
       "dates" : "January 3000 - Future",
       "description" : "Who moved my cheese jfjsdfjjljlj;fsd;fjsk"
     },
     {
       "employer" : "Pizza Express",
       "title" : "Delivery Boy",
       "dates" : "1998- December 31, 1999",
       "description" : "Who moved my cheese jfjsdfjjljlj;fsd;fjsk"
     }
   ]
 }
function displayWork() {
// or work.display()
   for (job in work.jobs) {
     $("#workExperience").append(HTMLworkStart);
     var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].
     employer);
     var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);
     var formattedEmployerTitle = formattedEmployer + formattedTitle ;
     $(".work-entry:last").append(formattedEmployerTitle);

     var formattedDates = HTMLworkDates.replace("%data%", work.jobs[job].dates);
     $(".work-entry:last").append(formattedDates);

     var formattedDescription = HTMLworkDescription.replace("%data%", work.
     jobs[job].description);
     $(".work-entry:last").append(formattedDescription);

 }

}

displayWork();


var projects = {
 "projects": [
    {
    "title" : "Sample Project 1",
    "dates" : "2016",
    "description" : "who moved csfsl;kfsdfjklfjsdkl;fjk;sdkldosidiaops",

    "images" : ["images/n1.jpg", "images/n2.jpg"]
    }

  ]

}

projects.display = function() {
  for (project in projects.projects){
    $("#projects").append(HTMLprojectStart);

    var formattedTitle = HTMLprojectTitle.replace("%data%",projects
    .projects[project].title);
    $(".project-entry:last").append(formattedTitle);

    var formattedDates = HTMLprojectDates.replace("%data%",projects
    .projects[project].dates);
    $(".project-entry:last").append(formattedDates);

    var formattedDescription = HTMLprojectDescription.
    replace("%data%",projects.projects[project].description);
    $(".project-entry:last").append(formattedDescription);

    // if(projects.projects[project].images.length > 0) {
    //   for(image in projects.project[project].images) {
    //     var formattedImagee = HTMLprojectImage.replace("%data%",projects.projects[project].images[image]);
    //     $(".project-entry:last").append(formattedImage);
    //   }
    // }

  }
}
projects.display();




$(document).click(function(loc) {
  var x = loc.pageX;
  var y =loc.pageY;

  logClicks(x,y);
});


function inName(name) {
  name = name.trim().split(" ");
  name[0] = name[0].slice(0,1).toUpperCase() + names[0].slice(1).toLowerCase();
  name[1] = name[1].toUpperCase();
  //name = names.join(" ");

  return name[0] + " " + name[1];
  }

  //console.log(inName("purvi zinjuvadia"));
  $("#main").append(internationalizeButton);

  $("#mapDiv").append(googleMap);
