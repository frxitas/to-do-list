import styled from "@emotion/styled";

export const Button = styled.div`
  display: flex;
  height: 45px;
  margin-top: 30px;
  width: 150px;
`;

export const ButtonTag = styled.button`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  border: none;
  border-radius: 10px;
  background-color: blueviolet;
  color: white;
  font-size: 14px;

  &:hover {
    box-shadow: 1px 1px 5px blueviolet;
  }
`;
