import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
//eslint-disable-next-line
import App from './App';
//eslint-disable-next-line
import App2 from './App2';
import App3 from './App3';
import * as serviceWorker from './serviceWorker';


/*export {default as PersistentDrawerLeft} from './lib';
export {default as SimpleModal} from '/lib';*/

ReactDOM.render(<App3 />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
