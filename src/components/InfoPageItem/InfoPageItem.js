import React from 'react';
import { connect } from 'react-redux';
import mapStoreToProps from '../../redux/mapStoreToProps';
import './InfoPageItem.css'

class InfoPageItem extends React.Component {

  state = {
    recordEdit: false
  }

  deleteItem = () => {
    this.props.dispatch({ type: 'DELETE_ITEM', payload: {userId: this.props.item.user_id, itemId: this.props.item.id }})
  }

  editItem = () => {
    this.setState ({
      recordEdit: true
    })
    
    console.log (`Edit Mode`, this.state.recordEdit);
  }

  saveItem = () => {
    this.setState ({
      recordEdit: false
    })
    
    console.log (`save Mode`, this.state.recordEdit);
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
            <td>{this.props.item.description}</td>
            <td><img className="shelf-item-image" src={this.props.item.image_url} alt={this.props.item.description}/></td>
            <td>{this.props.item.comment}</td>
            <td>{this.props.item.user_id}</td>
            {/* {this.props.store.user.id === this.props.item.user_id && this.state.recordEdit === true ?
                <td><button onClick={this.saveItem}>Save</button></td>:
                <td><button onClick={this.editItem}>Edit</button></td>
            } */}
            <>{this.whichButton()}</>
            {this.props.store.user.id === this.props.item.user_id && <td><button onClick={this.deleteItem}>Delete</button></td>}
        </tr>
        </>
    )
  }
}


export default connect (mapStoreToProps) (InfoPageItem);