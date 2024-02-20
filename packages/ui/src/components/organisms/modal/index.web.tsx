import {
  StyleSheet,
} from "react-native";
import { ModalProps } from "./types";

export function Modal(props: ModalProps) {
  const { text, onOpen  } = props;

  return (
    <button onClick={onOpen} style={styles.button}>{text}</button>
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
