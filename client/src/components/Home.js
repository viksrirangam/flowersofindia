import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

import { _getAll } from '../actions/index'
import api from '../api'

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = { isLoaded: true };
  }

  componentDidUpdate(prevProps) {    
    this.props.getCatalogs();
  }

  render() {
    return (
      <div>
        <nav className="breadcrumb has-arrow-separator" aria-label="breadcrumbs">
          <ul>
            <li><Link to="/">Home</Link></li>
          </ul>
        </nav>
        <h1>Welcome Flowers Of India!</h1>
        <ul>
          {
            this.props.catalogs.map(p => (
              <li key={p.number}>
                <div className="card">
                  <div className="card-content">
                    <div className="media">
                      <div className="media-left">
                        <figure className="image is-48x48">
                          <img src="https://bulma.io/images/placeholders/96x96.png" alt="player face" />
                        </figure>
                      </div>
                      <div className="media-content">
                        <p><Link className="subtitle is-6" to={`/roster/${p.number}`}>{p.name}</Link></p>
                        <p className="subtitle is-6">#{p.number}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
            ))
          }
        </ul>
      </div>
    );
  }
}

const mapStateToProps = (state, props) => {
  return {
    completed: state.catalogs.completed,
    catalogs: state.catalogs.catalogs
  };
}

const mapDispatchToProps = (dispatch, props) => {  
  return {
    getCatalogs: () => { var promise = api.getCatalogs(); return dispatch(_getAll(promise)); }
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Home)
