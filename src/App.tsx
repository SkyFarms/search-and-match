import React from 'react';
import {
  Switch,
  Route
} from "react-router-dom";

import './App.css';

import LandingPage from 'pages/LandingPage';
import ProjectsListPage from 'pages/ProjectsListPage';
import CreateProjectPage from 'pages/CreateProjectPage';

function App() {
  return (
    <div className="App">
		<Switch>
			<Route exact path="/">
				<LandingPage />
			</Route>
			<Route path="/projects">
				<ProjectsListPage />
			</Route>
			<Route path="/create">
				<CreateProjectPage />
			</Route>
		</Switch>
    </div>
  );
}

export default App;
