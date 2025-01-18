import React, { useState } from "react";

const NavBarBox = ({ title, children }) => {
  const [show, setShow] = useState(false);
  const onToggle = () => {
    setShow((prev) => !prev);
  };

  return (
    <>
      <div className="col-12  text-uppercase">
        <React.Fragment key={0}>
          <div
            className="bg-primary  p-3 text-center fs-5 fw-bold d-flex justify-content-between"
            style={{
              borderBottom: "1px solid white",
            }}
          >
            <div className="text-decoration-none text-white">{title}</div>

            <button
              className="btn btn-sm "
              style={{
                textDecoration: "underline",
                border: "none",
                cursor: "pointer",
                outline: "none", // Loại bỏ outline
                boxShadow: "none", // Loại bỏ bóng khi focus
              }}
              onClick={onToggle}
            >
              {show ? (
                <i className="bi bi-caret-up-fill  text-white"></i>
              ) : (
                <i className="bi bi-caret-down-fill text-white"></i>
              )}
            </button>
          </div>
        </React.Fragment>
        {show && children}
      </div>
    </>
  );
};
export default NavBarBox;
