// const form = document.getElementById("form");
// const table = document.getElementById("table");
// form.addEventListener("submit", (event) => {
//   event.preventDefault();
//   let stdName = event.target.fName.value;
//   let date = event.target.date.value;
//   let gender = event.target.gender.value;
//   let phoneN = event.target.phoneN.value;
//   let grade = event.target.grade.value;
//   render(stdName, date, gender, phoneN, grade);
//   console.log(stdName, date, gender, phoneN, grade);
//   form.reset();
// });

// let table1 = document.createElement("table");
// table.appendChild(table1);
// let th = document.createElement("th");
// let th2 = document.createElement("th");
// let th3 = document.createElement("th");
// let th4 = document.createElement("th");
// let th5 = document.createElement("th");
// th.textContent = "STD NAME";
// table1.appendChild(th);
// th2.textContent = "Date of Birth";
// table1.appendChild(th2);
// th3.textContent = "Gender";
// table1.appendChild(th3);
// th4.textContent = "Phone Number";
// table1.appendChild(th4);
// th5.textContent = "Grade";
// table1.appendChild(th5);

// function render(stdName, date, gender, phoneN, grade) {
//   let tr = document.createElement("tr");
//   table1.appendChild(tr);
//   let td = document.createElement("td");
//   tr.appendChild(td);
//   td.textContent = stdName;
//   let td2 = document.createElement("td");
//   tr.appendChild(td2);
//   td2.textContent = date;
//   let td3 = document.createElement("td");
//   tr.appendChild(td3);
//   td3.textContent = gender;
//   let td4 = document.createElement("td");
//   tr.appendChild(td4);
//   td4.textContent = phoneN;
//   let td5 = document.createElement("td");
//   tr.appendChild(td5);
//   td5.textContent = grade;
// }
////////////////////////////////////////////////////////////////////////////////////////////
let form = document.getElementById("form");
let stData = JSON.parse(localStorage.getItem("stData")) || [];
render();

form.addEventListener("submit", (event) => {
  let stdName = event.target.fName.value;
  let date = event.target.date.value;
  let gender = event.target.gender.value;
  let phoneN = event.target.phoneN.value;
  let Major = event.target.Major.value;
  let image = event.target.image.value;
  let newStudent = new student(stdName, date, gender, phoneN, Major, image);
  stData.push(newStudent);
  localStorage.setItem("stData", JSON.stringify(stData));
  render();
  form.reset();
});

function student(stdName, date, gender, phoneN, Major, image) {
  this.stdName = stdName;
  this.date = date;
  this.gender = gender;
  this.phoneN = phoneN;
  this.Major = Major;
  this.image = image;
}

function render() {
  for (let i = 0; i < stData.length; i++) {
    let container = document.getElementById("submited");
    let imagee = document.createElement("img");
    let card = document.createElement("div");
    let cardName = document.createElement("h3");
    let cardUl = document.createElement("ul");
    let cardDate = document.createElement("li");
    let cardGender = document.createElement("li");
    let cardMajor = document.createElement("li");
    let cardPhone = document.createElement("li");

    cardName.textContent = `Student Name: ${stData[i].stdName}`;
    cardDate.textContent = `Date of Birth: ${stData[i].date}`;
    cardGender.textContent = `Gender: ${stData[i].gender}`;
    cardMajor.textContent = `Major: ${stData[i].Major}`;
    cardPhone.textContent = `Phone Number: ${stData[i].phoneN}`;
    imagee.src = `${stData[i].image}`;

    container.className = "card me-5 w-25 d-inline-block";
    imagee.className = "card-img-top w-25";
    card.className = "card-body";
    cardName.className = "card-text";
    cardUl.className = "list-group";
    cardDate.className = "list-group-item";
    cardGender.className = "list-group-item";
    cardMajor.className = "list-group-item";
    cardPhone.className = "list-group-item";

    cardUl.appendChild(cardDate);
    cardUl.appendChild(cardGender);
    cardUl.appendChild(cardMajor);
    cardUl.appendChild(cardPhone);

    card.appendChild(cardName);
    card.appendChild(cardUl);

    container.appendChild(imagee);
    container.appendChild(card);
  }
}
