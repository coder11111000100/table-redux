import { configureStore } from "@reduxjs/toolkit";
import { reduceFilter } from "./filter/filter-reducer";
import { reduceGoods } from "./goods/goods-reducer";


const store = configureStore({
  reducer: {
    goods: reduceGoods,
    filter: reduceFilter,
  },
});

export { store };
