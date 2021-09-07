import useUser from 'hooks/useUser';
import { useEffect, useState } from 'react'
import { useLocation } from 'wouter';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [, pushLocation] = useLocation();
  const { isLogged, login } = useUser();

  useEffect(() => {
    if (isLogged) pushLocation('/');
  },[isLogged,pushLocation])

  const handleSubmit = (e) => {
    e.preventDefault();
    login(username, password)
  }
  return (
    <form onSubmit={handleSubmit}>
      <input placeholder="Username" type="text" value={username} onChange={(e) => setUsername(e.target.value)}/>
      <input placeholder="Password" type="password" value={password} onChange={(e)=> setPassword(e.target.value) } />
      <button>Login</button>
    </form>
  )
}

export default Login
