import React from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'

import { _getCatalog } from '../actions/index'
import api from '../api'


const Plants = (props) => {
  return (
    <div>
      <nav className="breadcrumb has-arrow-separator" aria-label="breadcrumbs">
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/catalog">Catalog</Link></li>
          </ul>
        </nav>
      <ul>
        {
          props.players.map(p => (
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
  )
}

const mapStateToProps = (state, props) => {
  return {
    completed: state.catalogs.completed,
    plants: state.catalogs.plants
  };
}

const mapDispatchToProps = (dispatch, props) => {
  var catalog_name = Number.parseInt(props.match.params.number);
  return {
    getCatalogs: (p) => { var promise = api.getCatalog(catalog_name); return dispatch(_getCatalog(promise)); }
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Plants)
