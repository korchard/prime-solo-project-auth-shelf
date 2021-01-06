import React from 'react';
import { connect } from 'react-redux';
import mapStoreToProps from '../../redux/mapStoreToProps';


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
        {/* <p>JSON:</p>{JSON.stringify(this.props.store.shelf)} */}
        <tbody>
            {this.props.store.shelf.map((item) => {
                return (
                    <tr key={item.id}><td>{item.description}</td><td>{item.image_url}</td><td>{item.user_id}</td></tr>
                );
            })} 
        </tbody>

      </div>
    )
  }
}


export default connect (mapStoreToProps) (InfoPage);
