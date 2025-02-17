let income = document.querySelector(".income");
let expense = document.querySelector(".expense");
let totalIncome = document.querySelector(".totalIncome");
let totalExpense = document.querySelector(".totalExpense");
let difference = document.querySelector(".difference");
let moneys = [];
let id = 0;

if (localStorage.moneys) {
  moneys = JSON.parse(localStorage.moneys);
  renderMoneys();
  addData.disabled = true;
} else {
  addData.disabled = false;
}

if (localStorage.id) {
  id = Number(localStorage.id);
}

function generateId() {
  id++;
  localStorage.id = id;
  return id;
}

addData.addEventListener("click", function () {
  moneys = [
    ...moneys,
    { id: 1, name: "Gelir Kaynağı 1", type: "gelir", money: 3481 },
    { id: 2, name: "Gelir Kaynağı 2", type: "gelir", money: 8420 },
    { id: 3, name: "Gelir Kaynağı 3", type: "gelir", money: 1013 },
    { id: 4, name: "Gelir Kaynağı 4", type: "gelir", money: 9057 },
    { id: 5, name: "Gelir Kaynağı 5", type: "gelir", money: 4976 },
    { id: 6, name: "Gelir Kaynağı 6", type: "gelir", money: 2134 },
    { id: 7, name: "Gelir Kaynağı 7", type: "gelir", money: 6574 },
    { id: 8, name: "Gelir Kaynağı 8", type: "gelir", money: 7812 },
    { id: 9, name: "Gelir Kaynağı 9", type: "gelir", money: 3325 },
    { id: 10, name: "Gelir Kaynağı 10", type: "gelir", money: 9187 },
    { id: 11, name: "Gider Kaynağı 1", type: "gider", money: 1249 },
    { id: 12, name: "Gider Kaynağı 2", type: "gider", money: 3210 },
    { id: 13, name: "Gider Kaynağı 3", type: "gider", money: 1987 },
    { id: 14, name: "Gider Kaynağı 4", type: "gider", money: 2976 },
    { id: 15, name: "Gider Kaynağı 5", type: "gider", money: 1876 },
    { id: 16, name: "Gider Kaynağı 6", type: "gider", money: 3450 },
    { id: 17, name: "Gider Kaynağı 7", type: "gider", money: 2100 },
    { id: 18, name: "Gider Kaynağı 8", type: "gider", money: 1750 },
    { id: 19, name: "Gider Kaynağı 9", type: "gider", money: 4890 },
    { id: 20, name: "Gider Kaynağı 10", type: "gider", money: 3021 },
  ];
  save();
  renderMoneys();
  addData.disabled = true;
});

addMoneyBtn.addEventListener("click", () => {
  modal.classList.remove("editModal");
  document.querySelector('input[name = "id"]').value = "";
  modal.showModal();
});

function handleMovieForm() {
  let formData = new FormData(addMoneyForm);
  let formObj = Object.fromEntries(formData);
  addMoneyForm.reset();

  if (formObj.id !== "") {
    let money = moneys.find((x) => x.id === Number(formObj.id));
    money.type = formObj.type;
    money.money = formObj.money;
    money.name = formObj.name;
  } else {
    formObj.id = generateId();
    moneys.push(formObj);
  }
  save();
  renderMoneys();
}

addMoneyForm.addEventListener("submit", handleMovieForm);

function save() {
  localStorage.moneys = JSON.stringify(moneys);
}

