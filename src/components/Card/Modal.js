import React from "react";

export const Modal = ({ launch }) => (
  <div
    className="modal fade"
    id={`popup${launch.id}`}
    tabIndex="-1"
    aria-labelledby="exampleModalLabel"
    aria-hidden="true"
  >
    <div className="modal-dialog">
      <div className="modal-content">
        <div className="modal-header">
          <h5 className="modal-title" id="exampleModalLabel">
            {launch.name}
          </h5>
          <button
            type="button"
            className="btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
          ></button>
        </div>
        <div className="modal-body">
          <div className="row rocket-info">
            <div class="col-md-3">
              <img src={launch.links.patch.small} />
            </div>
            <div class="col-md-9">
              <h4>Details</h4>
              <p>{launch.details}</p>
            </div>
          </div>
        </div>
        <div className="modal-footer">
          <button
            type="button"
            className="btn btn-primary"
            data-bs-dismiss="modal"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  </div>
);
