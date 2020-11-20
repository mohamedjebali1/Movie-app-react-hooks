import React from 'react'
import "./list.css"
 function movieCard  (props) {
    return (
        <div className="card-view">
        <div className='card-header'>
            <img className='card-header' src={props.img} alt="poster"/>
        </div>
    <div className="card-movie-content">
        <div className="card-movie-content-head" >
      <h3 className="card-movie-title">{props.name} <span>{props.date}</span></h3>
        </div>
    </div>
    <div className="card-movie-info">
          <div className="movie-duration">
            <label>duration</label>
            <span>{props.duration}</span>
          </div>
          <div className="ratings">
            <span>{props.rating}/5</span>
          </div>
        </div>
      </div>

    )
}
export default movieCard