import styled from 'styled-components';

export const DevLink = styled.a`
  padding: 20px;
  border-radius: 8px;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-decoration: none;
  background: #f3f3f3;

  @media (max-width: 600px) {
    width: 100%;
  }
`;

export const DevAvatar = styled.img`
  margin-top: 8px;
  width: 60px;
  height: 60px;
  border-radius: 50%;
`;

export const DevName = styled.span`
  color: #805eb8;
  font-size: 18px;
  margin: 8px 0;
`;

export const DevTechs = styled.small`
  font-weight: 200;
  font-size: 12px;
  color: #000000;
  margin-bottom: 8px;
`;

export const DevBio = styled.p`
  font-size: 12px;
  color: #4d4d4d;
  text-align: center;
`;
