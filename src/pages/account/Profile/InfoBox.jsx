import React from "react";
import InfoBoxEle from "./InfoBoxEle";

const InfoBox = (props) => {
  const { title, data } = props;

  return (
    <>
      <div className="accordion-item">
        <h2
          className="accordion-header"
          id={"heading" + title?.replace(/\s+/g, "")}
        >
          <button
            className="accordion-button "
            type="button"
            data-bs-toggle="collapse"
            data-bs-target={"#collapse" + title?.replace(/\s+/g, "")}
            aria-expanded="true"
            aria-controls={"collapse" + title?.replace(/\s+/g, "")}
          >
            <strong>{title}</strong>
          </button>
        </h2>
        <div
          id={"collapse" + title?.replace(/\s+/g, "")}
          className="accordion-collapse collapse show"
          aria-labelledby={"heading" + title?.replace(/\s+/g, "")}
          data-bs-parent="#policyAccordion"
        >
          <div className="accordion-body">
            <div className="container">
              {data &&
                data?.map((row, index) => {
                  const arr = Object.entries(row).map(([key, value]) => ({
                    fieldName: key,
                    value: value,
                    id: key,
                  }));
                  return (
                    <div key={index} className="row border-bottom py-3">
                      {arr?.map((ele, index) => (
                        <InfoBoxEle ele={ele} key={index} />
                      ))}
                    </div>
                  );
                })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default React.memo(InfoBox);
