import React from "react";
import styled from "styled-components";
import { Color } from "../constants/colors";

interface IButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  stretch?: boolean;
  variant?: "secondary" | null;
  [key: string]: any;
}

const ButtonComponent: React.FC<IButtonProps> = ({ children, className }) => {
  return <button className={className}>{children}</button>;
};

const Button = styled(ButtonComponent)<IButtonProps>`
  -webkit-appearance: none;
  border-width: 1px;
  border-style: solid;
  padding: 16px 32px;
  border-color: ${Color["hardNavy"]};
  background: ${(p) =>
    p.variant === "secondary" ? `${Color["white"]}` : `${Color["hardNavy"]}`};
  color: ${(p) =>
    p.variant !== "secondary" ? ` ${Color["white"]}` : "inherit"};
  ${(p) =>
    p.stretch &&
    `
    width: 100%
  `};
  ${(p) =>
    p.variant !== "secondary" &&
    `
    box-shadow: 0px 12px 1rem -8px ${Color["hardNavy"]}
    `}
`;

export default Button;
