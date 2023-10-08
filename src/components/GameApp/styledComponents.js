import styled from 'styled-components'

export const GameAppContainer = styled.div`
  background-color: #223a5f;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 40px;
`
export const HeaderContainer = styled.div`
  border: 2px solid #ffffff;
  background-color: transparent;
  border-radius: 15px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 10px 30px 10px 30px;
  width: 100%;
`

export const MainHeading = styled.h1`
  color: #ffffff;
  font-size: 20px;
  width: 100px;
  font-family: 'Bree Serif';
`

export const GameScoreCard = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #ffffff;
  color: #223a5f;
  border-radius: 10px;
  padding: 20px;
  width: 150px;
  height: 100px;
`
export const ScoreTitle = styled.p`
  font-size: 20px;
  font-family: 'Bree Serif';
  margin-bottom: 0;
`
export const Score = styled.p`
  font-size: 30px;
  font-weight: 700;
  margin-top: 0;
  font-family: 'Roboto';
`
export const ChoicesListContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  width: 50%;
  margin-top: 80px;
`
export const ChoiceButton = styled.button`
  border: none;
  background-color: transparent;
  width: 50%;
`
export const ChoiceImg = styled.img`
  width: 100%;
`
export const RulesButton = styled.button`
  background-color: #ffffff;
  font-family: 'Bree Serif';
  color: #223a5f;
  border-radius: 10px;
  padding: 10px;
  align-self: flex-end;
  outline: none;
  border: none;
  cursor: pointer;
  font-weight: 600;
`
export const RulesContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

export const CloseButton = styled.button`
  background-color: transparent;
  align-self: flex-end;
  border: none;
  outline: none;
  cursor: pointer;
`
export const RulesImg = styled.img`
  height: 500px;
  width: 100%;
`
