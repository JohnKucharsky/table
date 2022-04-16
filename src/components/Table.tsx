import { ch } from "../App";
import "./styles.scss";

type Props = {
  check: ch;
  filter: (val: number) => void;
  tab: any;
};
const Table: React.FC<Props> = ({ check, filter, tab }) => {
  return (
    <div>
      <table>
        <tbody>
          <tr>
            {!check.val1 && <th onClick={() => filter(1)}>Один</th>}
            {!check.val2 && <th onClick={() => filter(2)}>Два</th>}
            {!check.val3 && <th onClick={() => filter(3)}>Три</th>}
            {!check.val4 && <th onClick={() => filter(4)}>Четыре</th>}
            {!check.val5 && <th onClick={() => filter(5)}>Пять</th>}
            {!check.val6 && <th onClick={() => filter(6)}>Шесть</th>}
            {!check.val7 && <th onClick={() => filter(7)}>Семь</th>}
            {!check.val8 && <th onClick={() => filter(8)}>Восемь</th>}
          </tr>
          {tab.map((i: ch, index: number) => (
            <tr key={index}>
              {!check.val1 && <td>{i.val1}</td>}
              {!check.val2 && <td>{i.val2}</td>}
              {!check.val3 && <td>{i.val3}</td>}
              {!check.val4 && <td>{i.val4}</td>}
              {!check.val5 && <td>{i.val5}</td>}
              {!check.val6 && <td>{i.val6}</td>}
              {!check.val7 && <td>{i.val7}</td>}
              {!check.val8 && <td>{i.val8}</td>}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
