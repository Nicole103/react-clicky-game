import React, { Component } from "react";
import FriendCard from "./components/FriendCard";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import NavTab from "./components/NavTab";
import friends from "./friends.json";

class App extends Component {
  // Setting this.state.friends to the friends json array
  state = {
    friends,
    currentScore: 0,
    topScore: 0,
    messageUser: "Click any driver to begin!",
    // clickedCards:[],
    clicked: false
  };

  resetClicked = arr => {
    this.setState({
      currentScore: 0,
      topScore: this.state.topScore,
      messageUser: "Sorry you already guessed that driver...",
      // clickedCards: []
      clicked: false
    });
    this.shuffleCards(friends);
    return arr;
  }
  
  checkClick = id => {
    console.log("driver ID:" + (id));
    // if(!this.state.clickedCards.includes(id));
    // this.addPoint();
    // this.state.clickedCards.push(id);

     if(friends.id === id){
        if (friends.clicked){
          this.setState({messageUser: "Sorry you already guessed that driver..."});
          this.resetClicked(friends);
          console.log("Current top score: " + this.state.topScore);
          
        }else {
          this.setState({ messageUser: "Correct guess! keep clicking!"});  
          this.setState({currentScore: this.state.currentScore + 1});
          // this.setState({
          //   clicked: this.friends.filter(friend=>friend.clicked)
          // })  
          // this.setState.friends[key].clicked = true;
          console.log("Current Score: " +this.state.currentScore);

          if(this.state.currentScore > this.state.topScore) {
            console.log("New Top Score: " + this.state.topScore);
            this.State({topScore: this.state.currentScore});
          };
        }
        
      };
    };
    this.shuffleCards(friends);
    this.setState({friends});
    console.log(this.state.friends);
  };
  
  shuffleCards = array => {
    for(let i = array.length -1; i>0; i--){
      const j = Math.floor(Math.random() * i)
      const temp =array[i]
      array[i] = array[j]
      array[j] = temp
    }
    return array
  };
  

  // Map over this.state.friends and render a FriendCard component for each friend object
  render() {
    return (
      <Wrapper>
        <div className="container-fluid">
          <NavTab currentScore = {this.state.currentScore} topScore = {this.state.topScore} messageUser = {this.state.messageUser}>Memory Match</NavTab>
        </div>
        <Title>Driver cards</Title>
        {this.state.friends.map(friend => (
          <FriendCard 
            checkClick={this.checkClick}
            id={friend.id}
            key={friend.id}
            name={friend.name}
            image={friend.image}
            occupation={friend.occupation}
            place={friend.place}
            clicked={friend.clicked}
          />
        ))}
      </Wrapper>
    );
  };
};

export default App;
