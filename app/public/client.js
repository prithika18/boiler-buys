// client-side js

//User List Form
const usersForm = document.forms[0];
const firstInput = usersForm.elements["first"];
const lastInput = usersForm.elements["last"];
const eaddInput = usersForm.elements["eadd"];
const usersList = document.getElementById("users");

//updates the user table on the page
const appendNewUser = user => {
  const newTrItem = document.createElement("tr");
  const firstTdItem = document.createElement("td");
  firstTdItem.innerHTML = user.first;
  const lastTdItem = document.createElement("td");
  lastTdItem.innerHTML = user.last;
  const eaddTdItem = document.createElement("td");
  eaddTdItem.innerHTML = user.eadd;
  const dateTdItem = document.createElement("td");
  dateTdItem.innerHTML = user.date;
  const idTdItem = document.createElement("td");
  idTdItem.innerHTML = user.id;

  newTrItem.appendChild(idTdItem);
  newTrItem.appendChild(firstTdItem);
  newTrItem.appendChild(lastTdItem);
  newTrItem.appendChild(eaddTdItem);
  newTrItem.appendChild(dateTdItem);

  const tbItem = document.getElementById("user_table");
  tbItem.appendChild(newTrItem);
};

//add a new user to the list when submitted
usersForm.onsubmit = event => {
  //stop the form submission from refreshing the page
  event.preventDefault();
  const date = new Date().toLocaleDateString();
  const data = {
    first: firstInput.value,
    last: lastInput.value,
    eadd: eaddInput.value,
    date: date
  };

  fetch("/addUser", {
    method: "POST",
    body: JSON.stringify(data),
    headers: { "Content-Type": "application/json" }
  })
    .then(res => res.json())
    .then(response => {
      console.log(JSON.stringify(response));
    });

  fetch("/getUsers", {})
    .then(res => res.json())
    .then(response => {
      response.forEach(row => {
        appendNewUser({
          id: row.id,
          first: row.firstname,
          last: row.lastname,
          eadd: row.eadd,
          date: row.datejoined
        });
      });
    });

  //reset form
  firstInput.value = "";
  firstInput.focus();
  lastInput.value = "";
  eaddInput.value = "";
};
