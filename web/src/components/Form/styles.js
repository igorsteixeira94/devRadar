import styled from 'styled-components';

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  width: 383px;
  max-height: 447px;
  background: #f3f3f3;
  border-radius: 8px;
  margin-right: 56px;
  @media (max-width: 1000px) {
    margin: 16px;
    width: 100%;
  }
`;

export const Title = styled.h1`
  font-size: 36px;
  color: #805eb8;
  text-align: center;
  font-weight: bold;
  margin-top: 16px;
`;

export const FormInput = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 16px;

  & + div {
    margin-top: 24px;
  }
`;
export const InputTitle = styled.span`
  font-size: 18px;
  color: #4d4d4d;
  margin-bottom: 8px;
`;

export const FormCoord = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  margin: 16px 0;

  div {
    margin-top: 0;
  }
`;

export const Input = styled.input`
  height: 41px;
  background: #e5e5e5;
  border-radius: 8px;
  border: 0;
  width: 100%;
  padding: 8px;
  color: #4d4d4d;
`;

export const Button = styled.button`
  height: 56px;
  border: 0;
  border-radius: 8px;
  margin: 24px 16px;

  background: #805eb8;

  color: #ffffff;
  font-weight: bold;
  font-size: 18px;
`;
