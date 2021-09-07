import { Route } from 'wouter';
import Home from 'pages/Home';
import Detail from 'pages/Detail';
import SearchResults from 'pages/SearchResults';
import Login from 'pages/Login';
// import Logout from 'pages/Logout'
import ErrorPage from 'pages/ErrorPage';
import { GifsContextProvider } from 'context/GifsContext';
import { UserContextProvider } from 'context/UserContext';
import './App.css';

function App() {
	return (
		<UserContextProvider>
			<div className='App'>
				<section className='App-content'>
					<GifsContextProvider>
						<Route path='/' component={Home} />
						<Route path='/search/:keyword/:rating?' component={SearchResults} />
						<Route path='/gif/:id' component={Detail} />
						<Route path='/login' component={Login} />
						{/* <Route path='/logout' component={Logout} /> */}
						<Route path='/404' component={ErrorPage} />
					</GifsContextProvider>
				</section>
			</div>
		</UserContextProvider>
	);
}

export default App;
