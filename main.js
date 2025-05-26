const app = document.getElementById('app');

app.innerHTML = `
  <div class="container">
    <h2>Accesso Domovia</h2>
    <label for="role">Ruolo</label>
    <select id="role">
      <option value="">Seleziona...</option>
      <option value="admin">Amministratore</option>
      <option value="agenzia">Agenzia</option>
      <option value="proprietario">Proprietario</option>
      <option value="inquilino">Inquilino</option>
    </select>
    <label for="email">Email</label>
    <input id="email" type="email" placeholder="esempio@mail.it"/>
    <label for="password">Password</label>
    <input id="password" type="password" placeholder="••••••••"/>
    <button onclick="login()">Accedi</button>
    <p id="status"></p>
  </div>
`;

window.login = function login() {
  const role = document.getElementById('role').value;
  const email = document.getElementById('email').value;
  const pass = document.getElementById('password').value;
  const status = document.getElementById('status');
  if (role && email && pass) {
    status.innerText = 'Accesso effettuato come ' + role;
  } else {
    status.innerText = 'Compila tutti i campi.';
  }
};
