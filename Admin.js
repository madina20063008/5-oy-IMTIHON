
function addStudent() {
    let table = document.getElementById("studentTable");
    let row = table.insertRow();
    row.innerHTML = `
                <td>New Student</td>
                <td>new@gmail.com</td>
                <td>0000000000</td>
                <td>000000</td>
                <td>
                    <button><img src="./images/Vector.svg" alt=""></button>
                    <button onclick="editStudent(this)">Edit</button>
                    <button onclick="deleteStudent(this)">Delete</button>
                </td>`;
}

let editingRow = null;
document.getElementById("addStudentBtn").addEventListener("click", function () {
    openForm();
});

function openForm() {
    document.getElementById("studentForm").style.display = "flex";
}

function closeForm() {
    document.getElementById("studentForm").style.display = "none";
    document.getElementById("formTitle").innerText = "Add New Student";
    editingRow = null;
}


function submitForm() {
    let name = document.getElementById("studentName").value;
    let email = document.getElementById("studentEmail").value;
    let phone = document.getElementById("studentPhone").value;
    let enroll = document.getElementById("studentEnroll").value;
    let imgInput = document.getElementById("studentImage");
    let imgSrc = imgInput.files.length > 0 ? URL.createObjectURL(imgInput.files[0]) : "";

    if (editingRow) {

        editingRow.cells[1].innerText = name;
        editingRow.cells[2].innerText = email;
        editingRow.cells[3].innerText = phone;
        editingRow.cells[4].innerText = enroll;

        if (imgSrc) {
            editingRow.cells[0].innerHTML = `<img src="${imgSrc}" width="50">`;
        }

        editingRow = null;
    } else {

        let table = document.getElementById("studentTable");
        let row = table.insertRow();
        row.insertCell(0).innerHTML = imgSrc ? `<img src="${imgSrc}" width="50">` : "";
        row.insertCell(1).innerText = name;
        row.insertCell(2).innerText = email;
        row.insertCell(3).innerText = phone;
        row.insertCell(4).innerText = enroll;

        let actionCell = row.insertCell(5);
        actionCell.classList.add("buttons");
        actionCell.innerHTML = `
            <button><img src="./images/Vector.svg" alt=""></button>
            <button onclick="editStudent(this)"><img src="./images/Vector.png" alt="Edit"></button>
            <button onclick="deleteStudent(this)"><img src="./images/trash 1.png" alt="Delete"></button>
        `;
    }
    resetForm();
    saveStudents();
    closeForm();
}


function editStudent(button) {
    editingRow = button.parentNode.parentNode;
    document.getElementById("studentName").value = editingRow.cells[1].innerText;
    document.getElementById("studentEmail").value = editingRow.cells[2].innerText;
    document.getElementById("studentPhone").value = editingRow.cells[3].innerText;
    document.getElementById("studentEnroll").value = editingRow.cells[4].innerText;
    document.getElementById("studentForm").style.display = "flex";
    document.getElementById("formTitle").innerText = "Edit Student";
    openForm();
    resetForm();
}

function deleteStudent(button) {
    let row = button.parentNode.parentNode;
    row.remove();
    saveStudents();
}

function saveStudents() {
    let students = [];
    document.querySelectorAll("#studentTable tr").forEach(row => {
        students.push({
            img: row.cells[0].innerHTML,
            name: row.cells[1].innerText,
            email: row.cells[2].innerText,
            phone: row.cells[3].innerText,
            enroll: row.cells[4].innerText
        });
    });
    localStorage.setItem("students", JSON.stringify(students));
}

function loadStudents() {
    let students = JSON.parse(localStorage.getItem("students")) || [];
    students.forEach(student => {
        let row = document.getElementById("studentTable").insertRow();
        row.insertCell(0).innerHTML = student.img;
        row.insertCell(1).innerText = student.name;
        row.insertCell(2).innerText = student.email;
        row.insertCell(3).innerText = student.phone;
        row.insertCell(4).innerText = student.enroll;
        let actionCell = row.insertCell(5);
        actionCell.classList.add("buttons");
        actionCell.innerHTML = `
                    <button><img src="./images/Vector.svg" alt=""></button>
                    <button onclick="editStudent(this)"><img src="./images/Vector.png" alt=""></button>
                    <button onclick="deleteStudent(this)"><img src="./images/trash 1.png" alt=""></button>`;
    });
}
function resetForm() {
    document.getElementById("studentName").value = "";
    document.getElementById("studentEmail").value = "";
    document.getElementById("studentPhone").value = "";
    document.getElementById("studentEnroll").value = "";
    document.getElementById("studentImage").value = "";
    document.querySelectorAll(".error").forEach((error) => (error.textContent = ""));
    selectedRow = null;
}

function searchStudent() {
    let input = document.getElementById("searchInput").value.toLowerCase();
    let rows = document.querySelectorAll("#studentTable tr");

    rows.forEach(row => {
        let name = row.cells[1].innerText.toLowerCase();
        let email = row.cells[2].innerText.toLowerCase();
        let phone = row.cells[3].innerText.toLowerCase();
        let enroll = row.cells[4].innerText.toLowerCase();

        if (name.includes(input) || email.includes(input) || phone.includes(input) || enroll.includes(input)) {
            row.style.display = "";
        } else {
            row.style.display = "none";
        }
    });
}













document.addEventListener("DOMContentLoaded", function () {
    // Select the tbody and listen for clicks on its child <td> elements
    document.querySelector("table tbody").addEventListener("click", function (event) {
        let clickedTd = event.target;

        // Ensure the clicked element is a <td> inside a <tr>
        if (clickedTd.tagName === "TD") {
            let row = clickedTd.closest("tr"); // Get the parent row
            const rowData = [];

            row.querySelectorAll("td").forEach(td => rowData.push(td.innerText));

            // Store in localStorage
            localStorage.setItem("selectedStudent", JSON.stringify(rowData));

            // Redirect to Students.html
            window.location.href = "Students.html";
        }
    });
});






