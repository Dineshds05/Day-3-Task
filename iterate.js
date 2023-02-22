     // JSON Resume with iterations and ForEach, For of, For in

// Arrow Function
const log = (param)=>console.log(param);
// Object creation
let title= "CV - Resume"
log("..........Objects.............")
let ResumeObj1 = {
    Name : "Dineshkumar",
    Sonof : "M.Ramalingam",
    Age : 25,
    Email : "dineshbsc884@gmail.com",
    Contact : 8838464921
    
}
log(ResumeObj1);
log("....object Iterations.....")
log(ResumeObj1.Name);
log(ResumeObj1.Sonof);
log(ResumeObj1.Age);
log(ResumeObj1.Email);
log(ResumeObj1.Contact);
//object creation within array
log("................Objects with Array..........")
let EducationalObj2 = [{
    Degree1 : "PG - MCA",
    Yearofpassing : 2019,
    Result : "Firstclass",
    CollegeName : "Adhiparasakthi Engineering College - Melmaruvathur",
    University : "Anna University - Chennai"
},
{
    Degree2 : "UG - Bsc(Computer science)",
    Yearofpassing : 2017,
    Result : "Firstclass",
    CollegeName : "Sri Malolan Arts and Science - Madurantakam",
    University : "UNOM - Chennai"
},
{
    HSC : 12,
    SchoolName : "Government Higher Sec School - Karunguzhi",
    Result : "Pass"
},
]
log(EducationalObj2);
log(".......Array of objects Iterations..........")
log(EducationalObj2[0]);
log(EducationalObj2[1]);
log(EducationalObj2[0].Degree1);
log(EducationalObj2[1].Degree2);
log(EducationalObj2[2].HSC);

 log("................ForEach..................");
 // For Each - only access array of object
 EducationalObj2.forEach((Value, index, Actualarr)=>
 {
  log(Value, index, Actualarr);
 })
 
 //For in
 //in array index
 log("............For in..............")
 for(n in EducationalObj2){
    console.log(n);
 }
 //in objects iterations - Access only objects
 for(objects in ResumeObj1)
 {
    console.log(objects,":",ResumeObj1[objects])
 }

 //For of
 log("...........For of...........")
 for(m of EducationalObj2)
 {
    log(m,EducationalObj2[m]);
 }
 //For of - String
 for(l of title){
    log(l)
 }




 // Window , Document , Screen

 // Window property
 log(window);

 // Document
log(window.document);//or log(document);

//Screen
// A screen is a small information object about physical screen dimentions.
//It can be used to display screen width, height,color depth,pixel depth etc.
log(screen);