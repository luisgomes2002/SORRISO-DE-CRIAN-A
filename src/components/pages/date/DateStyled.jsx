import styled from "styled-components";

export const DateArea = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;

  h1 {
    margin-top: 2%;
    font-size: 40px;
    background-color: #4080ed;
    width: 75%;
    color: white;
    padding: 1% 0;
    border-radius: 25px 25px 0 0;
  }
`;

export const Calendar = styled.div`
  display: grid;
  grid-template-columns: repeat(7, 1fr);

  p {
    height: 150px;
    width: 204px;
    font-size: 30px;
    border: black solid 1px;
  }
`;
