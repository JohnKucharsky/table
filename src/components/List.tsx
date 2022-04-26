import { headers } from "../App";
import "./styles.scss";

type Props = {
  setCheck: (num: number) => void;
  check: boolean[];
};

const List: React.FC<Props> = ({ setCheck, check }) => {
  return (
    <div className="list">
      {check.map((ch, i) => (
        <div key={i} className={ch ? "active" : ""}>
          <label>{headers[i]}</label>
          <input onChange={() => setCheck(i)} checked={ch} type="checkbox" />
        </div>
      ))}
    </div>
  );
};

export default List;
