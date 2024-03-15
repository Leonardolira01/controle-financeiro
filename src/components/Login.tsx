import React from 'react';

const Login = ({ onLogin }) => {
  const handleLogin = () => {
    // Simulando um processo de login bem-sucedido
    onLogin();
  };

  return (
    <div>
      <h2>Faça seu login:</h2>
      <form>
        <input type="email" id="email" placeholder="E-mail" />
        <br />
        <br />
        <input type="text" id="codigo" placeholder="Código de Verificação" />
        <br />
        <br />
        <button type="button" onClick={handleLogin}>Entrar</button>
      </form>
    </div>
  );
}

export default Login;
