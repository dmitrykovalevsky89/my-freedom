import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
// import App from './App';
import { Shop } from "./components/shop/shop";
import Input from "./components/input/input";
import Navbar from "./components/navbar/navbar";
import { ClientList } from "./components/clientlist/ClientList";
import { PostsList } from "./components/postslist/PostsList";
import * as serviceWorker from "./serviceWorker";
import classNames from "classnames";


// ClientList
ReactDOM.render(<PostsList />, document.getElementById("root"));

// ClientList
// ReactDOM.render(<ClientList />, document.getElementById("root"));

// Shop
// ReactDOM.render(<Shop />, document.getElementById("root"));

// Input
// ReactDOM.render(<Input />, document.getElementById('root'));

// Navbar
// ReactDOM.render(<Navbar items={['Home', 'Search', 'About']} activeId="Search" />, document.getElementById('root'));

serviceWorker.unregister();
