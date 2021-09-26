import React from "react";
import styled from "styled-components";

const spacingUnit = 12;

interface ISpacing {
  p?: number | string;
  pr?: number | string;
  pl?: number | string;
  pt?: number | string;
  pb?: number | string;
  [key: string]: any;
}

const SpacingComponent: React.FC<ISpacing> = ({
  children,
  className,
  ...rest
}) => {
  return <div className={className}>{children}</div>;
};

const Spacing = styled(SpacingComponent)<ISpacing>`
  ${(props) => props.p && `padding: ${(props.p as number) * spacingUnit}px`};
  ${(props) =>
    props.pr && `padding-right: ${(props.pr as number) * spacingUnit}px`};
  ${(props) =>
    props.pl && `padding-left: ${(props.pl as number) * spacingUnit}px`};
  ${(props) =>
    props.pt && `padding-top: ${(props.pt as number) * spacingUnit}px`};
  ${(props) =>
    props.pb && `padding-bottom: ${(props.pb as number) * spacingUnit}px`};
`;

export default Spacing;
