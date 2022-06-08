import { createSelector } from "@reduxjs/toolkit";

function filterQuantityCondition(state, condition, content) {
  switch (condition) {
    case "Больше":
      if (typeof +content === "number" && content !== "") {
        return state.filter(item => +item.quantity > +content);
      } else return state;
    case "Меньше":
      if (typeof +content === "number" && content !== "") {
        return state.filter(item => +item.quantity < +content);
      } else return state;
    case "Равно":
      if (typeof +content === "number" && content !== "") {
        return state.filter(item => +item.quantity === +content);
      } else return state;
    default:
      return state;
  }
}

function filterDistanceCondition(state, condition, content) {
  switch (condition) {
    case "Больше":
      if (typeof +content === "number" && content !== "") {
        return state.filter(item => +item.distance.slice(0, -2) > +content);
      } else return state;
    case "Меньше":
      if (typeof +content === "number" && content !== "") {
        return state.filter(item => +item.distance.slice(0, -2) < +content);
      } else return state;
    case "Равно":
      if (typeof +content === "number" && content !== "") {
        return state.filter(item => +item.distance.slice(0, -2) === +content);
      } else return state;
    default:
      return state;
  }
}

function filterNameCondition(state, condition, content) {
  switch (condition) {
    case "Содержит":
      if (typeof content === "string" && content !== "") {
        return state.filter(item => item.name.toLowerCase().includes(content.toLowerCase()));
      } else return state;
    case "Равно":
      if (typeof content === "string" && content !== "") {
        return state.filter(item => item.name === content);
      } else return state;
    default:
      return state;
  }
}

export const superSelectorGoods = createSelector(
  state => state.filter,
  state => state.goods.goods,
  (filter, goods) => {
    // debugger;
    const { coll, condition, content } = filter;
    switch (coll) {
      case "Количество":
        return filterQuantityCondition(goods, condition, content);
      case "Расстояние":
        return filterDistanceCondition(goods, condition, content);
      case "Название":
        return filterNameCondition(goods, condition, content);
      default: {
        return goods;
      }
    }
  }
);

export const selectGoodsT = state => state.goods.goods;
export const selectGoodsTotal = state => state.goods.total;
