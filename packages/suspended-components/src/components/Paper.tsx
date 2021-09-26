import React from "react";
import styled from "styled-components";

interface IPaperProps extends React.HTMLAttributes<HTMLElement> {
  [key: string]: any;
}

const Wrapper = styled.div`
  display: flex;
`;

const PaperComponent: React.FC = ({ children, ...rest }) => {
  return (
    <Wrapper>
      <div {...rest}>{children}</div>
    </Wrapper>
  );
};

const Paper = styled(PaperComponent)<IPaperProps>`
  background-color: #fff;
  width: 100%;
  display: inline-block;
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.08);
  border-radius: 2px;
`;

export default Paper;
