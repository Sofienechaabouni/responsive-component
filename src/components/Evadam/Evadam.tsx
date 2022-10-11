import React from "react";

export interface ButtonProps {
  label: string;
}

const EvadamKit = (props: ButtonProps) => {
  return <button>{props.label}</button>;
};

export default EvadamKit;