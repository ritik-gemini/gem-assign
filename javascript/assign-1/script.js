document.body.style = "background-color: #8EC5FC; background-image: linear-gradient(62deg, #8EC5FC 0%, #E0C3FC 100%); display: flex; align-items: center; justify-content: center; height: 95vh";

var table = document.createElement("table");
table.style.width = '100%';
table.style.borderCollapse = "collapse";
table.style.border = "2px solid black";
table.style.fontFamily = "arial";

function createRow(name, age, dob, email, company, tstyle) {

  var tr = document.createElement("tr");

  var td1 = document.createElement("td");
  var td2 = document.createElement("td");
  var td3 = document.createElement("td");
  var td4 = document.createElement("td");
  var td5 = document.createElement("td");

  var text1 = document.createTextNode(name);
  var text2 = document.createTextNode(age);
  var text3 = document.createTextNode(dob);
  var text4 = document.createTextNode(email);
  var text5 = document.createTextNode(company);

  td1.appendChild(text1);
  td2.appendChild(text2);
  td3.appendChild(text3);
  td4.appendChild(text4);
  td5.appendChild(text5);

  td1.style.cssText = tstyle;
  td2.style.cssText = tstyle;
  td3.style.cssText = tstyle;
  td4.style.cssText = tstyle;
  td5.style.cssText = tstyle;
  
  tr.appendChild(td1);
  tr.appendChild(td2);
  tr.appendChild(td3);
  tr.appendChild(td4);
  tr.appendChild(td5);
  
  table.appendChild(tr);

  document.body.appendChild(table);
}



createRow("Name", "Age", "DOB", "Email", "Company", "border: 1px solid black; padding: 1rem; text-align: center; font-weight: bolder; font-size: 18px");
createRow("RITIK", "21", "12 Jun", "ritik@gmail.com", "Gemini Solutions", "border: 1px solid black; padding: 1rem; text-align: center");
createRow("ABC", "20", "10 Feb", "abc@gmail.com", "Capegemini", "border: 1px solid black; padding: 1rem; text-align: center");
createRow("EFG", "19", "1 Apr", "efg@gmail.com", "Wipro", "border: 1px solid black; padding: 1rem; text-align: center");
createRow("MNO", "32", "10 Dec", "mno@gmail.com", "Infosys", "border: 1px solid black; padding: 1rem; text-align: center");
createRow("XYZ", "51", "21 Mar", "xyz@gmail.com", "TCS", "border: 1px solid black; padding: 1rem; text-align: center");