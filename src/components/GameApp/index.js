import {Component} from 'react'
import {RiCloseLine} from 'react-icons/ri'

import Popup from 'reactjs-popup'

import 'reactjs-popup/dist/index.css'

import GameInProgressView from '../GameInProgressView'
import {
  GameAppContainer,
  HeaderContainer,
  MainHeading,
  GameScoreCard,
  ScoreTitle,
  Score,
  ChoicesListContainer,
  ChoiceButton,
  ChoiceImg,
  RulesButton,
  RulesContainer,
  CloseButton,
  RulesImg,
} from './styledComponents'

const choicesList = [
  {
    id: 'ROCK',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/rock-image.png',
  },
  {
    id: 'SCISSORS',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/scissor-image.png',
  },
  {
    id: 'PAPER',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/paper-image.png',
  },
]

class GameApp extends Component {
  state = {
    activeRandomChoice:
      choicesList[
        Math.floor(Math.random(choicesList.length) * choicesList.length)
      ],
    activeChoiceSelected: '',
    gameInProgress: false,
    score: 0,
    resultText: '',
  }

  playAgain = () => {
    this.setState({
      activeRandomChoice:
        choicesList[
          Math.floor(Math.random(choicesList.length) * choicesList.length)
        ],
      activeChoiceSelected: '',
      gameInProgress: false,
    })
  }

  renderHeader = () => {
    const {score} = this.state
    return (
      <HeaderContainer>
        <MainHeading>ROCK PAPER SCISSORS</MainHeading>
        <GameScoreCard>
          <ScoreTitle>Score</ScoreTitle>
          <Score>{score}</Score>
        </GameScoreCard>
      </HeaderContainer>
    )
  }

  onClickRockButton = () => {
    const {activeRandomChoice} = this.state
    console.log(activeRandomChoice)
    this.setState({
      gameInProgress: true,
      activeChoiceSelected: choicesList[0],
    })
    if (activeRandomChoice.id === 'SCISSORS') {
      this.setState({resultText: 'YOU WON'})
      this.setState(prevState => ({score: prevState.score + 1}))
    } else if (activeRandomChoice.id === 'PAPER') {
      this.setState({resultText: 'YOU LOSE'})
      this.setState(prevState => ({score: prevState.score - 1}))
    } else if (activeRandomChoice.id === 'ROCK') {
      this.setState({resultText: 'IT IS DRAW'})
    }
  }

  onClickScissorButton = () => {
    const {activeRandomChoice} = this.state
    console.log(activeRandomChoice)
    this.setState({
      gameInProgress: true,
      activeChoiceSelected: choicesList[1],
    })
    if (activeRandomChoice.id === 'PAPER') {
      this.setState({resultText: 'YOU WON'})
      this.setState(prevState => ({score: prevState.score + 1}))
    } else if (activeRandomChoice.id === 'ROCK') {
      this.setState({resultText: 'YOU LOSE'})
      this.setState(prevState => ({score: prevState.score - 1}))
    } else if (activeRandomChoice.id === 'SCISSORS') {
      this.setState({resultText: 'IT IS DRAW'})
    }
  }

  onClickPaperButton = () => {
    const {activeRandomChoice} = this.state
    console.log(activeRandomChoice)
    this.setState({
      gameInProgress: true,
      activeChoiceSelected: choicesList[2],
    })
    if (activeRandomChoice.id === 'ROCK') {
      this.setState({resultText: 'YOU WON'})
      this.setState(prevState => ({score: prevState.score + 1}))
    } else if (activeRandomChoice.id === 'SCISSORS') {
      this.setState({resultText: 'YOU LOSE'})
      this.setState(prevState => ({score: prevState.score - 1}))
    } else if (activeRandomChoice.id === 'PAPER') {
      this.setState({resultText: 'IT IS DRAW'})
    }
  }

  renderChoicesList = () => (
    <ChoicesListContainer>
      <ChoiceButton
        type="button"
        data-testid="rockButton"
        onClick={this.onClickRockButton}
        id="ROCK"
      >
        <ChoiceImg
          src="https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/rock-image.png"
          alt="ROCK"
        />
      </ChoiceButton>
      <ChoiceButton
        type="button"
        data-testid="scissorsButton"
        onClick={this.onClickScissorButton}
      >
        <ChoiceImg
          src="https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/scissor-image.png"
          alt="SCISSORS"
          id="SCISSORS"
        />
      </ChoiceButton>
      <ChoiceButton
        type="button"
        data-testid="paperButton"
        onClick={this.onClickPaperButton}
      >
        <ChoiceImg
          src="https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/paper-image.png"
          alt="PAPER"
          id="PAPER"
        />
      </ChoiceButton>
    </ChoicesListContainer>
  )

  renderGameInProgressView = () => {
    const {activeRandomChoice, activeChoiceSelected, resultText} = this.state

    return (
      <GameInProgressView
        activeRandomChoice={activeRandomChoice}
        activeChoiceSelected={activeChoiceSelected}
        playAgain={this.playAgain}
        resultText={resultText}
      />
    )
  }

  renderRulePopup = () => (
    <Popup modal trigger={<RulesButton type="button">Rules</RulesButton>}>
      {close => (
        <RulesContainer>
          <CloseButton type="button" onClick={() => close()}>
            <RiCloseLine />
          </CloseButton>
          <RulesImg
            src="https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/rules-image.png"
            alt="rules"
          />
        </RulesContainer>
      )}
    </Popup>
  )

  render() {
    const {gameInProgress} = this.state

    return (
      <GameAppContainer>
        {this.renderHeader()}
        {gameInProgress
          ? this.renderGameInProgressView()
          : this.renderChoicesList()}
        {this.renderRulePopup()}
      </GameAppContainer>
    )
  }
}

export default GameApp
