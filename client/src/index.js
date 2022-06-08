import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './styles/index.scss'
import {BrowserRouter} from "react-router-dom";
import { Provider } from 'react-redux';
import store from './redux/store';
import { getPosts } from './redux/actions/post.action';
import { getUsers } from './redux/actions/users.action';

store.dispatch(getUsers());
store.dispatch(getPosts());


ReactDOM.render(
  <Provider store={store}>
      <BrowserRouter>
      <App />
      </BrowserRouter>
  </Provider>
 ,
  document.getElementById('root')
);

