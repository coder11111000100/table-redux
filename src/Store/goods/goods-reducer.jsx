import { createSlice } from "@reduxjs/toolkit";

const reduce = createSlice({
  name: "goods",
  initialState: {
    goods: [],
    hasColumn: "asc",
    total: 0,
  },
  reducers: {
    goodsState: (state, action) => {
      state.goods = action.payload;
    },

    CurrentGoods: (state, action) => {
      const lastIndex = +action.payload.currentPage * +action.payload.quantityPerPage;
      const firstIndex = lastIndex - +action.payload.quantityPerPage;
      return state.goods.slice(firstIndex, lastIndex);
    },

    ColumnSort: (state, action) => {
      switch (action.payload) {
        case "Количество":
          if (state.hasColumn === "asc") {
            state.goods.sort((a, b) => +a.quantity - +b.quantity);
            state.hasColumn = "desc";
            return;
          }
          if (state.hasColumn === "desc") {
            state.goods.sort((a, b) => +b.quantity - +a.quantity);
            state.hasColumn = "asc";
            return;
          }

          break;
        case "Расстояние":
          if (state.hasColumn === "asc") {
            state.goods.sort((a, b) => +a.distance.slice(0, -2) - +b.distance.slice(0, -2));
            state.hasColumn = "desc";
            return;
          }
          if (state.hasColumn === "desc") {
            state.goods.sort((a, b) => +b.distance.slice(0, -2) - +a.distance.slice(0, -2));
            state.hasColumn = "asc";
            return;
          }

          break;
        case "Название":
          state.goods.sort((a, b) => a.name.localeCompare(b));

          break;
        default:
          return false;
      }
    },
  },
});

const { goodsState, ColumnSort, CurrentGoods } = reduce.actions;

const reduceGoods = reduce.reducer;

export { goodsState, ColumnSort, reduceGoods, CurrentGoods };
