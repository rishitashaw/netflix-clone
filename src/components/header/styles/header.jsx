import styled from "styled-components/macro";
import { Link as ReactRouterLink } from "react-router-dom";

export const Logo = styled.img``;

export const ButtonLink = styled(ReactRouterLink)`
  display: block;
  background-color: #e50914;
  text-decoration: none;
  width: 84px;
  height: fit-content;
  color: white;
  border: 0;
  font-size: 15px;
  border-radius: 3px;
  padding: 8px 17px;
  cursor: pointer;
  box-sizing: border-box;

  &:hover {
    background-color: #f40612;
  }
`;

export const Frame = styled.div``;

export const Container = styled.div``;

export const Background = styled.div``;
