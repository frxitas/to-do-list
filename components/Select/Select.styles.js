import styled from "@emotion/styled";
import { css } from "@emotion/react";

export const Select = styled.div`
  ${({ hasLabel }) => css`
        height: auto;
        padding-top: ${hasLabel ? "30px" : 0};
        position: relative;
        width: 100%;
  `}
`;

export const SelectLabel = styled.label`
  font-size: 14px;
  display: block;
  position: absolute;
  color: black;
  line-height: 2;
  top: 0;
  width: 100%;
  transition: all ease-in-out 300ms; 

  ${({ isSelectFocused }) =>
    isSelectFocused &&
    css`
      color: black;
      font-weight: 600;
    `}

  ${({ isSelectDisabled }) =>
    isSelectDisabled &&
    css`
      color: lightgrey;
    `}
`;

export const SelectTag = styled.select`
  background-color: white;
  border: 1.5px solid lightgrey;
  width: 300px;
  height: 40px;
  line-height: 150%;
  padding: 0 10px;
  position: relative;
  outline: none;
  border-radius: 5px;
  font-size: 14px;

  :focus {
    border: 2px solid blueviolet;
  }
`;
