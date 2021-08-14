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
						<Route path='/search/:keyword' component={SearchResults} />
						<Route path='/gif/:id' component={Detail} />
					</GifsContextProvider>
				</section>
			</div>
	);
}

export default App;
