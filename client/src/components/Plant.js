import React from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'

import { _getPlant } from '../actions/index'
import api from '../api'

const Player = (props) => {

  return (
    !props.player
      ?
      <div>Sorry, but the player was not found</div>
      :
      <div className="card">
        <div className="card-image">
          <figure className="image is-4by3">
            <img src="https://bulma.io/images/placeholders/1280x960.png" alt="player face" />
          </figure>
        </div>
        <div className="card-content">
          <div className="media">
            <div className="media-left">
              <figure className="image is-48x48">
                <img src="https://bulma.io/images/placeholders/96x96.png" alt="player face" />
              </figure>
            </div>
            <div className="media-content">
              <p className="title is-4">{props.player.name}</p>
              <p className="subtitle is-6">#{props.player.number}</p>
            </div>
          </div>

          <div className="content">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      Phasellus nec iaculis mauris. <a>@bulmaio</a>.
      <a href="#">#css</a> <Link to='/roster'>Back</Link>
            <br />
            <h2 className="tag is-info">Position: {props.player.position}</h2>
            <time>11:09 PM - 1 Jan 2016</time>
          </div>
        </div>
      </div>
  )
}

const mapStateToProps = (state, props) => {
  return {
    completed: state.catalogs.completed,
    plant: state.catalogs.plant
  };
}

const mapDispatchToProps = (dispatch, props) => {
  var plant_name = Number.parseInt(props.match.params.number);
  return {
    getCatalogs: (p) => { var promise = api.getPlant(plant_name); return dispatch(_getPlant(promise)); }
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Player)
