
const userForm = document.getElementById('userForm');
const userList = document.getElementById('userList');

// POST REQUEST - Add user
userForm.addEventListener('submit', async (event) => {

    event.preventDefault();

    const username = document.getElementById('username').value;
    const phone = document.getElementById('phone').value;
    const email = document.getElementById('email').value;

    const userObj = {
        username,
        phone,
        email
    };

    try {

        const response = await axios.post('/appointments', userObj);

        alert(response.data.message);

        userForm.reset();

        getUsers();

    } catch (error) {

        alert(error.response?.data?.message || error.message);

    }

});


// GET REQUEST - Get all users
const getUsers = async () => {

    try {

        const response = await axios.get('/appointments');

        const users = response.data.users;

        userList.innerHTML = '';

        users.forEach((user) => {

            const li = document.createElement('li');

            li.textContent =
                `${user.username} - ${user.phone} - ${user.email} `;

            const deleteBtn = document.createElement('button');

            deleteBtn.textContent = 'Delete';

            deleteBtn.addEventListener('click', () => {
                deleteUser(user.id);
            });

            li.appendChild(deleteBtn);

            userList.appendChild(li);

        });

    } catch (error) {

        console.log(error.response?.data?.message || error.message);

    }

};


// DELETE REQUEST - Delete user
const deleteUser = async (id) => {

    try {

        const response = await axios.delete(`/appointments/${id}`);

        alert(response.data.message);

        getUsers();

    } catch (error) {

        alert(error.response?.data?.message || error.message);

    }

};


// Load users when page opens
getUsers();
