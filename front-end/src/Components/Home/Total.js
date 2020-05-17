import React from "react";

function Total() {
  return (
    <div className="total-project">
      <div className="row text-center">
        <div className="col">
          <h1 className="counter-title">8</h1>
          <p className="text-center text-white">Finished Project</p>
        </div>
        <div className="col justify-content-center">
          <h1 className="counter-title">10</h1>
          <p className="text-center text-white">Donate</p>
        </div>
        <div className="col justify-content-center">
          <h1 className="counter-title">3</h1>
          <p className="text-center text-white">Category</p>
        </div>
      </div>
    </div>
  );
}

export default Total;
