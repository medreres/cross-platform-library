"use client";

import {DatePicker, Modal} from '@repo/ui'

import styles from "../styles/index.module.css";

export default function Web() {
  return (
    <div className={styles.container}>
      <h1>Web</h1>
      <DatePicker />
      <Modal  />
    </div>
  );
}
