import { Link } from "react-router-dom";
function Goods(props) {
  const { date, name, quantity, distance } = props;
  return (
    <tr className='tStyle stylePointer'>
      <td>{date.slice(0, 9)}</td>
      <td>{name}</td>
      <td>{quantity}</td>
      <td>{distance}</td>
      <td>
        {
          <Link to={`/invoices/${name}`} key={name}>
            смотреть
          </Link>
        }
      </td>
    </tr>
  );
}

export { Goods };
