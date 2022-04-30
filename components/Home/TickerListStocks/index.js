import React, { useState, useEffect } from "react";
import TabPane from "@/utils/TabPane";
import TickerData from "./TickerData";
import ReactPaginate from "react-paginate";

const TickerListStocks = ({ stocks }) => {
  const [currentItems, setCurrentItems] = useState(null);
  const [pageCount, setPageCount] = useState(0);
  const [itemOffset, setItemOffset] = useState(0);
  const itemsPerPage = 25;

  function Items({ currentItems }) {
    return (
      <>
        {currentItems &&
          currentItems.map((item) => (
            <TickerData
              key={item.ticker}
              name={item.name}
              ticker={item.ticker}
              logo={item.logo}
            />
          ))}
      </>
    );
  }

  useEffect(() => {
    // Fetch items from another resources.
    const endOffset = itemOffset + itemsPerPage;
    console.log(`Loading items from ${itemOffset} to ${endOffset}`);
    setCurrentItems(stocks.slice(itemOffset, endOffset));
    setPageCount(Math.ceil(stocks.length / itemsPerPage));
  }, [itemOffset, itemsPerPage]);

  // Invoke when user click to request another page.
  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % stocks.length;
    console.log(
      `User requested page number ${event.selected}, which is offset ${newOffset}`
    );
    setItemOffset(newOffset);
  };

  return (
    <div className="card">
      <div
        className="card-body px-0"
        style={{ overflowY: "scroll", height: 890 }}
      >
        <div className="tab-content">
          <TabPane active="active">
            <Items currentItems={currentItems} />
          </TabPane>
          <ReactPaginate
            breakLabel="..."
            nextLabel=">"
            onPageChange={handlePageClick}
            pageRangeDisplayed={5}
            pageCount={pageCount}
            previousLabel="<"
            renderOnZeroPageCount={null}
            breakClassName={"page-item"}
            breakLinkClassName={"page-link"}
            containerClassName={"pagination"}
            pageClassName={"page-item"}
            pageLinkClassName={"page-link"}
            previousClassName={"page-item"}
            previousLinkClassName={"page-link"}
            nextClassName={"page-item"}
            nextLinkClassName={"page-link"}
            activeClassName={"active"}
          />
        </div>
      </div>
    </div>
  );
};

export default TickerListStocks;
