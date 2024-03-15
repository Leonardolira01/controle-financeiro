import { FC, useState } from 'react';

interface LoginProps {
  onLogin: () => void;
}

const Login: FC<LoginProps> = ({ onLogin }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    // Aqui você pode adicionar a lógica de autenticação
    // Por exemplo, verificar o usuário e a senha
    // e chamar onLogin quando estiver autenticado
    onLogin();
  };

  return (
    <div>
      <h2>Faça seu login:</h2>
      <form>
        <input
          type="text"
          id="username" placeholder='E-mail:'
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <br />
        <br />
        <input
          type="password"
          id="password" placeholder='Código de Verificação:'
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <br />
        <br />
        <button type="button" onClick={handleLogin}>
          Entrar
        </button>
      </form>
    </div>
  );
};

export default Login;