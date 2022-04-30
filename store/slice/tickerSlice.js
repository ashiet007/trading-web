import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cryptocurrencies: {},
  tickerInfo: {
    tickSize: 2,
    tick: "0.01",
  },
  activeMarket: "GBP",
  marketPairs: {},
  bookTickers: {},
};

export const tickerSlice = createSlice({
  name: "ticker",
  initialState,
  reducers: {
    updateCryptocurrencies: (state, action) => {
      state.cryptocurrencies = action.payload;
    },
    updateTickInfo: (state, action) => {
      state.tickerInfo.tickSize = action.payload.tick_size;
      state.tickerInfo.tick = action.payload.tick;
    },
    updateActiveMarket: (state, action) => {
      state.activeMarket = action.payload;
    },
    updateMarketPairs: (state, action) => {
      Object.assign(state.marketPairs, action.payload);
    },
    updateBookTickers: (state, action) => {
      Object.assign(state.bookTickers, action.payload);
    },
  },
});

// Action creators are generated for each case reducer function
export const {
  updateCryptocurrencies,
  updateTickInfo,
  updateActiveMarket,
  updateMarketPairs,
  updateBookTickers,
} = tickerSlice.actions;

export default tickerSlice.reducer;
