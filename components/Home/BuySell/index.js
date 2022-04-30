import Tab from "@/utils/Tab";
import React from "react";
import BuyTab from "./BuyTab";
import SellTab from "./SellTab";

const BuySell = () => {
  return (
    <div className="card mt-4">
      <div className="card-header align-items-center d-flex">
        <div className="flex-shrink-0">
          <ul
            className="nav justify-content-end nav-tabs-custom rounded card-header-tabs"
            role="tablist"
          >
            <Tab tabName="Buy" tabId="#buy-tab" active="active" />
            <Tab tabName="Sell" tabId="#sell-tab" active="" />
          </ul>
        </div>
      </div>
      <div className="card-body">
        <div className="tab-content">
          <BuyTab />
          <SellTab />
        </div>
      </div>
    </div>
  );
};

export default BuySell;
