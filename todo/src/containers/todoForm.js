import React from 'react';
import { connect } from 'react-redux';
import { addTodo } from '../actions/actions';

class TodoForm extends React.Component {
    constructor() {
      super();
      this.state = {
        item: "", 
        tag: "", 
        tags: []
      };
    }

    handleKeyPress = e => {
      if (!e) e = window.event;
      var keyCode = e.keyCode || e.which;
      if (keyCode == '13'){
        e.preventDefault();
        let tags = [...this.state.tags];
        tags.push({ id: tags.length + 1, value: e.target.value });
        this.setState({ tags });
        this.setState({
          tag: ''
        });  
        return false;
      }
    
  }
    
    handleInput = e => {
        this.setState({ [e.target.name]: e.target.value });
      };

      addTodo = e => {
        const newTodo = {task: this.state.item, tags: this.state.tags}
        console.log(newTodo)
        this.props.addTodo(newTodo);
        this.setState({
          item: '',
          tag: "", 
          tags: []
        });  
      }      
    
    handleSubmit = e => {
      e.preventDefault();
      e.target.name == 'tag' ? console.log('tag submit') : this.addTodo(e);
      }
    
    render() {
      return (        
        <form class='todoForm'>
          <input
            value={this.state.item}
            name="item"
            onChange={this.handleInput}
            placeholder='Enter A New Todo...'
          />

          <div className='tagInputArea'>

            <ul className='tagList'>
              {this.state.tags.map((tag) => {
                return (
                  <li className="tagItem" key={tag.id}> {tag.value} </li>
                );
              })}
              <li>    
              <input className='tagInput' value={this.state.tag}
                     name='tag' 
                     id="foo" 
                     onKeyPress={this.handleKeyPress} 
                     onChange={this.handleInput} 
                     placeholder='Enter Tags...'
               />
               </li>

            </ul> 
          </div>
          <div className='btn' onClick={this.handleSubmit}>Submit</div>
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