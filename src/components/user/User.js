import React, { Fragment, useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getUserRequest } from '../../actions/users';
import { Link } from 'react-router-dom';
import Spinner from '../layout/Spinner';
import timestampToTime from '../../utils/timeFormater'


const User = ({ getUserRequest, user: { user, loading }, match })  => {
  useEffect(() => {
    getUserRequest(match.params.id);
  }, [getUserRequest, match.params.id])

  return loading || user === null ? (
    <Spinner />
  ) : (
    <Fragment>
      <section className="content-header">
        <div className="container-fluid">
          <div className="row my-3">
            <div className="col-sm-6">
              <h1>3D NFT Model Details</h1>
            </div>
            <div className="col-sm-6">
              <ol className="breadcrumb float-sm-right">
                <li className="breadcrumb-item"><Link to="/">Home</Link></li>
                <li className="breadcrumb-item"><Link to="/nft_models"> 3D NFT Model List</Link></li>
                <li className="breadcrumb-item active">3D NFT Model Details</li>
              </ol>
            </div>
          </div>
        </div>
      </section>

      <section className="content">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="card">
                <div className="card-header">
                  <div className="card-tools ml-auto">
                    <Link to={'/order/new'}  className="btn btn-warning">New Order</Link>
                    <Link to={'/nft_model/new'}  className="btn btn-primary ml-3">Upload NFT Model</Link>
                  </div>
                </div>
                
                <div className="card-body table-responsive p-5">
                  <div className="container">
                    <div className="row">
                      <div className="col-12">
                        <p className="mb-0">Name</p>
                        <p className="h3">{user.name}</p>
                      </div>

                      <div className="col-12">
                        <p className="mb-0 pt-4">Email</p>
                        <p className="h3">{user.email}</p>
                      </div>
        
                      <div className="col-12">
                        <p className="mb-0 pt-4">DID</p>
                        <p className="h3">{user.did}</p>
                      </div>
{/* 
                      <div className="col-12">
                        <p className="mb-0 pt-4">Public Key</p>
                        <p className="h3">{user.publicKey}</p>
                      </div> */}

                      <div className="col-12">
                        <p className="mb-0 pt-4">Address</p>
                        <p className="h3">{user.address}</p>
                      </div>

                      <div className="col-12">
                        <p className="mb-0 pt-4">Balance</p>
                        <p className="h3">{user.balance} wei</p>
                      </div>

                      <div className="col-12">
                        <p className="mt-3">CreatedAt: {timestampToTime(user.createdAt)}</p>
                        <p className="mt-3">UpdatedAt: {timestampToTime(user.updatedAt)}</p>
                      </div>

                    </div>
                    
                    {/* {vcSchema.vcSchemaProperties.map((schema) => 
                      <>
                        <hr className="my-2" />
                        <div className="row">
                          <div className="col-6">
                            <p className="mb-0 pt-2">項目名</p>
                            <p className="h4">{schema.propName}</p>
                          </div>
                          <div className="col-6">
                            <p className="mb-0 pt-2">項目値型</p>
                            <p className="h4">{nftModel.propType}</p>
                          </div>
                        </div>
                      </>
                    )} */}
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


User.propTypes = {
  getUserRequest: PropTypes.func.isRequired,
  user: PropTypes.object.isRequired
}

const mapStateToProps = (state) => ({
  user: state.user
})

export default connect(mapStateToProps, { getUserRequest })(User);