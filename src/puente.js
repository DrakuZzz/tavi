document.getElementById('registroid').addEventListener('submit', async (e) => {
    e.preventDefault();

    const usuario = document.getElementById('user').value;
    const password = document.getElementById('password').value;

    const response = await fetch('http://localhost:3000/insercion', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({usuario, password})
    });

    const data = await response.text();
    document.getElementById('mensaje').innerText = data;
});