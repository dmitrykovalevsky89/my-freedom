import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
// import App from './App';
import { Shop } from "./components/shop/shop";
import Input from "./components/input/input";
// import Navbar from "./components/navbar/navbar";
import { ClientList } from "./components/clientlist/ClientList";
import { PostsList } from "./components/postslist/PostsList";
import * as serviceWorker from "./serviceWorker";
import classNames from "classnames";
import { Navbar, Nav, Container, Row } from "react-bootstrap";
import { BrowserRouter, Route, Redirect, NavLink } from "react-router-dom";
import { Task1 } from "./task1";
import { Task2 } from "./task2";
import { Task3 } from "./task3";
import { Task4 } from "./task4";
import "bootstrap/dist/css/bootstrap.min.css";

const tasks = [Task1, Task2, Task3, Task4];

const App = () => (
	<BrowserRouter>
		<Navbar
			sticky="top"
			bg="dark"
			variant="dark"
			onSelect={taskIndex => this.setState({ taskIndex })}
		>
			<Nav className="mr-auto">
				{tasks.map((task, index) => (
					<Nav.Link as={NavLink} key={index} to={`/task${index + 1}`}>
						{task.title}
					</Nav.Link>
				))}
			</Nav>
		</Navbar>
		<Container>
			<Route path="/" exact render={() => <Redirect to="/task1" />} />
			{tasks.map((Task, index) => (
				<Route
					path={`/task${index + 1}`}
					render={() => (
						<>
							<Row>
								<h6>{Task.description}</h6>
							</Row>
							<Row>
								<Task />
							</Row>
						</>
					)}
				/>
			))}
		</Container>
	</BrowserRouter>
);

ReactDOM.render(<App />, document.getElementById("root"));



// ClientList
// ReactDOM.render(<PostsList />, document.getElementById("root"));

// ClientList
// ReactDOM.render(<ClientList />, document.getElementById("root"));

// Shop
// ReactDOM.render(<Shop />, document.getElementById("root"));

// Input
// ReactDOM.render(<Input />, document.getElementById('root'));

// Navbar
// ReactDOM.render(<Navbar items={['Home', 'Search', 'About']} activeId="Search" />, document.getElementById('root'));

serviceWorker.unregister();
