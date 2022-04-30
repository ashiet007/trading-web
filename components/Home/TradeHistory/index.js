import React from "react";

const TradeHistory = () => {
  return (
    <div className="card mt-2">
      <div className="card-header align-items-center d-flex">
        <h4 className="card-title mb-0 flex-grow-1">Trade History</h4>
      </div>
      <div className="card-body px-0">
        <div className="table-responsive px-3" style={{ minHeight: 332 }}>
          <table className="table align-middle table-nowrap table-borderless">
            <tbody>
              <tr>
                <td className="text-green"> 0.005 </td>
                <td> 0.004 </td>
                <td className="text-red"> 0.007</td>
              </tr>
              <tr>
                <td className="text-green"> 0.005 </td>
                <td> 0.004 </td>
                <td className="text-red"> 0.007</td>
              </tr>
              <tr>
                <td className="text-green"> 0.005 </td>
                <td> 0.004 </td>
                <td className="text-red"> 0.007</td>
              </tr>
              <tr>
                <td className="text-green"> 0.005 </td>
                <td> 0.004 </td>
                <td className="text-red"> 0.007</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default TradeHistory;
