import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  increment,
  incrementByAmount,
  incrementAsync,
  incrementIfOdd,
  selectCount,
} from './counterSlice';
import store from '../../app/store';
import styles from './Counter.module.css';

export function Counter() {
  const count = useSelector(selectCount);
  const dispatch = useDispatch();

  const [ autoClickButtonVisible, setAutoClickButtonVisibleValue ] = useState(true);


  const handleAutoClick = () => {

    // turn off the button
    setAutoClickButtonVisibleValue(false);

    // click every 10 seconds
    setInterval(() => {
      dispatch(incrementAsync(1));
      console.log('click');
    }, 10000);
  };

  const handleDisabledAutoClick = () => (!selectCount(store.getState()) >= 5);

  return (
    <>
      <div className={styles.column}>
        <span className={styles.value}>{count}</span>
        <button
          className={styles.button}
          aria-label="Increment value"
          onClick={() => dispatch(increment())}
        >
          +
        </button>
      </div>
      <div className={[styles.row, styles.padding].join(' ')}>
        {autoClickButtonVisible && <button className={styles.button} onClick={() => handleAutoClick()} disabled={handleDisabledAutoClick()}>Auto Click</button> }
      </div>
    </>
  );
}
