import styled from "@emotion/styled";

export const ListContent = styled.div`
  display: flex;
  align-items: left;
  justify-content: left;
  width: 500px;
  height: auto;
  min-height: 400px;
  border: 1.5px solid lightgrey;
`;

export const List = styled.ul`
  list-style: none;
  padding: 40px;
`;

export const ListItem = styled.li`
  display: flex;
  align-items: center;
  justify-content: center;
  width: fit-content;
  padding: 10px;
  height: 40px;
  border: 1.5px solid lightgrey;
  border-radius: 5px;
  color: blueviolet;
  font-size: 20px;
  margin: 10px;
`;
