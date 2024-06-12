import styled from "styled-components";

export const Background = styled.section`
  background-size: cover;
  height: 500px;

  img {
    width: 400px;
  }

  h1 {
    margin: 1% 2%;
    width: 50%;
    color: white;
    font-size: 35px;
  }
`;

export const DonationsArea = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;

  p {
    font-size: 18px;
  }
`;

export const DonationsInformation = styled.div`
  margin-top: 5%;
  background-color: #407fed4e;
  width: 60%;
  border-radius: 25px;
  text-align: center;
  padding: 5%;

  h1 {
    font-size: 30px;
    color: black;
  }

  button {
    margin-top: 5%;
    width: 300px;
  }
`;

export const DonationsInformationGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;

  h1 {
    margin: 2% 0;
    color: black;
  }
`;
