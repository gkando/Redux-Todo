import React, { Component } from 'react';
import { connect } from 'react-redux';
import { completeTodo } from '../actions/actions';


const todoList = props => {
    return (
      <div className='todoList'>
        {props.todos.map((todo) => {
          return (
            <div className='todoTask' key={todo.id} 
                onClick={() => props.completeTodo(todo.id)}
                style={{
                  textDecoration: todo.completed ? 'line-through' : 'none'
                }}
            >  <h3>{todo.task} </h3>
            <ul className='taskTags'>
                {todo.tags.map((tag) => {
                  return (
                  <li>{tag.value}</li>)
                })}
              </ul>
            </div>
          );
        })}
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