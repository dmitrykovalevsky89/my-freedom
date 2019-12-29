import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { User } from "./user";
import { IconBar } from "./iconbar";
import * as serviceWorker from './serviceWorker';
import classNames from 'classnames';

const users = [
	{
		id: 1,
		name: "John Doe",
		title: "CEO & Founder, Example",
		imageUrl: "https://www.w3schools.com/w3images/team2.jpg",
		company: "Harvard University",
		facebookUrl: "http://facebook.com"
	},
	{
		id: 2,
		name: "John Doe 2",
		title: "CEO",
		imageUrl: "https://www.w3schools.com/w3images/team1.jpg",
		company: "Amazon"
	}
];

const UserList = ({ users }) => (
	<div>
		{users.map((user, index) => (
			<User
				key={index}
				name={user.name}
				title={user.title}
				imageUrl={user.imageUrl}
				company={user.company}
				facebookUrl={user.facebookUrl}
			/>
		))}
	</div>
);


// ReactDOM.render(<UserList users={users} />, document.getElementById('root'));

ReactDOM.render(<IconBar orientation="horizontal" />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
