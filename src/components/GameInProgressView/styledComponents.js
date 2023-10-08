import styled from 'styled-components'

export const GameViewContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
`
export const YouOpponentContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 60%;
  margin-top: 100px;
`
export const YouContainerCard = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 40%;
`
export const OpponentContainerCard = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 40%;
`
export const Title = styled.h1`
  color: #ffffff;
  font-size: 25px;
  font-family: 'Roboto';
`
export const ChoiceButton = styled.button`
  border: none;
  background-color: transparent;
  width: 100%;
`
export const ChoiceImg = styled.img`
  width: 100%;
`
export const ResultText = styled.p`
  color: #ffffff;
  font-size: 35px;
  font-weight: 500;
  margin-bottom: 0;
  font-family: 'Roboto';
`

export const PlayAgainButton = styled.button`
  background-color: #ffffff;
  border-radius: 5px;
  border: none;
  width: 150px;
  outline: none;
  color: #223a5f;
  font-family: 'Bree Serif';
  padding: 10px;
  font-weight: 700;
  font-size: 15px;
`
