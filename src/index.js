import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
// import App from './App';
import { Shop } from "./components/shop/shop";
import Input from "./components/input/input";
import Navbar from "./components/navbar/navbar";
import * as serviceWorker from "./serviceWorker";
import classNames from "classnames";

// Shop
ReactDOM.render(<Shop />, document.getElementById("root"));

// Input
// ReactDOM.render(<Input />, document.getElementById('root'));

// Navbar
// ReactDOM.render(<Navbar items={['Home', 'Search', 'About']} activeId="Search" />, document.getElementById('root'));

serviceWorker.unregister();
