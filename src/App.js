import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

//style
import './scss/style.scss'

//components
import Home from './components/home'
import Test from './components/test'
import Menu from './components/menu'

function App() {
	return (
		<Router>
			<Menu />
			<Switch>
				<Route exact path="/" component={Home} />
				<Route exact path="/test" component={Test} />
			</Switch>
		</Router>
	);
}

export default App;
