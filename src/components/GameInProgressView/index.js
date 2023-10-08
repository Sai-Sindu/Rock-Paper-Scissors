import {
  GameViewContainer,
  YouOpponentContainer,
  YouContainerCard,
  OpponentContainerCard,
  Title,
  ChoiceButton,
  ChoiceImg,
  ResultText,
  PlayAgainButton,
} from './styledComponents'

const GameInProgressView = props => {
  const {
    activeRandomChoice,
    activeChoiceSelected,
    playAgain,
    resultText,
  } = props

  const onClickPlayAgain = () => {
    playAgain()
  }

  return (
    <GameViewContainer>
      <YouOpponentContainer>
        <YouContainerCard>
          <Title>YOU</Title>
          <ChoiceButton type="button">
            <ChoiceImg src={activeChoiceSelected.imageUrl} alt="your choice" />
          </ChoiceButton>
        </YouContainerCard>
        <OpponentContainerCard>
          <Title>OPPONENT</Title>
          <ChoiceButton type="button">
            <ChoiceImg
              src={activeRandomChoice.imageUrl}
              alt="opponent choice"
            />
          </ChoiceButton>
        </OpponentContainerCard>
      </YouOpponentContainer>
      <ResultText>{resultText}</ResultText>
      <PlayAgainButton type="button" onClick={onClickPlayAgain}>
        PLAY AGAIN
      </PlayAgainButton>
    </GameViewContainer>
  )
}

export default GameInProgressView
