interface Student {
  firstName: string;
  lastName: string;
  age: number;
  location: string;
}

const student1: Student = {
  firstName: "John",
  lastName: "Doe",
  age: 20,
  location: "New York"
};

const student2: Student = {
  firstName: "Jane",
  lastName: "Smith",
  age: 21,
  location: "Los Angeles"
};

const studentsList: Student[] = [student1, student2];

// Create table element
const table: HTMLTableElement = document.createElement("table");
table.border = "1";
table.style.borderCollapse = "collapse";
table.style.marginTop = "20px";

// Create header row
const headerRow: HTMLTableRowElement = table.insertRow(0);
const headerCell1: HTMLTableCellElement = headerRow.insertCell(0);
const headerCell2: HTMLTableCellElement = headerRow.insertCell(1);
headerCell1.textContent = "First Name";
headerCell2.textContent = "Location";
headerCell1.style.padding = "10px";
headerCell2.style.padding = "10px";
headerCell1.style.border = "1px solid black";
headerCell2.style.border = "1px solid black";

// Add student rows to table
studentsList.forEach((student: Student, index: number): void => {
  const row: HTMLTableRowElement = table.insertRow(index + 1);
  const cell1: HTMLTableCellElement = row.insertCell(0);
  const cell2: HTMLTableCellElement = row.insertCell(1);
  cell1.textContent = student.firstName;
  cell2.textContent = student.location;
  cell1.style.padding = "10px";
  cell2.style.padding = "10px";
  cell1.style.border = "1px solid black";
  cell2.style.border = "1px solid black";
});

// Append table to document body
document.body.appendChild(table);