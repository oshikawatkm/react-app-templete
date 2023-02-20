import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import { Link } from "react-router-dom";
import { connect } from 'react-redux';
import { loginUserRequest } from '../../actions/users';


class LoginUser extends Component {
  constructor() {
    super();
    this.state = {
      email: '',
      password: '',
      errors: {}
    }

    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.errors) {
      this.setState({ errors: nextProps.errors })
    }
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  async onSubmit(e) {
    e.preventDefault();
    const formData= {
      email: this.state.email,
      password: this.state.password,
    }

    await this.props.loginUserRequest(formData);
    this.props.history.push('/users/1')
  }

  render() {
    const { errors } = this.state;

    return (
      <Fragment>
        <section className="content-header">
          <div className="container-fluid">
            <div className="row my-3">
              <div className="col-sm-6"></div>
              <div className="col-sm-5">
                <ol className="breadcrumb float-sm-right">
                <li className="breadcrumb-item"><Link to="/">Home</Link></li>
                <li className="breadcrumb-item active">Sign In As User</li>
                </ol>
              </div>
            </div>
          </div>
        </section>

        <section className="content">
          <div className="container-fluid">
            <div className="row">
              <div className="col-2"></div>
              <div className="col-9">
                <div className="card">

                  <div className="card-body table-responsive p-0">
                    <div className="container">
                      <div className="row">

                        <div className="col-12">
                          <h2 className="text-center my-5">Sign In As User</h2>
                          <form onSubmit={this.onSubmit}>
                            <div className="form-group">
                              <label for="emailInput">Email</label>
                              <input
                                  placeholder="example@email.com"
                                  name="email"
                                  className="form-control"
                                  id="emailInput"
                                  type="email"
                                  required={true}
                                  value={this.state.email} 
                                  onChange={this.onChange} 
                                  error={errors.email}
                                />
                            </div>
                            <div className="form-group">
                              <label for="passwordInput">Password</label>
                              <input
                                name="password"
                                className="form-control"
                                id="passwordInput"
                                type="password"
                                value={this.state.password} 
                                onChange={this.onChange} 
                                error={errors.password}
                              />
                            </div>
                           
                            <button type="submit" className="btn btn-primary btn-block my-5">Sign In</button>
                          </form>
                        </div>
                      </div>
                    </div>
                  </div>

                </div>
              </div>
            </div>
          </div>
        </section>
      </Fragment>
    )
  }
}


LoginUser.propTypes = {
  loginUserRequest: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired
}

const mapStateToProps = state => ({
  auth: state.auth,
  errors: state.errors
})

export default connect(mapStateToProps, { loginUserRequest })(withRouter(LoginUser));