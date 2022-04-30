import Link from "next/link";
import React from "react";
import { useDispatch } from "react-redux";
import { updateActiveMainTab } from "@/store/slice/commonSlice";
import { updateActiveMarket } from "@/store/slice/tickerSlice";

const Tab = ({ tabId: tabId, tabName: tabName, active: active, ...rest }) => {
  const dispatch = useDispatch();

  const handleTabClick = (e) => {
    let tabType = e.currentTarget
      ? e.currentTarget.getAttribute("data-type")
      : "sub";
    let tab = e.currentTarget
      ? e.currentTarget.getAttribute("data-tab")
      : "cryptocurrency";
    if (tabType === "main") {
      dispatch(updateActiveMainTab(tab));
    } else if (tabType === "sub") {
      dispatch(updateActiveMarket(tab));
    }
  };

  return (
    <li className="nav-item">
      <Link href={tabId}>
        <a
          className={`nav-link ${active}`}
          data-bs-toggle="tab"
          role="tab"
          onClick={(e) => handleTabClick(e)}
          {...rest}
        >
          {tabName}
        </a>
      </Link>
    </li>
  );
};

export default Tab;
