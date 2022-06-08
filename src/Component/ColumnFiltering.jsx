import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setFilter } from "../Store/filter/filter-reducer";
import "./style.css";

function ColumnFiltering() {
  const dispatch = useDispatch();
  const [valueColl, setValueColl] = useState("");
  const [valueCondition, setValueCondition] = useState("");
  const [valueIn, setValueIn] = useState("");

  function handlerOption(e) {
    e.preventDefault();
    if (e.target.name === "select") {
      setValueColl(e.target.value, dispatch(setFilter({ coll: e.target.value })));
    } else if (e.target.name === "option") {
      setValueCondition(e.target.value, dispatch(setFilter({ condition: e.target.value })));
    } else {
      setValueIn(e.target.value, dispatch(setFilter({ content: e.target.value })));
    }
  }

  const objColumn = {
    Название: "1",
    Количество: "2",
    Расстояние: "3",
  };

  const objOptions = {
    Больше: "1",
    Меньше: "2",
    Равно: "3",
    Содержит: "4",
  };

  return (
    <div>
      <div className='rowColumn'>
        <select onChange={handlerOption} className='form-select' name='select' id='key' value={valueColl}>
          <option defaultValue>Выбор колонки</option>
          {Object.entries(objColumn).map(item => {
            return (
              <option key={item[1]} value={item[0]}>
                {item[0]}
              </option>
            );
          })}
        </select>
        <select onChange={handlerOption} className='form-select' name='option' value={valueCondition}>
          <option defaultValue> Выбор условия</option>
          {Object.entries(objOptions).map(item => {
            return (
              <option key={item[1]} value={item[0]}>
                {item[0]}
              </option>
            );
          })}
        </select>
      </div>
      <input onChange={handlerOption} type='text' name='inputd5' className='form-control' value={valueIn} />
      <div id='HelpBlock' className='form-text'>
        Your Value
      </div>
    </div>
  );
}

export { ColumnFiltering };
