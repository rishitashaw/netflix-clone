import styled from "styled-components/macro";
import { Link as ReactRouterLink } from "react-router-dom";

export const Container = styled.div``;

export const Error = styled.div``;

export const Text = styled.div``;

export const Title = styled.div``;

export const TextSmall = styled.div``;

export const Link = styled(ReactRouterLink)`
  color: white;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`;

export const Input = styled.input``;

export const Submit = styled.button``;

export const Base = styled.div``;
