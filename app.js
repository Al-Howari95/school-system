
// table
// document.getElementById("form").addEventListener("submit", function(event) {
//     event.preventDefault(); 


// let theName = document.getElementById("username").value;
// let g = document.getElementById("grade").value;
// let number = document.getElementById("phonenumber").value;
// let bir = document.getElementById("birthday").value;

// let gender;

// if ( document.getElementById("Male").checked) {
//     gender = "Male";

// } else if (document.getElementById("Female").checked) {
//     gender = "Female";
// }



// let row = document.createElement("tr")
// let r = document.createElement("td")
// let ro = document.createElement("td")
// let roww = document.createElement("td")
// let rowww = document.createElement("td")
// let rowwww = document.createElement("td")

// r.innerHTML = [`${theName}`];
// ro.innerHTML = [`${bir}`];
// roww.innerHTML = [`${gender}`];
// rowww.innerHTML = [`${number}`];
// rowwww.innerHTML = [`${g}`];


// row.appendChild(r);
// row.appendChild(ro);
// row.appendChild(roww);
// row.appendChild(rowww);
// row.appendChild(rowwww);

// document.getElementById("body").appendChild(row);

// });


// ----------------------------------------------------------------


// constructor


class Student {
    constructor(Name, gender, number, date, Image , Major) {
        this.Name = Name;
        this.gender = gender;
        this.number = number;
        this.date = date;
        this.Image = Image;
        this.Major = Major;
    }
}


function saveForm(student) {
    let students = JSON.parse(localStorage.getItem('students')) || [];
    students.push(student);
    localStorage.setItem('students', JSON.stringify(students));
}


function displaySavedData() {
    let students = JSON.parse(localStorage.getItem('students')) || [];

    let result = document.getElementById("cardSIn");
    result.innerHTML = '';

    students.forEach(student => {
        let card = document.createElement("div");
        card.style.border = "3px solid black";
        card.style.marginLeft = "20px";
        card.style.marginTop = "10px";
        card.style.width = "250px";
        card.style.height= "250px";

        let image = document.createElement("img");
        image.src = "img/profile.jpg"; 

        let name = document.createElement("p");
        let datea = document.createElement("p");
        let Phone = document.createElement("p");
        let gender = document.createElement("p");

        card.appendChild(image);
        card.appendChild(name);
        card.appendChild(datea);
        card.appendChild(Phone);
        card.appendChild(gender);

        name.innerHTML = `Name : ${student.Name}`;
        datea.innerHTML = `Date : ${student.date}`;
        Phone.innerHTML = `Phone number : ${student.number}`;
        gender.innerHTML = `Gender : ${student.gender}`;

        result.appendChild(card);
    });
}

document.getElementById("form").addEventListener("submit", function (event) {
    event.preventDefault();

    let Name = document.getElementById("username").value;

    let gender;

    if (document.getElementById("Male").checked) {
        gender = "Male";
    } else if (document.getElementById("Female").checked) {
        gender = "Female";
    }

    let number = document.getElementById("phonenumber").value;
    let date = document.getElementById("birthday").value;
    let Image = document.getElementById("image-url").value;
    // let Majors = document.getElementsByName("c")

    let student = new Student(Name, gender, number, date, Image);

    saveForm(student);
    displaySavedData();
});


displaySavedData();



