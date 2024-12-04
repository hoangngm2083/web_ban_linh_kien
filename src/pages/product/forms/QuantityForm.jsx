import React from "react";

const QuantityForm = ({
  quantityRef,
  handleIncrease,
  handleDecrease,
  initValue,
}) => {
  return (
    <div className="d-inline float-start me-2">
      <div className="input-group input-group-sm mw-140">
        <button
          onClick={handleDecrease}
          className="btn btn-primary text-white"
          type="button"
        >
          <i className="bi bi-dash-lg"></i>
        </button>
        <input
          type="number"
          value={initValue}
          ref={quantityRef}
          readOnly
          min="1"
          className="form-control "
          style={{ width: 55 + "px" }}
        />
        <button
          onClick={handleIncrease}
          className="btn btn-primary text-white"
          type="button"
        >
          <i className="bi bi-plus-lg"></i>
        </button>
      </div>
    </div>
  );
};

export default React.memo(QuantityForm);
