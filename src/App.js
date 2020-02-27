import React, { Component } from "react";
import FriendCard from "./components/FriendCard";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import NavTab from "./components/NavTab";
import friends from "./friends.json";

function shuffleCards(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * i)
    const temp = array[i]
    array[i] = array[j]
    array[j] = temp
  }
  return array
};

let currentScore = 0;
let topScore = 0;


class App extends Component {
  // Setting this.state.friends to the friends json array
  state = {
    friends,
    currentScore: 0,
    topScore: 0,
    messageUser: "Click any driver to begin!",
    // clickedCards:[],
    // clicked: false
  };

  shuffleCards = () => {
    let shuffleFriends = shuffleCards(friends);
    this.setState({ friends: shuffleFriends });
  }

  checkClick = id => {
    console.log("driver ID:" + (id));
    const friends = this.state.friends;
    const clickedFriend = friends.filter(friend => friend.id === id);

    if (clickedFriend[0].clicked) {
      currentScore = 0;
      friends.map(friend => friend.clicked = false);
      this.setState({ messageUser: "Sorry you already guessed that driver..." });
      this.setState({ friends });
      this.setState({ currentScore });


    } else if (clickedFriend < 11) {
      clickedFriend[0].clicked = true;
      currentScore++;
      this.setState({ messageUser: "Correct guess! keep clicking!" });
      if (currentScore > topScore) {
        topScore = currentScore;
        this.setState({ topScore });
      }
      this.setState({ friends });
      this.setState({ currentScore });
      this.shuffleCards();
    } else {
      clickedFriend[0].clicked = true;
      currentScore = 0;
      topScore = 12;
      this.setState({ messageUser: "You Won!" });
      this.setState({ topScore });
      friends.map(friend => friend.clicked = false);
      this.setState({ friends });
      this.setState({ currentScore });
      this.shuffleCards();
    }
  };

  // Map over this.state.friends and render a FriendCard component for each friend object
  render() {
    return (
      <Wrapper>
        <div className="container-fluid">
          <NavTab currentScore={this.state.currentScore} topScore={this.state.topScore} messageUser={this.state.messageUser}>Memory Match</NavTab>
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
