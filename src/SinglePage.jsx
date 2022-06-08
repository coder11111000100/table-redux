import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import { App } from "./App";
import React from "react";
import { Invoices } from "./Component/Invoice";
import { useDispatch, useSelector } from "react-redux";
import { goodsState } from "./Store/goods/goods-reducer";
import { selectGoodsT } from "./Store/goods/goods-selector";

function SinglePage() {
  const dispatch = useDispatch();
  const goods = useSelector(selectGoodsT);
  useEffect(() => {
    axios("http://localhost:4000?p=80").then(res => dispatch(goodsState(res.data)));
  }, [dispatch]);
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<App />} />
        <Route path='/invoices/:name' element={<Invoices goods={goods} />} />
      </Routes>
    </BrowserRouter>
  );
}
export { SinglePage };
