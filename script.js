const apiUrl = "https://fakestoreapi.com";

const userTable = document.getElementById("userTable");
const loading = document.getElementById("loading");
const message = document.getElementById("message");

const userForm = document.getElementById("userForm");
const tableSection = document.getElementById("tableSection");
const searchSection = document.getElementById("searchSection");

const formTitle = document.getElementById("formTitle");
const submitUserBtn = document.getElementById("submitUserBtn");

let editingUserId = null;
let users = [];

// Get all users

async function getUsers() {
  loading.style.display = "flex";

  try {
    const response = await fetch(`${apiUrl}/users`);

    if (!response.ok) {
      throw new Error("Unable to load users");
    }

    users = await response.json();

    displayUsers(users);
  } catch (error) {
    message.textContent = error.message;
  } finally {
    loading.style.display = "none";
  }
}

// Display users

function displayUsers(userList) {
  userTable.innerHTML = "";

  if (userList.length === 0) {
    userTable.innerHTML = `
            <tr>
                <td colspan="5">
                    No users found
                </td>
            </tr>
        `;

    return;
  }

  userList.forEach((user) => {
    userTable.innerHTML += `
            <tr>

                <td>
                    ${user.id}
                </td>

                <td>
                    ${user.username}
                </td>

                <td>
                    ${user.email}
                </td>

                <td>
                    ${user.phone}
                </td>

                <td>

                    <button
                        class="edit-btn"
                        onclick="editUser(${user.id})"
                    >
                        Edit
                    </button>


                    <button
                        class="delete-btn"
                        onclick="deleteUser(${user.id})"
                    >
                        Delete
                    </button>

                </td>

            </tr>
        `;
  });
}

// Show Create User Form

function showCreateForm() {
  tableSection.style.display = "none";

  searchSection.style.display = "none";

  userForm.style.display = "block";

  formTitle.textContent = "Create User";

  submitUserBtn.textContent = "Create User";

  editingUserId = null;

  clearForm();

  message.textContent = "";
}

// Edit User

async function editUser(id) {
  const user = users.find((user) => user.id == id);

  if (!user) {
    message.textContent = "User not found";

    return;
  }

  tableSection.style.display = "none";

  searchSection.style.display = "none";

  userForm.style.display = "block";

  formTitle.textContent = "Edit User";

  submitUserBtn.textContent = "Update User";

  editingUserId = id;

  document.getElementById("username").value = user.username;

  document.getElementById("email").value = user.email;

  document.getElementById("password").value = user.password;

  document.getElementById("firstname").value = user.name.firstname;

  document.getElementById("lastname").value = user.name.lastname;

  document.getElementById("city").value = user.address.city;

  document.getElementById("street").value = user.address.street;

  document.getElementById("number").value = user.address.number;

  document.getElementById("zipcode").value = user.address.zipcode;

  document.getElementById("phone").value = user.phone;

  message.textContent = "";
}

// Create or Update User

async function saveUser() {
  const username = document.getElementById("username").value.trim();

  const email = document.getElementById("email").value.trim();

  const password = document.getElementById("password").value.trim();

  const firstname = document.getElementById("firstname").value.trim();

  const lastname = document.getElementById("lastname").value.trim();

  const city = document.getElementById("city").value.trim();

  const street = document.getElementById("street").value.trim();

  const number = document.getElementById("number").value;

  const zipcode = document.getElementById("zipcode").value.trim();

  const phone = document.getElementById("phone").value.trim();

  // Required field validation

  if (username === "" || email === "" || password === "" || phone === "") {
    message.textContent = "Please fill username, email, password and phone";

    return;
  }

  // Name validation

  const namePattern = /^[A-Za-z\s]+$/;

  if (firstname !== "" && !namePattern.test(firstname)) {
    message.textContent = "First name should contain only letters";

    return;
  }

  if (lastname !== "" && !namePattern.test(lastname)) {
    message.textContent = "Last name should contain only letters";

    return;
  }

  // Email validation

  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (!emailPattern.test(email)) {
    message.textContent = "Please enter a valid email address";

    return;
  }

  // Phone validation

  const phonePattern = /^\+?[0-9\s-]{7,15}$/;

  if (!phonePattern.test(phone)) {
    message.textContent = "Please enter a valid phone number";

    return;
  }

  // User object

  const userData = {
    email: email,

    username: username,

    password: password,

    name: {
      firstname: firstname,

      lastname: lastname,
    },

    address: {
      city: city,

      street: street,

      number: Number(number),

      zipcode: zipcode,

      geolocation: {
        lat: "27.7172",

        long: "85.3240",
      },
    },

    phone: phone,
  };

  try {
    let response;

    // UPDATE USER

    if (editingUserId !== null) {
      response = await fetch(`${apiUrl}/users/${editingUserId}`, {
        method: "PUT",

        headers: {
          "Content-Type": "application/json",
        },

        body: JSON.stringify(userData),
      });

      if (!response.ok) {
        throw new Error("Unable to update user");
      }

      const result = await response.json();

      console.log("Updated user:", result);

      // Update local user

      const index = users.findIndex((user) => user.id == editingUserId);

      if (index !== -1) {
        users[index] = {
          ...users[index],

          ...userData,
        };
      }

      message.textContent = "User updated successfully";
    }

    // CREATE USER
    else {
      response = await fetch(`${apiUrl}/users`, {
        method: "POST",

        headers: {
          "Content-Type": "application/json",
        },

        body: JSON.stringify(userData),
      });

      if (!response.ok) {
        throw new Error("Unable to add user");
      }

      const result = await response.json();

      console.log("Created user:", result);

      // FakeStore API does not
      // permanently save users

      const newUser = {
        ...userData,

        id: users.length + 1,
      };

      users.push(newUser);

      message.textContent = "User created successfully";
    }

    // Reset form

    clearForm();

    editingUserId = null;

    formTitle.textContent = "Create User";

    submitUserBtn.textContent = "Create User";

    // Hide form

    userForm.style.display = "none";

    // Show table

    tableSection.style.display = "block";

    displayUsers(users);
  } catch (error) {
    message.textContent = error.message;
  }
}

