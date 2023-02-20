import React, { setState, useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { completeOrderRequest } from '../../actions/orders';


const initialState = {
  format: '',
  file: null
};

const CompleteForm = ({completeOrderRequest, match}) => {
  const [formData, setFormData] = useState(initialState);
  
  const {
    format,
    file,
  } = formData;

  const onChange = (e) =>
  setFormData({ ...formData, [e.target.name]: e.target.value });

  const fileUpload = (e) => {
    formData.file = e.target.files[0]
  }

  const onSubmit = (e) => {
    console.log(formData)
    e.preventDefault();
    completeOrderRequest(match.params.id, formData);
  };

  return (
    <div className="card m-3">    
      <div className="card-body table-responsive">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <h2 className="text-center my-5">Update Converted 3D Model</h2>
              <form onSubmit={onSubmit}>

                <div className="form-group">
                  <label for="formatInput">Format</label>
                  <input
                    placeholder=".format"
                    name="format"
                    className="form-control"
                    id="formatInput"
                    required={true}
                    value={format} 
                    onChange={onChange} 
                  />
                </div>

                <p className="mt-4 mb-0">3D Model File</p>
                <div className="input-group mb-3">
                  <div className="input-group-prepend">
                    <span className="input-group-text" id="inputGroupFileAddon01">Upload</span>
                  </div>
                  <div className="custom-file">
                    <input 
                      type="file" 
                      className="custom-file-input" 
                      id="inputGroupFile01" 
                      aria-describedby="inputGroupFileAddon01" 
                      required={true}
                      name="file"
                      value={file} 
                      onChange={fileUpload} 
                    />
                    <label className="custom-file-label" for="inputGroupFile01">Choose file</label>
                  </div>
                </div>
              
                <button type="submit" className="btn btn-primary btn-block my-5">Updload Converted File</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

CompleteForm.propTypes = {
  completeOrderRequest: PropTypes.func.isRequired,
  errors: PropTypes.object.isRequired
}

const mapStateToProps = (state) => ({
  errors: state.errors
})

export default connect(mapStateToProps, { completeOrderRequest })(CompleteForm);