import {
  StyleSheet,
  Text,
} from "react-native";
import { ModalProps } from "./types";

export function Modal({ text, onOpen }: ModalProps) {
  return (
    <button style={styles.button}>
      <Text style={styles.text}>web</Text>
    </button>
  );
}

const styles = StyleSheet.create({
  button: {
    maxWidth: 200,
    textAlign: "center",
    borderRadius: 10,
    paddingTop: 14,
    paddingBottom: 14,
    paddingLeft: 30,
    paddingRight: 30,
    fontSize: 15,
    backgroundColor: "#2f80ed",
  },
  text: {
    color: "white",
  },
});
