import styled from "@emotion/styled";

export const IconButton = styled.button`
  width: 40px;
  height: 30px;
  background-color: blueviolet;
  border-radius: 5px;
  color: white;
  border: none;
  outline: none;
  transition: ease-in-out;

  &:hover {
    transition-duration: 125ms;
    box-shadow: 0px 0px 3px blueviolet;
    cursor: pointer;
  }
`;
