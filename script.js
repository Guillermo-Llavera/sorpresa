document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    fetch('users.json')
        .then(response => response.json())
        .then(users => {
            const user = users.find(user => user.username === username && user.password === password);
            
            if (user) {
                localStorage.setItem('currentUser', JSON.stringify(user));
                if (user.role === 'admi') {
                    window.location.href = 'principal.html';
                } else {
                    window.location.href = 'index_user.html';
                }
            } else {
                document.getElementById('message').innerText = 'uuuuuh no te acuerdas.... Mal Mal';
            }
        })
        .catch(error => console.error('Error al cargar los usuarios:', error));
});
