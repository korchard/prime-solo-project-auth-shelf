import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapStoreToProps from '../../redux/mapStoreToProps';

// Basic class component structure for React with default state
// value setup. When making a new component be sure to replace
// the component name TemplateClass with the name for the new
// component.
class AddItemForm extends Component {
  state = {
    heading: 'Add Item', 
    newItem: { 
      description: '', 
      image_url: '',
      comment: ''
    }
  };

  handleChange = (event, inputType) => { 
    console.log(event.target.value); 
    this.setState({ 
      newItem: { 
        ...this.state.newItem,
        [inputType]: event.target.value
      }
    })
  }

  submitItem = () => {
    if ((this.state.newItem.description !== '') && (this.state.newItem.image_url !== '')) { 
      this.props.dispatch({ type: 'ADD_ITEM', payload: this.state.newItem });
    } else { 
      alert('please add values')
    }
  }

  render() {
    console.log(this.state.newItem)
    return (
      <div>
        <h2>{this.state.heading}</h2>
        <label>Description</label><input onChange={event => this.handleChange(event, 'description')}></input>
        <label>Image url</label><input onChange={event => this.handleChange(event, 'image_url')}></input>
        <label>Comment</label><input onChange={event => this.handleChange(event, 'comment')}></input>
        <button onClick={this.submitItem}>Add Item</button>
      </div>
    );
  }
}

export default connect(mapStoreToProps)(AddItemForm);
