import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="main-nav row mb-4">
        <div className="col-md-1"></div>
        <div className="col-md-5 pb-2">
          <Link to="/register_user" className="program-card card bg-primary text-white text-center">
            <div className="card-body">
              <i className="fas fa-money-bill-wave fa-3x m-3" />
              <h4>Sign Up As User</h4>
              <p className="list-link">ユーザーとして登録</p>
            </div>
          </Link>
        </div>

        <div className="col-md-1"></div>
        <div className="col-md-5 pb-2">
          <Link to="/login_user" className="program-card card border-primary text-center">
            <div className="card-body">
              <i className="fas fa-file text-primary fa-3x m-3" />
              <h4>Sign In As User</h4>
              <p className="card-content text-muted">ユーザーとしてログイン</p>
            </div>
          </Link>
        </div>

      </div>
  );
};

export default Home;