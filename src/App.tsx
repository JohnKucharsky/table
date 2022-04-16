import { useRef, useState } from "react";
import Table from "./components/Table";
import List from "./components/List";
import ButtonsBar from "./components/ButtonsBar";
import "./components/styles.scss";

// types
export type ch = {
  val1: boolean;
  val2: boolean;
  val3: boolean;
  val4: boolean;
  val5: boolean;
  val6: boolean;
  val7: boolean;
  val8: boolean;
};
type row = {
  val1: number | string;
  val2: number | string;
  val3: number | string;
  val4: number | string;
  val5: number | string;
  val6: number | string;
  val7: number | string;
  val8: number | string;
};
// types

const App = () => {
  const [switcher, setSwitcher] = useState(true);
  const [tab, setTab] = useState([
    {
      val1: "",
      val2: "",
      val3: "",
      val4: "",
      val5: "",
      val6: "",
      val7: "",
      val8: "",
    } as row,
  ]);
  const [check, setCheck] = useState({
    val1: false,
    val2: false,
    val3: false,
    val4: false,
    val5: false,
    val6: false,
    val7: false,
    val8: false,
  } as ch);

  // ref
  const ref1 = useRef<HTMLInputElement | null>(null);
  const ref2 = useRef<HTMLInputElement | null>(null);
  const ref3 = useRef<HTMLInputElement | null>(null);
  const ref4 = useRef<HTMLInputElement | null>(null);
  const ref5 = useRef<HTMLInputElement | null>(null);
  const ref6 = useRef<HTMLInputElement | null>(null);
  const ref7 = useRef<HTMLInputElement | null>(null);
  const ref8 = useRef<HTMLInputElement | null>(null);
  // ref

  // fill random
  const fill = () => {
    setTab([]);
    let arr = [];
    let random = Math.floor((Math.random() + 3) * 15);
    arr = [
      {
        val1: random * 151,
        val2: random * 127,
        val3: random * 167,
        val4: random * 121,
        val5: random * 193,
        val6: random * 138,
        val7: random * 147,
        val8: random * 128,
      },
      {
        val1: random * 139,
        val2: random * 185,
        val3: random * 184,
        val4: random * 128,
        val5: random * 190,
        val6: random * 137,
        val7: random * 123,
        val8: random * 171,
      },
      {
        val1: random * 175,
        val2: random * 135,
        val3: random * 159,
        val4: random * 187,
        val5: random * 176,
        val6: random * 165,
        val7: random * 153,
        val8: random * 119,
      },
      {
        val1: random * 145,
        val2: random * 129,
        val3: random * 108,
        val4: random * 174,
        val5: random * 182,
        val6: random * 172,
        val7: random * 148,
        val8: random * 169,
      },
    ];
    setTab([...arr]);
  };
  // fill random

  // clean
  const clean = () => {
    setTab([
      {
        val1: "",
        val2: "",
        val3: "",
        val4: "",
        val5: "",
        val6: "",
        val7: "",
        val8: "",
      } as row,
    ]);
  };
  // clean

  // filter
  const filter = (val: number) => {
    let sort = [];
    if (val === 1) {
      if (switcher) {
        sort = tab.sort((a: any, b: any) => a.val1 - b.val1);
        setSwitcher(!switcher);
      } else {
        sort = tab.sort((a: any, b: any) => b.val1 - a.val1);
        setSwitcher(!switcher);
      }
      setTab([...sort]);
    }
    if (val === 2) {
      if (switcher) {
        sort = tab.sort((a: any, b: any) => a.val2 - b.val2);
        setSwitcher(!switcher);
      } else {
        sort = tab.sort((a: any, b: any) => b.val2 - a.val2);
        setSwitcher(!switcher);
      }
      setTab([...sort]);
    }
    if (val === 3) {
      if (switcher) {
        sort = tab.sort((a: any, b: any) => a.val3 - b.val3);
        setSwitcher(!switcher);
      } else {
        sort = tab.sort((a: any, b: any) => b.val3 - a.val3);
        setSwitcher(!switcher);
      }
      setTab([...sort]);
    }
    if (val === 4) {
      if (switcher) {
        sort = tab.sort((a: any, b: any) => a.val4 - b.val4);
        setSwitcher(!switcher);
      } else {
        sort = tab.sort((a: any, b: any) => b.val4 - a.val4);
        setSwitcher(!switcher);
      }
      setTab([...sort]);
    }
    if (val === 5) {
      if (switcher) {
        sort = tab.sort((a: any, b: any) => a.val5 - b.val5);
        setSwitcher(!switcher);
      } else {
        sort = tab.sort((a: any, b: any) => b.val5 - a.val5);
        setSwitcher(!switcher);
      }
      setTab([...sort]);
    }
    if (val === 6) {
      if (switcher) {
        sort = tab.sort((a: any, b: any) => a.val6 - b.val6);
        setSwitcher(!switcher);
      } else {
        sort = tab.sort((a: any, b: any) => b.val6 - a.val6);
        setSwitcher(!switcher);
      }
      setTab([...sort]);
    }
    if (val === 7) {
      if (switcher) {
        sort = tab.sort((a: any, b: any) => a.val7 - b.val7);
        setSwitcher(!switcher);
      } else {
        sort = tab.sort((a: any, b: any) => b.val7 - a.val7);
        setSwitcher(!switcher);
      }
      setTab([...sort]);
    }
    if (val === 8) {
      if (switcher) {
        sort = tab.sort((a: any, b: any) => a.val8 - b.val8);
        setSwitcher(!switcher);
      } else {
        sort = tab.sort((a: any, b: any) => b.val8 - a.val8);
        setSwitcher(!switcher);
      }
      setTab([...sort]);
    }
  };
  // filter

  // checkboxes
  const oneLastVal = (e: React.ChangeEvent<HTMLInputElement>, num: number) => {
    let one = ref1.current?.checked ? 1 : 0;
    let two = ref2.current?.checked ? 1 : 0;
    let three = ref3.current?.checked ? 1 : 0;
    let four = ref4.current?.checked ? 1 : 0;
    let five = ref5.current?.checked ? 1 : 0;
    let six = ref6.current?.checked ? 1 : 0;
    let seven = ref7.current?.checked ? 1 : 0;
    let eight = ref8.current?.checked ? 1 : 0;
    let arr = [one, two, three, four, five, six, seven, eight];
    let sum = arr.reduce((val, a) => val + a);
    if (sum < 8) {
      if (num === 1) {
        setCheck({ ...check, val1: e.target.checked });
      }
      if (num === 2) {
        setCheck({ ...check, val2: e.target.checked });
      }
      if (num === 3) {
        setCheck({ ...check, val3: e.target.checked });
      }
      if (num === 4) {
        setCheck({ ...check, val4: e.target.checked });
      }
      if (num === 5) {
        setCheck({ ...check, val5: e.target.checked });
      }
      if (num === 6) {
        setCheck({ ...check, val6: e.target.checked });
      }
      if (num === 7) {
        setCheck({ ...check, val7: e.target.checked });
      }
      if (num === 8) {
        setCheck({ ...check, val8: e.target.checked });
      }
    }
  };
  // checkboxes

  return (
    <div className="app">
      <ButtonsBar fill={fill} clean={clean} />
      <Table check={check} tab={tab} filter={filter} />
      <List
        oneLastVal={oneLastVal}
        check={check}
        ref1={ref1}
        ref2={ref2}
        ref3={ref3}
        ref4={ref4}
        ref5={ref5}
        ref6={ref6}
        ref7={ref7}
        ref8={ref8}
      />
    </div>
  );
};

export default App;
