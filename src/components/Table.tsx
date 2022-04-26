import { ch } from "../App";
import "./styles.scss";
import { headers } from "../App";

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
            {headers.map(
              (h, i) =>
                !check[i] && (
                  <th key={i} onClick={() => filter(i)}>
                    {h}
                  </th>
                )
            )}
          </tr>
          {tab.map((i: ch, index: number) => (
            <tr key={index}>
              {i.map((_, ii) => {
                return !check[ii] && <td key={ii}>{i[ii]}</td>;
              })}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
