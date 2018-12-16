import React from "react";
import "./noData.css";

export const NoDataComponent = props => {
  return (
    <div className="noDataBlock">
      <div className="nodDataScreen">
        <div className="circle240">
          <img src="/images/nodatafound2.png" alt="noInformation" />
        </div>
        <h2 className="nodataTxt">
         No Data
        </h2>
      </div>
    </div>
  );
};