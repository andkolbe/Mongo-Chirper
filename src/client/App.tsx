import * as React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import NavBar from './components/Navbar';
import Home from './views/Home';
import NewChirp from './views/NewChirp';
import Admin from './views/Admin';
import NotFound from './views/NotFound';



const App: React.FC<AppProps> = (props, state) => {

	return (
		<BrowserRouter>
			<NavBar />
			<Switch>
				<Route exact path='/'>
					<Home />
				</Route>
				<Route exact path='/chirps/add'>
					<NewChirp />
				</Route>
				<Route exact path='/chirps/:id/admin'>
					<Admin />
				</Route>
				<Route exact path='*'> 
					<NotFound />
				</Route>
			</Switch>
		</BrowserRouter>
	);

}

// interface is a way to define a type
interface AppProps {} // this is blank because App in index.tsx is recieving no props

// interfaces describes a component's props (if it has any)

export default App;