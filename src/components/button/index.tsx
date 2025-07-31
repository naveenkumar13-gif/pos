import React from "react";
import { Button as AntdButton } from "antd";

interface ButtonType {
  children?: React.ReactNode;
  className?: string;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
}
const baseStyle =
  "bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded !focus:outline-none !focus:border-none !border-none";
const Button = ({ children, className, onClick }: ButtonType) => (
  <AntdButton className={`${baseStyle} ${className}`} onClick={onClick}>
    {" "}
    {children}
  </AntdButton>
);

export default Button;
