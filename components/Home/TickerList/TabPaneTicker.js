import React from "react";
import { useDispatch } from "react-redux";
import { updateActiveTicker } from "@/store/slice/commonSlice";

const TabPaneTicker = ({
  name,
  change,
  currentValue,
  amount,
  market,
  cryptocurrencies,
}) => {
  const dispatch = useDispatch();
  const coin = name.replace(market, "");
  const handleUpdateCurrency = (ticker) => {
    dispatch(updateActiveTicker(ticker));
  };
  const crypto = cryptocurrencies.find(
    (currency) => currency.type === coin.toLowerCase()
  );
  return (
    <tr
      onClick={() => handleUpdateCurrency(name)}
      style={{ cursor: "pointer" }}
    >
      <td style={{ width: "50px" }}>
        {crypto?.logo != null ? (
          <div className="font-size-22 text-success">
            <img
              src={`${process.env.NEXT_PUBLIC_URL}/storage${crypto.logo}`}
              className="rounded-circle"
              style={{ maxWidth: "100%" }}
            />
          </div>
        ) : (
          <div
            className="avatar-circle"
            style={{
              width: "25px",
              height: "25px",
            }}
          >
            <span
              className="initials"
              style={{ top: "-11px", fontSize: "8px" }}
            >
              {coin}
            </span>
          </div>
        )}
      </td>
      <td>
        <div>
          <h5 className="font-size-14 mb-1">
            {coin}/<span className="font-size-12">{market}</span>
          </h5>
          {parseFloat(change) > 0 ? (
            <p className="text-success mb-0 font-size-12">&#x25B2;{change}%</p>
          ) : (
            <p className="text-danger mb-0 font-size-12">&#x25BC;{change}%</p>
          )}
        </div>
      </td>
      <td>
        <div className="text-end">
          <h5 className="font-size-14 text-muted mb-0">
            {parseFloat(currentValue)}
          </h5>
          <p className="text-muted mb-0 font-size-12">{amount}</p>
        </div>
      </td>
    </tr>
  );
};

export default TabPaneTicker;
