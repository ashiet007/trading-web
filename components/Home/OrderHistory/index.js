import Tab from "@/utils/Tab";
import TabPane from "@/utils/TabPane";
import React from "react";

const OrderHistory = () => {
  return (
    <div className="card">
      <div className="card-header align-items-center d-flex">
        <div className="flex-shrink-0">
          <ul
            className="nav justify-content-end nav-tabs-custom rounded card-header-tabs"
            role="tablist"
          >
            <Tab tabName="Open Orders" tabId="#orders-tab" active="active" />
            <Tab tabName="Completed Orders" tabId="#completed-tab" active="" />
          </ul>
        </div>
      </div>
      <div className="card-body px-0">
        <div className="tab-content">
          <TabPane
            active="active"
            tabId="orders-tab"
            styles={{ minHeight: 328 }}
          >
            <tr>
              <td>
                <p className="text-muted mb-0 font-size-12">
                  No open orders...
                </p>
              </td>
            </tr>
          </TabPane>
          <TabPane active="" tabId="completed-tab" styles={{ minHeight: 328 }}>
            <tr>
              <td>
                <p className="text-muted mb-0 font-size-12">
                  No open orders...
                </p>
              </td>
            </tr>
          </TabPane>
        </div>
      </div>
    </div>
  );
};

export default OrderHistory;
