import React from 'react'
import "./Card.css";

function Card({ title, subtitle }) {
  return (
    <div className="card">
      <div className="card-content">
        <h3>{title}</h3>
        {subtitle ? <p>{subtitle}</p> : null}
      </div>
    </div>
  );
}

export default Card
