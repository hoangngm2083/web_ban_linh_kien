import React, { useState } from "react";

const InfoBoxEle = (props) => {
  const { ele } = props;
  const [showChangeButton, setShowChangeButton] = useState(false);
  const [isCLickedUpdateButton, setIsCLickedUpdateButton] = useState(false);

  const handleMouseEnter = () => {
    setShowChangeButton(true);
  };
  const handleMouseLeave = () => {
    setShowChangeButton(false);
  };

  const handleClickUpdateButton = () => {
    setIsCLickedUpdateButton(true);
  };

  const handleClickCancelButton = () => {
    setIsCLickedUpdateButton(false);
  };
  return (
    <div
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className="col-4 d-flex"
    >
      <p
        style={{
          width: "30%",
        }}
      >
        {" "}
        {ele?.fieldName}:
      </p>
      {isCLickedUpdateButton ? (
        <input
          style={{
            width: "60%",
            padding: "2px 5px",
          }}
          id={ele?.id}
          name={ele?.id}
          value={ele?.value}
        />
      ) : (
        <strong
          style={{
            width: "60%",
          }}
        >
          {ele?.value}
        </strong>
      )}

      {showChangeButton &&
        ((isCLickedUpdateButton && (
          <i
            onClick={handleClickCancelButton}
            style={{
              display: "flex",
              justifyContent: "end",
              alignItems: "center",
              opacity: "0.8",
              fontSize: "12px",
              width: "10%",
            }}
            className="bi bi-x-circle-fill"
          ></i>
        )) ||
          (!isCLickedUpdateButton && (
            <i
              onClick={handleClickUpdateButton}
              style={{
                display: "flex",
                justifyContent: "end",
                alignItems: "center",
                opacity: "0.8",
                fontSize: "12px",
                width: "10%",
              }}
              className=" bi bi-pen-fill"
            ></i>
          )))}
    </div>
  );
};

export default React.memo(InfoBoxEle);
