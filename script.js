const btn = document.querySelector("#fetchUsers");
const userList = document.querySelector("#userList");
const clearUsers = document.querySelector("#clearUsers");
const sortAZ = document.querySelector("#sortAZ");
const sortZA = document.querySelector("#sortZA");
const usernameFilter = document.querySelector("#search");

let users = [];

//Display Users
function displayUsers(userArray) {
  const cards = userArray.map((user) => {
    return `
            <div class="user-card">

                <h2>${user.name}</h2>

                <p>Username: ${user.username}</p>

                <p>Email: ${user.email}</p>

                <p>Phone: ${user.phone}</p>

                <p>Website: ${user.website}</p>

                <button class="detailsBtn" data-id="${user.id}">
                    View Details
                </button>

                <div id="details-${user.id}" class="details"></div>

            </div>
        `;
  });

  //Empty State
  if (userArray.length === 0) {
    userList.innerHTML = "<p>No users found.</p>";

    return;
  }

  userList.innerHTML = cards.join("");

  // User Details
  const detailButtons = document.querySelectorAll(".detailsBtn");

  detailButtons.forEach((button) => {
    button.addEventListener("click", () => {
      const userId = Number(button.dataset.id);

      const user = users.find((user) => user.id === userId);

      const details = document.querySelector(`#details-${userId}`);

      details.innerHTML = `
                <p>
                    <strong>Address:</strong>
                    ${user.address.street}
                </p>

                <p>
                    <strong>City:</strong>
                    ${user.address.city}
                </p>

                <p>
                    <strong>Company:</strong>
                    ${user.company.name}
                </p>

                <p>
                    <strong>Phone:</strong>
                    ${user.phone}
                </p>

                <p>
                    <strong>Website:</strong>
                    ${user.website}
                </p>
            `;
    });
  });
}

// Async / Await
async function fetchUsers() {
  // Loading State / Spinner
  userList.innerHTML = `
        <div class="spinner"></div>
    `;

  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");

    // Error Handling
    if (!response.ok) {
      throw new Error("Failed to fetch users");
    }

    const data = await response.json();

    users = data;

    displayUsers(users);
  } catch (error) {
    userList.innerHTML = "<p>Unable to load users. Please try again.</p>";

    console.log(error);
  }
}

// Fetch button
btn.addEventListener("click", () => {
  fetchUsers();
});

// Clear Users
clearUsers.addEventListener("click", () => {
  userList.innerHTML = "";

  usernameFilter.value = "";

  users = [];
});

// Sort A-Z
sortAZ.addEventListener("click", () => {
  users.sort((a, z) => {
    return a.name.localeCompare(z.name);
  });

  displayUsers(users);
});

// Sort Z-A
sortZA.addEventListener("click", () => {
  users.sort((a, z) => {
    return z.name.localeCompare(a.name);
  });

  displayUsers(users);
});

// Filter Users
usernameFilter.addEventListener("input", () => {
  const usernameText = usernameFilter.value.toLowerCase();
  const filteredUsers = users.filter((user) => {
    return (
      user.username.toLowerCase().includes(usernameText) ||
      user.name.toLowerCase().includes(usernameText)||
      user.email.toLowerCase().includes(usernameText)
    );
  });

  displayUsers(filteredUsers);
});
