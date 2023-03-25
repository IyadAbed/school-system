const form = document.getElementById("form");
const table = document.getElementById("table");
form.addEventListener("submit", (event) => {
  event.preventDefault();
  let stdName = event.target.fName.value;
  let date = event.target.date.value;
  let gender = event.target.gender.value;
  let phoneN = event.target.phoneN.value;
  let grade = event.target.grade.value;
  render(stdName, date, gender, phoneN, grade);
  console.log(stdName, date, gender, phoneN, grade);
});

let table1 = document.createElement("table");
table.appendChild(table1);
let th = document.createElement("th");
let th2 = document.createElement("th");
let th3 = document.createElement("th");
let th4 = document.createElement("th");
let th5 = document.createElement("th");
th.textContent = "STD NAME";
table1.appendChild(th);
th2.textContent = "Date of Birth";
table1.appendChild(th2);
th3.textContent = "Gender";
table1.appendChild(th3);
th4.textContent = "Phone Number";
table1.appendChild(th4);
th5.textContent = "Grade";
table1.appendChild(th5);

function render(stdName, date, gender, phoneN, grade) {
  let tr = document.createElement("tr");
  table1.appendChild(tr);
  let td = document.createElement("td");
  tr.appendChild(td);
  td.textContent = stdName;
  let td2 = document.createElement("td");
  tr.appendChild(td2);
  td2.textContent = date;
  let td3 = document.createElement("td");
  tr.appendChild(td3);
  td3.textContent = gender;
  let td4 = document.createElement("td");
  tr.appendChild(td4);
  td4.textContent = phoneN;
  let td5 = document.createElement("td");
  tr.appendChild(td5);
  td5.textContent = grade;
}

