import styled from 'styled-components';

export const Card = styled.div`
  padding: 2em;
  border-radius: 30px;
  width: 65%;
  display: flex;
  justify-content: center;

  .container {
    width: 70%;
    text-align: center;
  }

  .score {
    text-align: center;
    font-size: 36px;
  }

  .question-text {
    text-align: center;
    font-size: 36px;
    padding: 1.2em;
  }

  .answers {
    display: flex;
    flex-wrap: wrap;
    align-content: center;
  }

  .answer {
    cursor: pointer;
    flex: 40%;
    margin: 30px;
    font-size: 21px;
    text-align: center;
    padding: 25px;
    background: linear-gradient(#404677, #474d82);
    border-radius: 20px;
  }

  .correct-answer {
    background: linear-gradient(#308154, #30c373);
  }

  .wrong-answer {
    background: linear-gradient(#81062e, #e30049);
  }

  .disabled-answer {
    pointer-events: none;
  }

  .next-btn {
    display: inline-block;
    cursor: pointer;
    font-size: 36px;
    background: linear-gradient(#e65896, #b96ced);
    padding: 12px 45px;
    border-radius: 30px;
  }
`;

export const Background = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #21233d;
  ${Card} {
    background-color: #353a65;
  }
`;
