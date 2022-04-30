import React from "react";

const BuyTab = () => {
  return (
    <div className="tab-pane active" id="buy-tab" role="tabpanel">
      <div className="float-end ms-2">
        <h5 className="font-size-14">
          <i className="bx bx-wallet text-primary font-size-16 align-middle me-1"></i>
          <a href="#!" className="text-reset text-decoration-underline">
            $4335.23
          </a>
        </h5>
      </div>
      <h5 className="font-size-14 mb-4">Buy Coins</h5>
      <div>
        <div className="form-group mb-3">
          <label>Payment method :</label>
          <select className="form-select">
            <option>Direct Bank Payment</option>
            <option>Credit / Debit Card</option>
            <option>Paypal</option>
            <option>Payoneer</option>
            <option>Stripe</option>
          </select>
        </div>
        <div>
          <label>Add Amount :</label>
          <div className="input-group mb-3">
            <label className="input-group-text">Amount</label>
            <select className="form-select" style={{ maxWidth: 90 }}>
              <option value="BT">BTC</option>
              <option value="ET">ETH</option>
              <option value="LT">LTC</option>
            </select>
            <input
              type="text"
              className="form-control"
              placeholder="0.00121255"
            />
          </div>
          <div className="input-group mb-3">
            <label className="input-group-text">Price</label>
            <input type="text" className="form-control" placeholder="$58,245" />
            <label className="input-group-text">$</label>
          </div>
          <div className="input-group mb-3">
            <label className="input-group-text">Total</label>
            <input
              type="text"
              className="form-control"
              placeholder="$36,854.25"
            />
          </div>
        </div>
        <div className="text-center">
          <button type="button" className="btn btn-success w-md">
            Buy Coin
          </button>
        </div>
      </div>
    </div>
  );
};

export default BuyTab;
