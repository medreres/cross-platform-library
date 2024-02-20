"use client";

import {DatePicker, Modal} from '@repo/ui'

import styles from "../styles/index.module.css";

const handleOpenModal = () => alert('Modal in web!')

export default function Web() {
  return (
    <div className={styles.container}>
      <h1>Web</h1>
      <DatePicker />
      <Modal onOpen={handleOpenModal} text='Web modal'  />
    </div>
  );
}
