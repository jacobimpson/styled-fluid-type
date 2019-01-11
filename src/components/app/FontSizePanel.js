import React from "react";
import styled from "styled-components";

const Panel = styled.div`
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
  border-top: 1px solid rgba(0, 0, 0, 0.1);
  min-height: 128px;
  padding: 2rem;
`;

const Label = styled.label`
  color: #fff;
  font-size: 0.8rem;
  display: flex;
  flex-direction: column;

  + label {
    margin-left: 1rem;
  }
`;

const LabelText = styled.span`
  min-width: 3rem;
  font-size: 0.9rem;
`;

const Input = styled.input`
  border: none;
  padding: 0.5rem;
  width: 6rem;
  height: 3rem;
  font-size: 1.5rem;
  font-family: monospace;
  border-radius: 6px 0 0 6px;
`;

const AppendUnit = styled.div`
  align-items: center;
  background: rgba(0, 0, 0, 0.3);
  color: #fff;
  display: flex;
  font-family: monospace;
  font-size: 1.5rem;
  height: 3rem;
  padding: 0.5rem;
  border-radius: 0 6px 6px 0;
`;

const InputWrapper = styled.div`
  display: flex;
  margin-top: 0.3rem;
`;

const Title = styled.h3`
  margin: 0 0 0.8rem 0;
  font-size: 2rem;
  color: #fff;
  font-weight: 600;
`;

export const Config = styled.div`
  display: flex;
  align-items: center;
`;

export default ({ fontSize, handleChange }) => {
  return (
    <Panel>
      <Title>{fontSize.label}</Title>
      <Config>
        <Label>
          <LabelText>Font size from</LabelText>
          <InputWrapper>
            <Input
              onChange={({ target: { value } }) =>
                handleChange(fontSize.key, "min", value)
              }
              value={fontSize.min}
              type="number"
            />
            <AppendUnit>px</AppendUnit>
          </InputWrapper>
        </Label>
        <Label>
          <LabelText>Font size to</LabelText>
          <InputWrapper>
            <Input
              onChange={({ target: { value } }) =>
                handleChange(fontSize.key, "max", value)
              }
              value={fontSize.max}
              type="number"
            />
            <AppendUnit>px</AppendUnit>
          </InputWrapper>
        </Label>
      </Config>
    </Panel>
  );
};
