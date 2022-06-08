import { useState } from "react";
import { Goods } from "./Goods";
import { useDispatch, useSelector } from "react-redux";
import { ColumnSort } from "../Store/goods/goods-reducer";
import { Pagination } from "./Pagination";
import { superSelectorGoods } from "../Store/goods/goods-selector";
import "./style.css";

function Table() {
  const [currentPage, setCurrentPage] = useState(1);
  const [quantityPerPage] = useState(3);
  const dispatch = useDispatch();

  const goods = useSelector(superSelectorGoods);

  const lastIndex = +currentPage * +quantityPerPage;
  const firstIndex = lastIndex - quantityPerPage;
  const currentGoods = goods.slice(firstIndex, lastIndex);

  const onActivePage = number => {
    setCurrentPage(number);
  };

  return (
    <>
      <table className='tableStyle'>
        <thead className='stylePointer'>
          <tr onClick={e => dispatch(ColumnSort(e.target.id))} style={{ background: "Khaki" }}>
            <th id='Дата' className='tStyle'>
              Дата
            </th>
            <th id='Название' className='tStyle'>
              Название
            </th>
            <th id='Количество' className='tStyle'>
              Количество
            </th>
            <th id='Расстояние' className='tStyle'>
              Расстояние
            </th>
          </tr>
        </thead>
        <tbody>
          {currentGoods.map(item => (
            <Goods key={item._id} date={item.date} name={item.name} quantity={item.quantity} distance={item.distance} />
          ))}
        </tbody>
      </table>
      <Pagination
        totalPerPage={goods.length}
        quantityPerPage={quantityPerPage}
        onActivePage={onActivePage}
        currentPage={currentPage}
      />
    </>
  );
}

export { Table };
