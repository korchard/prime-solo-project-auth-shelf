import React from 'react';
import { connect } from 'react-redux';
import mapStoreToProps from '../../redux/mapStoreToProps';
import './InfoPageItem.css'

class InfoPageItem extends React.Component {

  render() {
    return (
        <>
        {/* <p>JSON:</p>{JSON.stringify(this.props)} */}
        <tr key={this.props.item.id}>
            <td>{this.props.item.description}</td>
            <td><img className="shelf-item-image" src={this.props.item.image_url} alt={this.props.item.description}/></td>
            <td>{this.props.item.user_id}</td>
            {this.props.store.user.id === this.props.item.user_id && <td><button>Button</button></td>}
        </tr>
        </>
    )
  }
}


export default connect (mapStoreToProps) (InfoPageItem);