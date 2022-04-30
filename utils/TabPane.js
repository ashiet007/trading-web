import React from "react";

const TabPane = (props) => {
  return (
    <div
      className={`tab-pane ${props.active}`}
      id={props.tabId}
      role="tabpanel"
    >
      <div className="table-responsive px-3" style={props.styles}>
        <table className="table align-middle table-nowrap table-borderless">
          <tbody>{props.children}</tbody>
        </table>
      </div>
    </div>
  );
};

export default TabPane;
