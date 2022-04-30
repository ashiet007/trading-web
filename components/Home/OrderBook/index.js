import React from "react";

const OrderBook = () => {
  return (
    <div className="card mt-2">
      <div className="card-header align-items-center d-flex">
        <h4 className="card-title mb-0 flex-grow-1">Order Book</h4>
        <div className="flex-shrink-0">
          <ul
            className="nav justify-content-end nav-tabs-custom rounded card-header-tabs"
            role="tablist"
          >
            <li className="nav-item">
              <a
                className="nav-link active"
                data-bs-toggle="tab"
                href="#depth-tab"
                role="tab"
              >
                Market Depth
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link"
                data-bs-toggle="tab"
                href="#volume-tab"
                role="tab"
              >
                Order Volume
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="card-body px-0">
        <div className="tab-content">
          <div className="tab-pane active" id="depth-tab" role="tabpanel">
            <div className="table-responsive px-3" style={{ minHeight: 332 }}>
              <table className="table align-middle table-nowrap table-borderless">
                <tbody>
                  <tr>
                    <td className="text-green"> 0.005 </td>
                    <td> 0.004 </td>
                    <td className="text-red"> 0.007</td>
                    <td> 0.008 </td>
                  </tr>
                  <tr>
                    <td className="text-green"> 0.005 </td>
                    <td> 0.004 </td>
                    <td className="text-red"> 0.007</td>
                    <td> 0.008 </td>
                  </tr>
                  <tr>
                    <td className="text-green"> 0.005 </td>
                    <td> 0.004 </td>
                    <td className="text-red"> 0.007</td>
                    <td> 0.008 </td>
                  </tr>
                  <tr>
                    <td className="text-green"> 0.005 </td>
                    <td> 0.004 </td>
                    <td className="text-red"> 0.007</td>
                    <td> 0.008 </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          <div className="tab-pane" id="volume-tab" role="tabpanel">
            <div className="table-responsive px-3" style={{ minHeight: 332 }}>
              <table className="table align-middle table-nowrap table-borderless">
                <tbody>
                  <tr>
                    <td className="text-green"> 0.001 </td>
                    <td> 0.001 </td>
                    <td className="text-red"> 0.001</td>
                    <td> 0.001 </td>
                  </tr>
                  <tr>
                    <td className="text-green"> 0.001 </td>
                    <td> 0.001 </td>
                    <td className="text-red"> 0.001</td>
                    <td> 0.001 </td>
                  </tr>
                  <tr>
                    <td className="text-green"> 0.001 </td>
                    <td> 0.001 </td>
                    <td className="text-red"> 0.001</td>
                    <td> 0.001 </td>
                  </tr>
                  <tr>
                    <td className="text-green"> 0.001 </td>
                    <td> 0.001 </td>
                    <td className="text-red"> 0.001</td>
                    <td> 0.001 </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderBook;
