import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
import { Shop } from "./components/shop/shop";
import * as serviceWorker from './serviceWorker';
import classNames from 'classnames';



ReactDOM.render(<Shop />, document.getElementById('root'));

serviceWorker.unregister();
