import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { reducer } from './reducers/index';
import TodoList from './containers/todoList'
import TodoForm from './containers/todoForm'



const store = createStore(reducer);

function App() {
    return (
      <div className="App">
        <TodoList />
        <TodoForm />
      </div>
    );
  }

ReactDOM.render(
    <Provider store={store}>
       <App state={store.getState()} />
    </Provider>, document.getElementById('root'));