import React, { useMemo } from "react";
import "./style.css";

function handleCurrentPage(totalP, quantityP) {
  console.log("handleCurrentPage");
  const arrayOfNumbers = [];
  for (let i = 1; i <= Math.ceil(totalP / quantityP); i++) {
    arrayOfNumbers.push(i);
  }
  return arrayOfNumbers;
}

let RENDER = 0;
function Pagination(props) {
  const { quantityPerPage, totalPerPage, onActivePage, currentPage } = props;
  console.log("Pagination", RENDER++);

  const pageNumbers = useMemo(() => {
    return handleCurrentPage(totalPerPage, quantityPerPage);
  }, [quantityPerPage, totalPerPage]);

  return (
    <div>
      <ul className='pagination stylePointer'>
        {pageNumbers.map(number => {
          if (number === currentPage) {
            return (
              <li onClick={() => onActivePage(number)} key={number} className='page-item page-link active'>
                {number}
              </li>
            );
          } else {
            return (
              <li onClick={() => onActivePage(number)} key={number} className='page-item page-link'>
                {number}
              </li>
            );
          }
        })}
      </ul>
    </div>
  );
}

export { Pagination };
