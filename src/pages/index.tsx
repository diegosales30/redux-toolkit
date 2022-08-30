import type { NextPage } from "next";
import { useState } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";

import styles from "../../styles/Home.module.css";
import {
  decrement,
  increment,
  incrementAmount,
} from "../features/counterSlice";
import { RootState } from "../store";

const Home: NextPage = () => {
  const [amount, setAmount] = useState();

  const dispatch = useDispatch();

  const { count } = useSelector((state: RootState) => state.counter);

  function addAmount() {
    if (Number(amount) <= 0) {
      return;
    } else {
      dispatch(incrementAmount(Number(amount)));
    }
  }

  return (
    <div className={styles.container}>
      <span>{count}</span>
      <button onClick={() => dispatch(increment())} className={styles.buttom}>
        +
      </button>
      <button onClick={() => dispatch(decrement())} className={styles.buttom}>
        -
      </button>

      <input
        type="number"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
      />

      <button onClick={addAmount}>adicionar valor</button>
    </div>
  );
};

export default Home;
