import { Route } from 'wouter';
import Home from './pages/Home';
import Detail from './pages/Detail';
import SearchResults from './pages/SearchResults';
import { GifsContextProvider } from './context/GifsContext';
import './App.css';

function App() {
	return (
			<div className='App'>
				<section className='App-content'>
					<GifsContextProvider>
						<Route path='/' component={Home} />
						<Route path='/search/:keyword/:rating?' component={SearchResults} />
						<Route path='/gif/:id' component={Detail} />
						<Route path='/404' component={() => <h1>404 ERROR :( </h1>} />
					</GifsContextProvider>
				</section>
			</div>
	);
}

export default App;
