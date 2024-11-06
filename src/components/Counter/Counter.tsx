"use client";

import React, { useState } from "react";
import styles from "./styles.module.css";
import { RegisteredComponent } from "@builder.io/sdk-react";

export const CounterComponent: RegisteredComponent = {
    name: "Counter",
    inputs: [
        {
            name: "initialCount",
            type: "number",
        },
    ],
};

interface CounterProps {
  initialCount?: number;
}

function Counter({ initialCount = 99 }: CounterProps) {
  const [count, setCount] = useState(initialCount);

  const increment = () => {
    setCount((prevCount) => prevCount + 1);
  };

  const decrement = () => {
    setCount((prevCount) => prevCount - 1);
  };

  return (
    <div className={styles.counter}>
      <button className={styles.btn} onClick={decrement}>
        -
      </button>
      <span className={styles.count}>{count}</span>
      <button className={styles.btn} onClick={increment}>
        +
      </button>
    </div>
  );
}
