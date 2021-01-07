import React from 'react';
import { connect } from 'react-redux';
import mapStoreToProps from '../../redux/mapStoreToProps';
import AddItemForm from '../AddItemForm/AddItemForm'
import InfoPageItem from '../InfoPageItem/InfoPageItem'

// This is one of our simplest components
// It doesn't have local state, so it can be a function component.
// It doesn't dispatch any redux actions or display any part of redux state
// or even care what the redux state is, so it doesn't need 'connect()'

// const InfoPage = () => (
//   <div>
//     <p>
//       Shelf Page
//     </p>
//   </div>
// );

// If you needed to add local state or other things,
// you can make it a class component like:

class InfoPage extends React.Component {

  render() {
    return (
      <div>
        <p>Info Page</p>
        {/* <p>JSON:</p>{JSON.stringify(this.props.store.user)} */}
        <AddItemForm/>
        <table>
          <thead>
            <tr><th>Description</th><th>Picture</th><th>Comment</th><th>User ID</th><th></th></tr>
          </thead>
          <tbody>
              {this.props.store.shelf.map((item) => {
                  return (
                      <InfoPageItem key= {item.id} item={item}/>
                  );
              })} 
          </tbody>

        </table>

      </div>
    )
  }
}


export default connect (mapStoreToProps) (InfoPage);
