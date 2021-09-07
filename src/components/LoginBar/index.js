import { Link } from 'wouter';
import useUser from 'hooks/useUser';
import './LoginBar.css';

const LoginBar = () => {

	const { isLogged, logout } = useUser();
	
	return (
		<div className='login-bar'>
			{isLogged ? (
				<button onClick={logout}>Logout</button>
			) : (
				<Link to='/login'>Login</Link>
			)}
		</div>
	);
};

export default LoginBar;
