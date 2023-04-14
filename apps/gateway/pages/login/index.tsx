import axios from 'axios';
import { useState } from 'react';

/* eslint-disable-next-line */
export interface LoginProps {}

export function Login(props: LoginProps) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [err, setErr] = useState('');

  const login_user = async () => {
    try {
      const { data } = await axios.post(
        `http://localhost:3333/api/auth/login`,
        {
          username: username,
          password: password,
        }
      );
      console.log(data);
    } catch (error) {
      setErr('login fail');
    }
  };

  return (
    <div className="bg-slate-200 flex flex-col p-4 space-y-5">
      <input
        type="text"
        onChange={(e) => setUsername(e.target.value)}
        value={username}
        className="p-2"
        placeholder="enter username "
      />
      <input
        type="text"
        onChange={(e) => setPassword(e.target.value)}
        className="p-2"
        placeholder="enter password "
        value={password}
      />
      <button onClick={login_user} className="bg-blue-400">
        Login User
      </button>
    </div>
  );
}

export default Login;