// Delete User

async function deleteUser(id) {
  const answer = confirm("Do you want to delete this user?");

  if (!answer) {
    return;
  }

  try {
    const response = await fetch(`${apiUrl}/users/${id}`, {
      method: "DELETE",
    });

    if (!response.ok) {
      throw new Error("Unable to delete user");
    }

    const result = await response.json();

    console.log("Deleted user:", result);

    // Remove from local array

    users = users.filter((user) => user.id != id);

    displayUsers(users);

    message.textContent = "User deleted successfully";
  } catch (error) {
    message.textContent = error.message;
  }
}

// Search Users

function searchUsers() {
  const searchValue = document
    .getElementById("searchInput")
    .value.toLowerCase()
    .trim();

  if (searchValue === "") {
    displayUsers(users);

    return;
  }

  const filteredUsers = users.filter((user) => {
    return (
      // Search by ID

      user.id.toString().includes(searchValue) ||
      // Search by username

      user.username.toLowerCase().includes(searchValue) ||
      // Search by email

      user.email.toLowerCase().includes(searchValue) ||
      // Search by phone

      user.phone.toLowerCase().includes(searchValue)
    );
  });

  displayUsers(filteredUsers);

  if (filteredUsers.length === 0) {
    message.textContent = "No user found";
  } else {
    message.textContent = `${filteredUsers.length} user(s) found`;
  }
}

// Clear Search

function clearSearch() {
  document.getElementById("searchInput").value = "";

  message.textContent = "";

  displayUsers(users);
}

// Clear Form

function clearForm() {
  document.getElementById("username").value = "";

  document.getElementById("email").value = "";

  document.getElementById("password").value = "";

  document.getElementById("firstname").value = "";

  document.getElementById("lastname").value = "";

  document.getElementById("city").value = "";

  document.getElementById("street").value = "";

  document.getElementById("number").value = "";

  document.getElementById("zipcode").value = "";

  document.getElementById("phone").value = "";
}

// Back to Users

function showUsers() {
  userForm.style.display = "none";

  searchSection.style.display = "none";

  tableSection.style.display = "block";

  editingUserId = null;

  clearForm();

  formTitle.textContent = "Create User";

  submitUserBtn.textContent = "Create User";

  message.textContent = "";

  displayUsers(users);
}

// Load Users Button

document.getElementById("loadBtn").addEventListener("click", getUsers);

// Create User Button

document
  .getElementById("showCreateBtn")
  .addEventListener("click", showCreateForm);

// Create / Update Button

document.getElementById("submitUserBtn").addEventListener("click", saveUser);

// Back Button

document.getElementById("backBtn").addEventListener("click", showUsers);

// Search Button

document.getElementById("searchBtn").addEventListener("click", function () {
  userForm.style.display = "none";

  tableSection.style.display = "block";

  searchSection.style.display = "block";
});

// Search

document.getElementById("doSearchBtn").addEventListener("click", searchUsers);

// Clear Search

document
  .getElementById("clearSearchBtn")
  .addEventListener("click", clearSearch);

// Load users when page starts

getUsers();
