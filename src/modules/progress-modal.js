import React from "react";

export default function ProgressModal(props) {
  return (
    <div className="modal">
      <div className="modal-title">
        {props.state.charAt(0).toUpperCase() + props.state.slice(1)} -{" "}
        {props.percent}%
      </div>
      <div className="flex-row">
        <div className="progress-bar" style={{ width: props.percent + "%" }} />
        <div
          onClick={() => cancel(props.action, props.cancelRequest)}
          className="button cancel-button"
          style={{ alignSelf: "center", margin: 1 + "em" }}
        >
          &times;
        </div>
      </div>
    </div>
  );
}

function cancel(stateChanger, cancelRequest) {
  // console.log("cancelling");
  // window.location.reload();
  stateChanger(false);
  cancelRequest();
}
