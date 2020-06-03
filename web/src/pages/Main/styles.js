import styled from 'styled-components';

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  width: 383px;
  max-height: 447px;
  background: #f3f3f3;
  border-radius: 8px;
  margin-right: 56px;

  button {
    height: 56px;
    border: 0;
    border-radius: 8px;
    margin: 24px 16px;

    background: #805eb8;

    color: #ffffff;
    font-weight: bold;
    font-size: 18px;
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

  span {
    font-size: 18px;
    color: #4d4d4d;
    margin-bottom: 8px;
  }
  input {
    height: 41px;
    background: #e5e5e5;
    border-radius: 8px;
    border: 0;
    width: 100%;
    padding: 8px;
    color: #4d4d4d;
  }

  & + div {
    margin-top: 24px;
  }
`;

export const FormCoord = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  margin: 16px 0;

  div {
    margin-top: 0;
  }
`;
export const MainWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const DevWrapper = styled.main`
  flex: 1;

  ul {
    list-style: none;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 24px;

    li {
      a {
        padding: 20px;
        border-radius: 8px;
        width: 100%;
        height: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
        text-decoration: none;
        background: #f3f3f3;
      }

      span {
        color: #805eb8;
        font-size: 18px;
        margin: 8px 0;
      }
      small {
        font-weight: 200;
        font-size: 12px;
        color: #000000;
        margin-bottom: 8px;
      }
      p {
        font-size: 12px;
        color: #4d4d4d;
        text-align: center;
      }
      img {
        margin-top: 8px;
        width: 60px;
        height: 60px;
        border-radius: 50%;
      }
    }
  }
`;
