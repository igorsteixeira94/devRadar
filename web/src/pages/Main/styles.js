import styled from 'styled-components';

export const MainWrapper = styled.div`
  display: flex;
  justify-content: space-between;

  @media (max-width: 1000px) {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;
export const DevWrapper = styled.main`
  flex: 1;
`;

export const DevList = styled.ul`
  list-style: none;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 24px;

  @media (max-width: 600px) {
    display: block;

    li {
      width: 80vw;
      margin-bottom: 20px;
    }
  }
`;