function createMoneyHtml(money) {
  return `
  <div class="movie">
       
         <tr>
          <th>AD</th>
          <th>TUTAR</th>
          <th colspan="2">AKSİYON</th>
        </tr>
      <td>${money.name}</td>
      <td>${money.money}</td>
      <td> 
          <a class="movieEditBtn" href="#" data-moneyid="${money.id}">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M471.6 21.7c-21.9-21.9-57.3-21.9-79.2 0L362.3 51.7l97.9 97.9 30.1-30.1c21.9-21.9 21.9-57.3 0-79.2L471.6 21.7zm-299.2 220c-6.1 6.1-10.8 13.6-13.5 21.9l-29.6 88.8c-2.9 8.6-.6 18.1 5.8 24.6s15.9 8.7 24.6 5.8l88.8-29.6c8.2-2.7 15.7-7.4 21.9-13.5L437.7 172.3 339.7 74.3 172.4 241.7zM96 64C43 64 0 107 0 160V416c0 53 43 96 96 96H352c53 0 96-43 96-96V320c0-17.7-14.3-32-32-32s-32 14.3-32 32v96c0 17.7-14.3 32-32 32H96c-17.7 0-32-14.3-32-32V160c0-17.7 14.3-32 32-32h96c17.7 0 32-14.3 32-32s-14.3-32-32-32H96z"/></svg>
          </a>
          
        </td>
      <td><a class="movieDeleteBtn" href="#" data-moneyid="${money.id}">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M135.2 17.7C140.6 6.8 151.7 0 163.8 0H284.2c12.1 0 23.2 6.8 28.6 17.7L320 32h96c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 96 0 81.7 0 64S14.3 32 32 32h96l7.2-14.3zM32 128H416V448c0 35.3-28.7 64-64 64H96c-35.3 0-64-28.7-64-64V128zm96 64c-8.8 0-16 7.2-16 16V432c0 8.8 7.2 16 16 16s16-7.2 16-16V208c0-8.8-7.2-16-16-16zm96 0c-8.8 0-16 7.2-16 16V432c0 8.8 7.2 16 16 16s16-7.2 16-16V208c0-8.8-7.2-16-16-16zm96 0c-8.8 0-16 7.2-16 16V432c0 8.8 7.2 16 16 16s16-7.2 16-16V208c0-8.8-7.2-16-16-16z"/></svg>
          </a></td>


      
      </div>
  `;
}

function handleDeleteBtn(e) {
  e.preventDefault();

  if (!confirm("Emin Misin ?")) {
    return;
  }

  moneys = moneys.filter((x) => x.id !== Number(this.dataset.moneyid));

  renderMoneys();
  save();
}

function handleClear() {
  localStorage.clear();
  income.innerHTML = '';
  expense.innerHTML = '';
  difference.innerText = '';
  moneys = [];
  renderMoneys();
  addMoneyForm.reset();
}

clearStorage.addEventListener("click", handleClear);

function handleEditBtn(e) {
  e.preventDefault();
  modal.classList.add("editModal");

  let moneyId = Number(this.dataset.moneyid);
  let money = moneys.find((x) => x.id === moneyId);

  document.querySelector('input[name = "id"]').value = money.id;
  document.querySelector('input[name = "name"]').value = money.name;
  document.querySelector('select[name = "type"]').value = money.type;
  document.querySelector('input[name = "money"]').value = money.money;
  modal.showModal();
}

function renderMoneys() {
  income.innerHTML = "";
  expense.innerHTML = "";

  let sumExpense = 0;
  let sumIncome = 0;
  moneys.forEach((money) => {
    if (money.type === "gelir") {
      income.innerHTML += createMoneyHtml(money);
      sumIncome += Number(money.money);

    } else if (money.type=== "gider") {
      expense.innerHTML += createMoneyHtml(money);
      sumExpense += Number(money.money);
    }
  });
  totalIncome.innerText = `
  Toplam : ${sumIncome}
  `;
  totalExpense.innerText = `
   Toplam : ${sumExpense}
  `;

  if (sumIncome > sumExpense) {
    difference.innerText = `
   Kardasın: ${sumIncome - sumExpense} 
  `;
  difference.style.color = 'blue'

  } else if (sumIncome < sumExpense) {
    difference.innerText = `
   Zarardasın: ${sumExpense - sumIncome} 
  `; 
  difference.style.color = 'red'

  } else if (sumIncome == sumExpense) {
    difference.innerText = `
   Kar Zarar Yoktur: ${sumExpense - sumIncome} 
  `;
  } 

  document
  .querySelectorAll(".movieDeleteBtn")
  .forEach((x) => x.addEventListener("click", handleDeleteBtn));

document
  .querySelectorAll(".movieEditBtn")
  .forEach((x) => x.addEventListener("click", handleEditBtn));
}