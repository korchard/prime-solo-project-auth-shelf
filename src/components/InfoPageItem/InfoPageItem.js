import React from 'react';
import { connect } from 'react-redux';
import mapStoreToProps from '../../redux/mapStoreToProps';
import './InfoPageItem.css'

class InfoPageItem extends React.Component {

  state = {
    recordEdit: false,
    editItem: {
      description: '', 
      image_url: '',
      comment: '',
      id: ''
    }
  }

  deleteItem = () => {
    this.props.dispatch({ type: 'DELETE_ITEM', payload: {userId: this.props.item.user_id, itemId: this.props.item.id }})
  }

  editItem = () => {
    this.setState ({
      recordEdit: true,
      editItem: {
        description: this.props.item.description,
        image_url: this.props.item.image_url,
        comment: this.props.item.comment,
        id: this.props.item.id
      }
    })
    
    console.log (`Edit Mode`, this.state.recordEdit);
  }

  saveItem = () => {
    this.props.dispatch({ type: 'EDIT_ITEM', payload: this.state.editItem })
    this.setState ({
      recordEdit: false
    })
    
    console.log (`save Mode`, this.state.recordEdit);
  }

  handleChange = (event, inputType) => { 
    console.log(event.target.value); 
    this.setState({ 
      editItem: { 
        ...this.state.editItem,
        [inputType]: event.target.value
      }
    })
  }

  //// ---- check out this conditional ---- ////
  whichButton = () => {
    if (this.props.store.user.id === this.props.item.user_id && this.state.recordEdit === true) {
      return <td><button onClick={this.saveItem}>Save</button></td>
    } else if (this.props.store.user.id === this.props.item.user_id) {
      return <td><button onClick={this.editItem}>Edit</button></td>
    }
  }

  render() {
    return (
        <>
        {/* <p>JSON:</p>{JSON.stringify(this.props)} */}
        <tr key={this.props.item.id}>
          {this.state.recordEdit ?
          <>
          <td><input value={this.state.editItem.description} onChange={event => this.handleChange(event, 'description')}></input></td>
          <td><input value={this.state.editItem.image_url} onChange={event => this.handleChange(event, 'image_url')}></input></td>
          <td><input value={this.state.editItem.comment} onChange={event => this.handleChange(event, 'comment')}></input></td>
          </>
          :
          <>
          <td>{this.props.item.description}</td>
          <td><img className="shelf-item-image" src={this.props.item.image_url} alt={this.props.item.description}/></td>
          <td>{this.props.item.comment}</td>
          </>
          }
            <td>{this.props.item.user_id}</td>
            <>{this.whichButton()}</>
            {this.props.store.user.id === this.props.item.user_id && <td><button onClick={this.deleteItem}>Delete</button></td>}
        </tr>
        </>
    )
  }
}


export default connect (mapStoreToProps) (InfoPageItem);