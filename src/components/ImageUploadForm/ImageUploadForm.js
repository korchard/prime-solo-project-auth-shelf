import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapStoreToProps from '../../redux/mapStoreToProps';
import { PickerOverlay } from 'filestack-react';
// import * as filestack from 'filestack-js';
// const client = filestack.init('Aq0kyIR3ZRnOyjmmA7znFz');




// Basic class component structure for React with default state
// value setup. When making a new component be sure to replace
// the component name TemplateClass with the name for the new
// component.
class ImageUploadForm extends Component {

    state = {
        url: '',
        imageUploadOpen: false
    }

    openImageUpload = () => {
        this.setState({
            imageUploadOpen: true
        })
    }
    
    render() {
    return (
      <div>
          {this.state.imageUploadOpen && 
            <PickerOverlay 
                apikey='INSERT_API_KEY_HERE'
                onSuccess={(res) => {
                    console.log('in onSuccess', res)
                    this.props.dispatch({type: 'SET_IMAGE', payload: res.filesUploaded[0].url}) }
                }
                
            />
          }
        <button onClick={this.openImageUpload}>Image Upload</button>
      </div>
    );
  }
}

export default connect(mapStoreToProps)(ImageUploadForm);