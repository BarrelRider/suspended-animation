import React from "react";
import styled from "styled-components";
import { Color, ColorName } from "../constants/colors";

interface IHeadingComponent extends React.HTMLAttributes<HTMLHeadingElement> {
  component: string | React.FC<any>;
  center: boolean;
  color: ColorName;
  noGutters: boolean;
  [key: string]: any;
}

const defaultProps: IHeadingComponent = {
  component: "h1",
  center: false,
  size: "l",
  noGutters: true,
  color: "hardNavy",
};

const HeadingComponent: React.FC<IHeadingComponent> = ({
  component: Component,
  className,
  children
}) => {
  return <Component className={className}>{children}</Component>;
};

const Heading = styled(HeadingComponent)<IHeadingComponent>`
  font-family: "Ubuntu Bold";
  color: ${(props) => Color[props.color]};
  font-size: 24px;
  ${(props) => (props.noGutters ? "margin-bottom: 0" : "margin-bottom: 32px")};
  ${(props) => props.center && "text-align:center"};
`;

Heading.defaultProps = defaultProps;
export default Heading;
