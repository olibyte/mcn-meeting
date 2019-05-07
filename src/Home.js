import React, { Component } from 'react';
import { Link } from '@reach/router';

class Home extends Component {
  render() {
    const { user } = this.props;

    const biggerLead = {
      fontSize: 1.4 + 'em',
      fontWeight: 200
    };

    return (
      <div className="container text-center">
        <div className="row justify-content-center">
          <div className="col-10 col-md-10 col-lg-8 col-xl-7">
            <div
              className="display-4 mt-3 mb-2"
              style={{
                fontSize: 2.8 + 'em',
                color: "#00a7f2"
              }}
            >
              McN Meeting Log
            </div>
           
            <div className="mt-3 mb-2 text-center justify-content-center">
            <p className="lead" style={biggerLead}>
              This simple McN app creates meetings, allows employees to check
              in, and picks random users to award giveaways. Visit <a href="https://www.mcgrathnicol.com/" target="_blank">McGrathNicol</a>{' '}
              to learn more.
            </p>
            </div>

            {user == null && (
              <span>
                <Link
                  to="/register"
                  className="btn btn-outline-primary mr-2"
                >
                  Register
                </Link>
                <Link
                  to="/login"
                  className="btn btn-outline-primary mr-2"
                >
                  Log In
                </Link>
              </span>
            )}
            {user && (
              <Link to="/meetings" className="btn btn-primary">
                Meetings
              </Link>
            )}
          </div>{' '}
          {/* columns */}
        </div>
      </div>
    );
  }
}

export default Home;
