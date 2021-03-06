import React, {Component} from 'react';
import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import './MaterialDesign-Webfont-master/css/materialdesignicons.min.css'
import TodoApp from "./components/TodoApp"
import {Provider} from "react-redux";
import store from './store/store'


class App extends Component {
	render() {
		return (
			<Provider store={store}>
				<div className="App">
					<header className="App-header">
						<img src={logo} className="App-logo" alt="logo"/>
						<h1 className="App-title">Welcome to React</h1>
					</header>

					<TodoApp></TodoApp>
				</div>
			</Provider>
		);
	}
}

export default App;
