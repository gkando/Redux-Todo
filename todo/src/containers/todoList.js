import React, { Component } from 'react';
import { connect } from 'react-redux';
import { completeTodo } from '../actions/actions';


const todoList = props => {

      console.log(props)
    return (
      <div>
        <ul>
        {props.todos.map((todo) => {
          return (
            <li key={todo.id} 
                onClick={() => props.completeTodo(todo.id)}
                style={{
                  textDecoration: todo.completed ? 'line-through' : 'none'
                }}
            > {todo.item} </li>
          );
        })}
        </ul>
      </div>

    );
  }


const mapStateToProps = state => {
  return {
    todos: state,
    completeTodo: id => completeTodo(id),
    // filteredTodos: getVisibleTodos(state)
    
    };
};

export default connect(mapStateToProps, { completeTodo })(todoList);