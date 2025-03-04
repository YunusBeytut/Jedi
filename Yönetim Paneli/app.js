let userList = JSON.parse(localStorage.getItem("userList")) || [];
let nameListDOM = document.querySelector("#nameList");

function Read() {
    nameListDOM.innerHTML = "";
    let getUserList = JSON.parse(localStorage.getItem("userList")) || [];

    if (getUserList.length === 0) {
        nameListDOM.innerHTML = "<p>There is no any users!</p>";
    } else {
        getUserList.forEach((user, i) => {
            nameListDOM.innerHTML += `
                <div class="user-item">
                    <p>
                        <i class="fas fa-user"></i>
                        <span>User :</span> ${user}
                    </p>
                    <div class="buttons">
                        <button class="primary" onclick="Edit(${i})">
                            <i class="fas fa-edit"></i>Edit
                        </button>
                        <button class="danger" onclick="Delete(${i})">
                            <i class="fas fa-trash"></i>Delete
                        </button>
                    </div>
                </div>
            `;
        });
    }
}

function Create() {
    let inputText = document.querySelector("#name").value.trim();
    if (inputText === "") {
        alert("Write a name!");
        return;
    }

    userList.push(inputText);
    localStorage.setItem("userList", JSON.stringify(userList));
    Read();
    document.getElementById("form").reset();
}

function Delete(index) {
    userList.splice(index, 1);
    localStorage.setItem("userList", JSON.stringify(userList));
    Read();
}

function Edit(index) {
    let editUsers = JSON.parse(localStorage.getItem("userList")) || [];
    nameListDOM.innerHTML = "";

    editUsers.forEach((user, i) => {
        if (i === index) {
            nameListDOM.innerHTML += `
                <div class="user-item">
                    <input type="text" id="newName" value="${user}" />
                    <div class="buttons">
                        <button class="success" onclick="Update(${i})">
                            <i class="fas fa-edit"></i>Update
                        </button>
                        <button class="warning" onclick="Read()">
                            <i class="fas fa-times"></i>Cancel
                        </button>
                    </div>
                </div>
            `;
        } else {
            nameListDOM.innerHTML += `
                <div class="user-item">
                    <p>
                        <i class="fas fa-user"></i>
                        <span>User :</span> ${user}
                    </p>
                    <div class="buttons">
                        <button class="primary" onclick="Edit(${i})">
                            <i class="fas fa-edit"></i>Edit
                        </button>
                        <button class="danger" onclick="Delete(${i})">
                            <i class="fas fa-trash"></i>Delete
                        </button>
                    </div>
                </div>
            `;
        }
    });
}

function Update(index) {
    let updateUsers = JSON.parse(localStorage.getItem("userList")) || [];
    let newName = document.getElementById("newName").value.trim();

    if (newName === "") {
        alert("Write a name!");
        return;
    }

    updateUsers[index] = newName;
    localStorage.setItem("userList", JSON.stringify(updateUsers));
    Read();
}

document.getElementById("form").addEventListener("submit", (e) => {
    e.preventDefault();
    Create();
});

document.addEventListener("DOMContentLoaded", () => {
    Read();
});
