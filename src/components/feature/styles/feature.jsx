import styled from "styled-components/macro";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  border-bottom: 8px solid #222;
  text-align: center;
  padding: 165px 45px;
`;

export const Title = styled.div`
  color: white;
  font-size: 40px;
  max-width: 640px;
  font-weight: 500;
  margin: auto;

  @media (max-width: 600px) {
    font-size: 18px;
  }
`;

export const SubTitle = styled.div`
  color: white;
  font-size: 26px;
  font-weight: 500;
  margin: 16px auto;

  @media (max-width: 600px) {
    font-size: 28px;
  }
`;
