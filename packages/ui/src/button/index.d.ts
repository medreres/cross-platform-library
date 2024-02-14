import * as React from "react";
import { GestureResponderEvent } from "react-native";

interface ButtonProps {
  text: string;
  onClick?: (event: GestureResponderEvent) => void;
  testProp?: string;
}
declare function Button({ text, onClick }: ButtonProps): React.JSX.Element;

export { Button, type ButtonProps };