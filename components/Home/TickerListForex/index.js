import React from "react";
import TabPane from "@/utils/TabPane";
import TickerData from "./TickerData";

const TickerListForex = ({ forexes }) => {
  return (
    <div className="card">
      <div
        className="card-body px-0"
        style={{ overflowY: "scroll", height: 890 }}
      >
        <div className="tab-content">
          <TabPane active="active">
            {Object.keys(forexes).length != 0
              ? Object.keys(forexes).map((key) => {
                  const forexData = forexes[key];
                  return (
                    <TickerData
                      key={forexData.ticker}
                      name={forexData.name}
                      ticker={forexData.ticker}
                      logo={forexData.logo}
                    />
                  );
                })
              : null}
          </TabPane>
        </div>
      </div>
    </div>
  );
};

export default TickerListForex;
