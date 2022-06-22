import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: {
      shoes:5,
    },
  },
  reducers: {
addToCart: (store, action)=>{
  if (store.items[action.payload]++);
  store.items[action.payload]=1;
}
  }
});

export default cartSlice.reducer;