import { useState } from "react";
import Table from "./components/Table";
import List from "./components/List";
import ButtonsBar from "./components/ButtonsBar";
import "./components/styles.scss";

// types
export type ch = boolean[];

type row = number[][];
// types

export const headers = [
  "Один",
  "Два",
  "Три",
  "Четыре",
  "Пять",
  "Шесть",
  "Семь",
  "Восемь",
];

const App = () => {
  const [switcher, setSwitcher] = useState(true);
  const [tab, setTab] = useState([
    ...Array(1).fill([...Array(headers.length).fill(null)]),
  ] as row);
  const [check, setCheck] = useState([
    ...Array(headers.length).fill(false),
  ] as ch);

  // fill random
  const fill = () => {
    setTab([]);
    let arr: number[][] = Array(4).fill(Array(headers.length).fill(null!));
    arr = arr.map((v) => {
      let random = Math.floor((Math.random() + 3) * 15);
      let array = v.map((_, i) => random * (i + 1));
      return array;
    });
    setTab([...arr]);
  };
  // fill random

  // clean
  const clean = () => {
    setTab([...Array(1).fill([...Array(headers.length).fill(null)])]);
  };
  // clean

  // filter
  const filter = (val: number) => {
    let copy = [...tab];
    console.log(val);
    if (switcher) {
      copy = copy.sort((a, b) => a[val] - b[val]);
      setSwitcher((state) => !state);
    } else {
      copy = copy.sort((a, b) => b[val] - a[val]);
      setSwitcher((state) => !state);
    }
    setTab([...copy]);
  };
  // filter

  return (
    <div className="app">
      <ButtonsBar fill={fill} clean={clean} />
      <Table check={check} tab={tab} filter={filter} />
      <List
        setCheck={(n) =>
          setCheck((check) => {
            let copy = [...check];
            copy[n] = !copy[n];

            let bool = copy.every((v) => v === true);
            if (bool) return check;

            return copy;
          })
        }
        check={check}
      />
    </div>
  );
};

export default App;
