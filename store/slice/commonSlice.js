import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  marketStatus: "closed",
  activeMainTab: "cryptocurrency",
  activeTicker: "BTCGBP",
};

export const commonSlice = createSlice({
  name: "common",
  initialState,
  reducers: {
    updateMarketStatus: (state, action) => {
      state.marketStatus = action.payload;
    },
    updateActiveMainTab: (state, action) => {
      state.activeMainTab = action.payload;
    },
    updateActiveTicker: (state, action) => {
      state.activeTicker = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { updateMarketStatus, updateActiveMainTab, updateActiveTicker } =
  commonSlice.actions;

export default commonSlice.reducer;
