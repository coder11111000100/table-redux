import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
function Invoices(props) {
  const { goods } = props;
  const { name } = useParams();
  console.log(name);
  return (
    <div style={{ display: "flex" }}>
      {<Link to={"/"}>Home</Link>}
      <hr />
      <div>
        {JSON.stringify(
          goods.filter(item => item.name === name),
          null,
          " "
        )}
      </div>
    </div>
  );
}

export { Invoices };
