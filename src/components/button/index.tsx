import React from "react";
import { Button as AntdButton } from "antd";

interface ButtonType {
  children?: React.ReactNode;
  className?: string;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
}

const Button = ({ children, className, onClick }: ButtonType) => (
  <AntdButton className={className} onClick={onClick}>
    {children}
  </AntdButton>
);

export default Button;
