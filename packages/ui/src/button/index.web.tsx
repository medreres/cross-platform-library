import {
  TouchableOpacity,
  StyleSheet,
  Text,
} from "react-native";

import { MouseEvent } from "react";

export type ButtonProps = {
  text: string;
  onClick?: (event: MouseEvent<HTMLButtonElement>) => void;
};


export function Button({ text, onClick }: ButtonProps) {
  return (
    <button style={styles.button} onClick={onClick}>
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
