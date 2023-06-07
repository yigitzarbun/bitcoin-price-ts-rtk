import React from "react";
import "./App.css";
// Types
// import { BitcoinData, Currencies } from "./bitcoinTypes";

// Hooks
import { useAppSelector, useAppDispatch } from "./reduxHooks";
import { useGetBitcoinDataQuery } from "./services/app";

// Actions
import { changeCurrency } from "./features/appSlice";

function App() {
  const { currency } = useAppSelector((state) => state.app);
  const dispatch = useAppDispatch();
  const { data, isLoading, error } = useGetBitcoinDataQuery(undefined);
  const handleCurrencySelection = (e: any) =>
    dispatch(changeCurrency(e.currentTarget.value));
  return (
    <div className="App">
      <h2>Bitcoin Price</h2>
      <select value={currency} onChange={handleCurrencySelection}>
        {data &&
          Object.keys(data).map((currency) => (
            <option key={currency} value={currency}>
              {currency}
            </option>
          ))}
      </select>
      <div className="priceBox">
        <h2>{data && data[currency].symbol}</h2>
        <h2>{data && data[currency].last}</h2>
      </div>
    </div>
  );
}

export default App;
