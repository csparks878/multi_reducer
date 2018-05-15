import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { Provider } from "react-redux";
import { createStore } from "redux";

//importing and combining reducers
import { combineReducers } from "redux";
import reducer1 from "./store/reducers/reducer1";
import reducer2 from "./store/reducers/reducer2";

const rootReducer = combineReducers({
    rd1: reducer1,
    rd2: reducer2,
})

const store = createStore(rootReducer);

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));
