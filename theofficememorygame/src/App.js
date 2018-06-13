
import React from "react";
import CharacterCard from "./components/CharacterCard";
import Wrapper from "./components/Wrapper";
import NavBar from "./components/NavBar";
import HeroHeader from "./components/HeroHeader";
import Footer from "./components/Footer";
import characters from "./characters.json";
import "./App.css";

class App extends React.Component {

  state = {
  characters,
  clickedCharacters: [],
  score:0,
  highScore:0,
  navMessage: "Click an image to begin!"

 };

  randomCharacter = () => {
    let characters = this.state.characters;
    let randomCharacters = [];
    let random = Math.floor(Math.random() * Math.floor(characters.length));
    for (let i = 0; i < characters.length; i++) {
      randomCharacters.push(characters[random]);
      characters.splice(random, 1)
    }
    return randomCharacters;
  }

  scoreChecker = id => {
    let character = this.state.clickedCharacters;
    if (character.length !== 0 && character.indexOf(id) !== -1) {
        this.setState({clickedCharacters:[]});
        this.setState({score:0});
        this.setState({navMessage:"Incorrect guess!"});
    } else {
      // Lag but no set state issue
      //    let updatedScore = this.state.score;
      //    this.setState({score: updatedScore+=1}) ;

      // No Lag but has error ---
      // Do not mutate state directly. Use setState()  react/no-direct-mutation-state
      this.setState({score: this.state.score+=1}) ;
      character.push(id);
      this.setState({navMessage:"Correct!"});
      this.setState({clickedCharacters: character});

      if (this.state.score >= this.state.highScore) {
        this.setState({highScore:this.state.score});
      } 
    }
  } 

  shuffleArray = (array) => {
    let i = array.length - 1;
    for (; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      const temp = array[i];
      array[i] = array[j];
      array[j] = temp;
    }
    return array;
  }

  render() {
   
    const shuffledCharacters = this.shuffleArray(this.state.characters);
    return (
      <Wrapper>
        < NavBar 
            score={this.state.score}
            highScore={this.state.highScore}
            navMessage={this.state.navMessage}
          / >
        < HeroHeader />
        
        <div className="card-container">
          
        {shuffledCharacters.map((character)  => (
          <CharacterCard
            score={this.state.score}
            highScore={this.state.highScore}
            clickedCharacters={this.state.clickedCharacters}
            scoreChecker={this.scoreChecker}
            deleteCharacter={this.deleteCharacter}
            id={character.id}
            key={character.id}
            name={character.name}
            image={character.image}
            occupation={character.occupation}
            location={character.location}
          />
        ))}
        </div>
        <Footer/>
      </Wrapper>
    );
  }
}
export default App;