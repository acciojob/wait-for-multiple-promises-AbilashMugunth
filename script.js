
let table = document.querySelector(".table");

function createRow(i, delay) {
  // Create a new row
  let newRow = table.insertRow();
  newRow.id = `p${i}`;

  // Insert two cells (columns) into the new row
  let cell1 = newRow.insertCell(0);
  let cell2 = newRow.insertCell(1);

  // Add data to the cells
  cell1.textContent = `${i <= 3 ? "Promise " + i : "Total"}`;
  cell2.textContent = delay;
}

createRow(1, "Loading...");
createRow(2, "Loading...");
createRow(3, "Loading...");

function generateRandom() {
  const randomNumber = (Math.random() * (3 - 1) + 1).toFixed(3);
  return parseFloat(randomNumber);
}

const p1 = new Promise((resolve) => {
  let delay = generateRandom();

  setTimeout(() => {
    resolve({ message: "P1 Passed", time: delay });
  }, delay * 1000);
});

const p2 = new Promise((resolve) => {
  let delay = generateRandom();

  setTimeout(() => {
    resolve({ message: "P2 Passed", time: delay });
  }, delay * 1000);
});

const p3 = new Promise((resolve) => {
  let delay = generateRandom();

  setTimeout(() => {
    resolve({ message: "P2 Passed", time: delay });
  }, delay * 1000);
});

let promiseArr = [p1, p2, p3];

Promise.all(promiseArr).then((values) => {
  let total = 0;
  values.forEach((result, i) => {
    total += result.time;
    let row = document.getElementById(`p${i + 1}`);
    row.children[1].textContent = result.time;
  });
createRow(4, parseFloat(total.toFixed(3)));
});
