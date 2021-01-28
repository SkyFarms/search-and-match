import React from 'react';
import {
  Switch,
  Route
} from "react-router-dom";

import NavBar from 'components/NavBar';
import Footer from 'components/Footer';

import LandingPage from 'pages/LandingPage';
import ProjectsListPage from 'pages/ProjectsListPage';
import CreateProjectPage from 'pages/CreateProjectPage';

const App: React.FC = () => (
	<>
		<NavBar />
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
		<Footer />
	</>
);

export default App;
