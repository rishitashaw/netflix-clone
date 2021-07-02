import styled from "styled-components/macro";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: auto;
  max-width: 80%;
`;

export const Title = styled.h1`
  width: 100%;
  color: white;
  font-size: 48px;
  text-align: center;
  font-weight: 500;
`;

export const User = styled.div``;

export const List = styled.ul`
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: row;
`;

export const Picture = styled.img`
  width: 100%;
  max-width: 150px;
  height: auto;
  border-radius: 4px;
  border: 3px solid black;
  cursor: pointer;
`;

export const Name = styled.p`
  color: #808080;
  text-overflow: ellipsis;
  font-size: 16px;

  &::hover {
    font-weight: bold;
    color: #e5e5e5;
  }
`;

export const Item = styled.li`
  max-width: 200px;
  max-height: 200px;
  list-style-type: none;
  text-align: center;
  &:hover {
    border: 3px solid white;
    font-weight: bold;
    color: white;
  }
`;
