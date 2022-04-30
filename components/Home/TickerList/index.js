import React from "react";
import Tab from "@/utils/Tab";
import TabPane from "@/utils/TabPane";
import TabPaneTicker from "./TabPaneTicker";
import { useSelector } from "react-redux";

const TickerLists = ({ cryptocurrencies }) => {
  const { activeMarket, marketPairs } = useSelector((state) => state.ticker);
  let filteredPairs = marketPairs
    ? Object.keys(marketPairs).filter((item) => item.endsWith(activeMarket))
    : [];
  return (
    <div className="card">
      <div className="card-header align-items-center d-flex">
        <div className="flex-shrink-0">
          <ul
            className="nav justify-content-end nav-tabs-custom rounded card-header-tabs"
            role="tablist"
          >
            <Tab
              tabId="#gbpTab"
              active={activeMarket == "GBP" ? "active" : ""}
              tabName="gbp"
              data-type="sub"
              data-tab="GBP"
            />
            <Tab
              tabId="#usdtTab"
              active={activeMarket == "USDT" ? "active" : ""}
              tabName="usdt"
              data-type="sub"
              data-tab="USDT"
            />
          </ul>
        </div>
      </div>
      <div
        className="card-body px-0"
        style={{ overflowY: "scroll", height: 890 }}
      >
        <div className="tab-content">
          <TabPane active="active">
            {filteredPairs
              ? filteredPairs.map((ticker) => {
                  const tickerData = marketPairs[ticker];
                  return (
                    <TabPaneTicker
                      key={tickerData.s}
                      name={tickerData.s}
                      change={tickerData.P}
                      currentValue={tickerData.b}
                      amount="Amount"
                      market={activeMarket}
                      cryptocurrencies={cryptocurrencies}
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

export default TickerLists;
