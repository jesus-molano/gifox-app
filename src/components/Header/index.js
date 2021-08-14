import { Link } from 'wouter';
import Form from '../Form';
import './Header.css';

const Header = () => {
	return (
		<div className='header'>
			<header>
			  <Link to='/'>
					<h1>GiFox</h1>
					<img className='gifox-logo' src='/gifox-logo.svg' alt='logo' />
			  </Link>
			</header>
			<Form />
		</div>
	);
};

export default Header;
