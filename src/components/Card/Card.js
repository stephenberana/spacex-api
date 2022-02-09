import React from "react";

export const Card = (prop) => (
  <div className="card mb-3" key={prop.launch.id}>
    <div className="card-body">
      <h1 className="card-text">{prop.launch.name}</h1>
      <a
        href="#"
        className="btn btn-primary"
        data-bs-toggle="modal"
        data-bs-target={`#popup${prop.launch.id}`}
      >
        View
      </a>
    </div>
  </div>
);
