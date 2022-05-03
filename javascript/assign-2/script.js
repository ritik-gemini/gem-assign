displayDetails();

function validate() {
  let name = document.getElementById("name");
  let email = document.getElementById("email");
  let pno = document.getElementById("pno");

  let small = document.getElementsByTagName("small");
  let allValid = true;

  let validName = /^[a-zA-Z\s]+$/.test(name.value);
  let validEmail = /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/.test(email.value);
  let validMobile = /^[789]\d{9}$/.test(pno.value);

  if (!validName) {
    small[0].style.visibility = "visible";
    name.style.borderColor = "red";
    allValid = false;
  } else {
    small[0].style.visibility = "hidden";
    name.style.borderColor = "#CED4DA";
  }
  if (!validEmail) {
    small[1].style.visibility = "visible";
    email.style.borderColor = "red";
    allValid = false;
  } else {
    small[1].style.visibility = "hidden";
    email.style.borderColor = "#CED4DA";
  }
  if (pno.value === "" || validMobile) {
    small[2].style.visibility = "hidden";
    pno.style.borderColor = "#CED4DA";
  } else {
    small[2].style.visibility = "visible";
    allValid = false;
    pno.style.borderColor = "red";
  }

  if (allValid) {
    insertData(name.value, email.value, pno.value);
  }
}

function insertData(name, email, pno) {
  let details = {
    name: name,
    email: email,
    pno: pno
  };
  localStorage.setItem(name, JSON.stringify(details));

  document.getElementsByTagName("form")[0].reset();
  
  createRow(c, details.name, details.email, details.pno);
}

function displayDetails() {
  let keys = [
    "length",
    "clear",
    "getItem",
    "key",
    "removeItem",
    "setItem",
    "index",
  ];
  let c = 1
  for (var key in localStorage) {
    if (!keys.includes(key)) {
      let details = JSON.parse(localStorage.getItem(key));
      createRow(c, details.name, details.email, details.pno);
      c += 1;
    }
  }
}

function createRow(no, name, email, pno) {
  var tr = document.createElement("tr");

  var td1 = document.createElement("th");
  var td2 = document.createElement("td");
  var td3 = document.createElement("td");
  var td4 = document.createElement("td");

  var text1 = document.createTextNode(no);
  var text2 = document.createTextNode(name);
  var text3 = document.createTextNode(email);
  var text4 = document.createTextNode(pno);

  td1.appendChild(text1);
  td2.appendChild(text2);
  td3.appendChild(text3);
  td4.appendChild(text4);

  tr.appendChild(td1);
  tr.appendChild(td2);
  tr.appendChild(td3);
  tr.appendChild(td4);

  document.querySelector("tbody").append(tr);


}
