
// table
document.getElementById("form").addEventListener("submit", function(event) {
    event.preventDefault(); 


let theName = document.getElementById("username").value;
let g = document.getElementById("grade").value;
let number = document.getElementById("phonenumber").value;
let bir = document.getElementById("birthday").value;

let gender;

if ( document.getElementById("Male").checked) {
    gender = "Male";

} else if (document.getElementById("Female").checked) {
    gender = "Female";
}



let row = document.createElement("tr")
let r = document.createElement("td")
let ro = document.createElement("td")
let roww = document.createElement("td")
let rowww = document.createElement("td")
let rowwww = document.createElement("td")

r.innerHTML = [`${theName}`];
ro.innerHTML = [`${bir}`];
roww.innerHTML = [`${gender}`];
rowww.innerHTML = [`${number}`];
rowwww.innerHTML = [`${g}`];


row.appendChild(r);
row.appendChild(ro);
row.appendChild(roww);
row.appendChild(rowww);
row.appendChild(rowwww);

document.getElementById("body").appendChild(row);

});


// ----------------------------------------------------------------




// function Student(fullName, birthday, number, bir, Gender, Major, ImageURL) {

//     this.fullName = fullName; 
//     this.birthday = birthday;
//     this.number = number;
//     this.bir = bir;
//     this.Gender = Gender;
//     this.Major = Major;
//     this.ImageURL = ImageURL;
// }

// document.getElementById("form").addEventListener("submit", function(event) {
//     event.preventDefault(); 

// let fullName = document.getElementById("username").value;
// let g = document.getElementById("grade").value;
// let number = document.getElementById("phonenumber").value;
// let bir = document.getElementById("birthday").value;
// let gender;

// if ( document.getElementById("Male").checked) {
//     gender = "Male";

// } else if (document.getElementById("Female").checked) {
//     gender = "Female";
// }

// let Major;

// if ( document.getElementById("Administration").checked) {
//     Major = "Administration";

// } else if (document.getElementById("IT").checked) {
//     Major = "IT";
    
// } else if (document.getElementById("Science").checked) {
//     Major = "Science";


// }else if (document.getElementById("Art").checked) {
//     Major = "Art";

// }


// });







// constructor

// class Student {

//     constructor (name,date,Phone,grade) {     
//         this.name = name;
//         this.date = date;
//         // this.gender = gender;
//         this.Phone = Phone;
//         this.grade = grade;
//     }
//       myfunction(...a){
//         let arr=[];

//         arr.push(a);
//         console.log(arr)
      
//           localStorage.setItem("Students", JSON.stringify(a));
//       }
//  }

// let submit= document.getElementById("S")
//  submit.addEventListener("click" , (eventt) => {
//     eventt.preventDefault();

//     let card = document.createElement("div");
//     card.style.border = "3px solid black";
//     card.style.marginLeft="15px"
//     card.style.marginTop="10px"
//     card.style.width="120px"


//     let imgg = document.createElement("img");
//     imgg.src="img/profile.jpg"
   

//     let name= document.createElement("div")
//     let date= document.createElement("div")
//     // let gender= document.createElement("div")
//     let Phone= document.createElement("div")
//     let grade= document.createElement("div")



//     name.innerHTML=document.getElementById("username").value;
//     date.innerHTML=document.getElementById("birthday").value;
//     // gender.innerHTML=document.getElementsByName("gender").value;
//     Phone.innerHTML=document.getElementById("phonenumber").value;
//     grade.innerHTML=document.getElementById("grade").value;
 



//    let nName = document.getElementById("username").value;
//    let nDate = document.getElementById("birthday").value;
// //    let nGender = document.getElementById("gender").value;
//    let nPhone = document.getElementById("phonenumber").value;
//    let nGrade = document.getElementById("grade").value;



   

//    let hh = new Student(name,date,Phone,grade);   
//    hh.myfunction([nName,nDate,nPhone,nGrade]);

//     card.appendChild(imgg);
//     card.appendChild(name);
//     card.appendChild(date);
//     // card.appendChild(gender);
//     card.appendChild(Phone);
//     card.appendChild(grade);


//     let cardSIn = document.getElementById("cardSIn");
    
//     cardSIn.appendChild(card);

// });