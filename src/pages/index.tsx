import type { NextPage } from "next";
import { HtmlProps } from "next/dist/shared/lib/html-context";
import Link from "next/link";
import React, { useState } from "react";
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
  const { count } = useSelector((state: RootState) => state.counter);

  const [amount, setAmount] = useState(count);

  const dispatch = useDispatch();

  function addAmount() {
    if (Number(amount) <= 0) {
      return;
    } else {
      dispatch(incrementAmount(Number(amount)));
    }
  }

  function atualizarValor(e: React.ChangeEvent<HTMLInputElement>) {
    const newValue = e.target.value;
    setAmount(Number(newValue));

    /*
    (event: React.ChangeEvent<HTMLInputElement>) => {
            const newValue = event.target.value;
            setAmount(Number(newValue));
          }
    */
  }

  return (
    <>
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
          placeholder="amount"
          value={amount}
          onChange={atualizarValor}
        />

        <button onClick={addAmount}>adicionar valor</button>

        <div>
          <Link href={"/produtos"}>
            <button>Produtos</button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Home;
