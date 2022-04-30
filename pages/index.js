import BuySell from "@/components/Home/BuySell";
import OrderBook from "@/components/Home/OrderBook";
import OrderHistory from "@/components/Home/OrderHistory";
import TickerLists from "@/components/Home/TickerList";
import TradeHistory from "@/components/Home/TradeHistory";
import TradingChart from "@/components/Home/TradingChart";
import Tab from "@/utils/Tab";
import { useSelector, useDispatch } from "react-redux";
import { useRef, useEffect } from "react";
import { updateMarketPairs } from "@/store/slice/tickerSlice";
import { useSession } from "next-auth/react";
import { updateStocksQuotes } from "@/store/slice/stocksSlice";
import { updateForexQuotes } from "@/store/slice/forexSlice";
import TickerListStocks from "@/components/Home/TickerListStocks";
import TickerListForex from "./../components/Home/TickerListForex/index";
import { updateActiveTicker } from "@/store/slice/commonSlice";

export default function Home({
  cryptocurrencies: cryptocurrencies,
  stocks: stocks,
  forexes: forexes,
}) {
  const ws = useRef(null);
  const wsStocks = useRef(null);
  const wsForex = useRef(null);
  const dispatch = useDispatch();
  const { activeMarket } = useSelector((state) => state.ticker);
  const { activeMainTab, activeTicker } = useSelector((state) => state.common);
  const { activeStock } = useSelector((state) => state.stocks);
  const { activeForex } = useSelector((state) => state.forex);

  let tickerName = "";
  if (activeMainTab === "cryptocurrency") {
    tickerName = `${activeTicker.replace(activeMarket, "")}/${activeMarket}`;
  } else if (activeMainTab === "stocks") {
    let activeStock = stocks.find((stock) => stock.ticker == activeTicker);
    tickerName = activeStock ? activeStock.name : activeTicker;
  } else {
    let activeForex = forexes.find((forex) => forex.ticker == activeTicker);
    tickerName = activeForex ? activeForex.name : activeTicker;
  }

  const connectTicker = () => {
    //connect
    ws.current = new WebSocket("wss://stream.binance.com:9443/ws/!ticker@arr");
    // on message rece ive
    ws.current.onmessage = (e) => {
      const allTickers = JSON.parse(e.data);
      let tickers = {};
      allTickers.forEach((data) => {
        tickers[data.s] = data;
      });
      dispatch(updateMarketPairs(tickers));
    };
  };

  const connectStocksQuote = () => {
    wsStocks.current = new WebSocket("wss://socket.polygon.io/stocks");

    let tickers = [];
    tickers.push(`Q.${activeStock}`);
    // Connection Opened:
    wsStocks.current.onopen = (e) => {
      wsStocks.current.send(
        `{"action":"auth","params":"${process.env.NEXT_POLYGON_API_KEY}"}`
      );
      wsStocks.current.send(
        `{"action":"subscribe", "params":"${tickers.join()}"}`
      );
    };

    // Per message packet:
    wsStocks.current.onmessage = (e) => {
      const allStocks = JSON.parse(e.data);
      let stocksQuotesList = {};
      allStocks.forEach((item) => {
        if (item.sym != undefined) {
          stocksQuotesList[item.sym] = {
            sym: item.sym,
            bp: item.bp,
            ap: item.ap,
          };
        }
      });
      dispatch(updateStocksQuotes(stocksQuotesList));
    };
  };

  const connectForexQuote = () => {
    wsForex.current = new WebSocket("wss://socket.polygon.io/forex");

    let tickers = [];
    tickers.push(`C.${activeForex}`);
    // Connection Opened:
    wsForex.current.onopen = (e) => {
      wsForex.current.send(
        `{"action":"auth","params":"${process.env.NEXT_POLYGON_API_KEY}"}`
      );
      wsForex.current.send(
        `{"action":"subscribe", "params":"${tickers.join()}"}`
      );
    };

    // Per message packet:
    wsForex.current.onmessage = (e) => {
      const allForexes = JSON.parse(e.data);
      let forexesQuotesList = {};
      allForexes.forEach((item) => {
        if (item.p != undefined) {
          forexesQuotesList[item.p] = {
            sym: item.p,
            bp: item.b,
            ap: item.a,
          };
        }
      });
      dispatch(updateForexQuotes(forexesQuotesList));
    };
  };

  const RenderTickers = () => {
    if (activeMainTab === "cryptocurrency") {
      return <TickerLists cryptocurrencies={cryptocurrencies} />;
    } else if (activeMainTab === "stocks") {
      return <TickerListStocks stocks={stocks} />;
    } else {
      return <TickerListForex forexes={forexes} />;
    }
  };

  useEffect(() => {
    if (activeMainTab === "cryptocurrency") {
      if (wsStocks.current) {
        wsStocks.current.close();
      }
      if (wsForex.current) {
        wsForex.current.close();
      }
      connectTicker();
      dispatch(updateActiveTicker("BTCGBP"));
    } else if (activeMainTab === "stocks") {
      if (ws.current) {
        ws.current.close();
      }
      if (wsForex.current) {
        wsForex.current.close();
      }
      connectStocksQuote();
      dispatch(updateActiveTicker("A"));
    } else {
      if (ws.current) {
        ws.current.close();
      }
      if (wsStocks.current) {
        wsStocks.current.close();
      }
      connectForexQuote();
      dispatch(updateActiveTicker("AED/AUD"));
    }
  }, [activeMainTab]);

  return (
    <div className="page-content">
      <div className="card">
        <div className="card-header align-items-center d-flex">
          <div className="flex-shrink-0">
            <ul
              className="nav justify-content-end nav-tabs-custom rounded card-header-tabs"
              role="tablist"
            >
              <Tab
                tabId="#cryptoTab"
                active="active"
                tabName="cryptocurrency"
                data-type="main"
                data-tab="cryptocurrency"
              />
              <Tab
                tabId="#stocksTab"
                active=""
                tabName="stocks"
                data-type="main"
                data-tab="stocks"
              />
              <Tab
                tabId="#forexTab"
                active=""
                tabName="forex"
                data-type="main"
                data-tab="forex"
              />
            </ul>
          </div>
        </div>
        <div className="card-body px-0">
          <div className="tab-content">
            <div className="tab-pane active">
              <div className="container-fluid">
                <div className="row">
                  <div className="col-xl-3">
                    <RenderTickers />
                  </div>
                  <div className="col-xl-6">
                    <TradingChart name={tickerName} />
                    <div className="row">
                      <div className="col-xl-8">
                        <OrderBook />
                      </div>
                      <div className="col-xl-4">
                        <TradeHistory />
                      </div>
                    </div>
                  </div>
                  <div className="col-xl-3">
                    <OrderHistory />
                    <BuySell />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export async function getStaticProps() {
  //Get Cryptocurrencies
  const resCrypto = await fetch(`${process.env.API_URL}/cryptocurrencies`);
  const { cryptocurrencies } = await resCrypto.json();

  //Get Stocks
  const resStocks = await fetch(`${process.env.API_URL}/polygon-stocks`);
  const { stocks } = await resStocks.json();

  //Get Forexes
  const resForex = await fetch(`${process.env.API_URL}/polygon-forex`);
  const { forexes } = await resForex.json();
  return {
    props: {
      cryptocurrencies,
      stocks,
      forexes,
    },
  };
}
