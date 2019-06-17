import React from 'react';
import { connect } from 'react-redux';
import { addTodo } from '../actions/actions';

class TodoForm extends React.Component {
    constructor() {
      super();
      this.state = {
        item: ""
      };
    }

    handleInput = e => {
        this.setState({ [e.target.name]: e.target.value });
      };
    
    handleSubmit = e => {
      e.preventDefault();
      const newTodo = this.state.item;

        console.log(newTodo)
        this.props.addTodo(newTodo);
        this.setState({
          item: ''
        });  
      }
    
    render() {
      return (
        <form>
          <input
            value={this.state.item}
            name="item"
            onChange={this.handleInput}
          />
        <button type='submit' onClick={this.handleSubmit}>Submit</button>
        </form>
      );
    }
  }


  const mapStateToProps = state => {
    return {
      todos: state,
      addTodo: newTodo => addTodo(newTodo),
      // filteredTodos: getVisibleTodos(state)
      
      };
  };
export default connect(mapStateToProps, { addTodo })(TodoForm);