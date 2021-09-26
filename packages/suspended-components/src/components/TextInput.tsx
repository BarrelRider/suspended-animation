import React from "react";
import styled from "styled-components";
import { Color } from "../constants/colors";

interface ITextInputProps extends React.HTMLAttributes<HTMLInputElement> {
  label?: string;
  [key: string]: any;
}

const TextInputContainer = styled.div``;

const Wrapper = styled.div`
  display: flex;
`;

const TextInputLabel = styled.label`
  font-family: "Ubuntu Regular";
`;

const TextInputComponent: React.FC<ITextInputProps> = ({
  label,
  name,
  ...rest
}) => {
  return (
    <TextInputContainer>
      {label && <TextInputLabel htmlFor={name}>{label}</TextInputLabel>}
      <Wrapper>
        <input {...rest} />
      </Wrapper>
    </TextInputContainer>
  );
};

const TextInput = styled(TextInputComponent)<ITextInputProps>`
  width: 100%;
  border-top: 0;
  border-right: 0;
  border-left: 0;
  border-bottom: 2px solid ${Color["hardNavy"]};
`;

export default TextInput;
