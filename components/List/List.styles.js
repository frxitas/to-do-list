import styled from "@emotion/styled";

export const ListContent = styled.div`
  display: flex;
  align-items: left;
  justify-content: left;
  flex-direction: column;
  width: 1200px;
  height: 100%;
  min-height: 80px;
  margin: 20px 0px 0px 0px;
`;

export const List = styled.ul`
  width: 100%;
  list-style: none;
  border-radius: 5px;
  padding: 10px;
`;

export const ListItem = styled.li`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 50px;
  padding: 5px 10px;
  width: 100%;
  margin: 10px 0px 10px 10px;
  width: auto;
  border: 1.5px solid lightgrey;
  border-radius: 5px;
`;

export const ListItemText = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 30px;
  font-size: 14px;
  margin-left: 20px;
  color: blueviolet;
  width: fit-content;
`;
