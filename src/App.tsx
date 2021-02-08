import React from 'react';
import {
  Switch,
  Route
} from "react-router-dom";

import Header from 'components/Header';
import Footer from 'components/Footer';

import LandingPage from 'pages/LandingPage';
import ProjectsListPage from 'pages/ProjectsListPage';
import CreateProjectPage from 'pages/CreateProjectPage';

const App: React.FC = () => (
	<>
		<Header />
		<Switch>
			<Route exact path="/">
				<LandingPage />
			</Route>
			<Route path="/projects">
				<ProjectsListPage />
			</Route>
			<Route path="/create-project">
				<CreateProjectPage />
			</Route>
		</Switch>
		<Footer />
	</>
);

export default App;
