import { LegacyRef } from "react";
import { ch } from "../App";
import "./styles.scss";

type Props = {
  oneLastVal: (e: React.ChangeEvent<HTMLInputElement>, num: number) => void;
  check: ch;
  ref1: LegacyRef<HTMLInputElement> | undefined;
  ref2: LegacyRef<HTMLInputElement> | undefined;
  ref3: LegacyRef<HTMLInputElement> | undefined;
  ref4: LegacyRef<HTMLInputElement> | undefined;
  ref5: LegacyRef<HTMLInputElement> | undefined;
  ref6: LegacyRef<HTMLInputElement> | undefined;
  ref7: LegacyRef<HTMLInputElement> | undefined;
  ref8: LegacyRef<HTMLInputElement> | undefined;
};

const List: React.FC<Props> = ({
  oneLastVal,
  check,
  ref1,
  ref2,
  ref3,
  ref4,
  ref5,
  ref6,
  ref7,
  ref8,
}) => {
  return (
    <div className="list">
      <div className={check.val1 ? "active" : ""}>
        <label htmlFor="one">one</label>
        <input
          ref={ref1}
          onChange={(e) => oneLastVal(e, 1)}
          checked={check.val1}
          type="checkbox"
          name="one"
        />
      </div>
      <div className={check.val2 ? "active" : ""}>
        <label htmlFor="two">two</label>
        <input
          ref={ref2}
          onChange={(e) => oneLastVal(e, 2)}
          checked={check.val2}
          type="checkbox"
          name="two"
        />
      </div>
      <div className={check.val3 ? "active" : ""}>
        <label htmlFor="three">three</label>
        <input
          ref={ref3}
          onChange={(e) => oneLastVal(e, 3)}
          checked={check.val3}
          type="checkbox"
          name="three"
        />
      </div>
      <div className={check.val4 ? "active" : ""}>
        <label htmlFor="four">four</label>
        <input
          ref={ref4}
          onChange={(e) => oneLastVal(e, 4)}
          checked={check.val4}
          type="checkbox"
          name="four"
        />
      </div>
      <div className={check.val5 ? "active" : ""}>
        <label htmlFor="five">five</label>
        <input
          ref={ref5}
          onChange={(e) => oneLastVal(e, 5)}
          checked={check.val5}
          type="checkbox"
          name="five"
        />
      </div>
      <div className={check.val6 ? "active" : ""}>
        <label htmlFor="six">six</label>
        <input
          ref={ref6}
          onChange={(e) => oneLastVal(e, 6)}
          checked={check.val6}
          type="checkbox"
          name="six"
        />
      </div>
      <div className={check.val7 ? "active" : ""}>
        <label htmlFor="seven">seven</label>
        <input
          ref={ref7}
          onChange={(e) => oneLastVal(e, 7)}
          checked={check.val7}
          type="checkbox"
          name="seven"
        />
      </div>
      <div className={check.val8 ? "active" : ""}>
        <label htmlFor="eight">eight</label>
        <input
          ref={ref8}
          onChange={(e) => oneLastVal(e, 8)}
          checked={check.val8}
          type="checkbox"
          name="eight"
        />
      </div>
    </div>
  );
};

export default List;
