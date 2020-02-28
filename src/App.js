import React, { Component } from "react";
import DriverCard from "./components/FriendCard/index.js";
import Wrapper from "./components/Wrapper/index.js";
import Title from "./components/Title/index.js";
import NavTab from "./components/NavTab/index.js";
import drivers from "./drivers.json";



class App extends Component {
  // Setting this.state.friends to the friends json array
  state = {
    drivers: drivers,
    score: 0,
    highScore: 0,
    clickeddrivers: [],
  
    
  };

  checkClick = id => {
    // console.log("driver ID:" + (id));
    if (this.state.clickeddrivers.includes(id)) {
      alert( "Sorry you already guessed that driver.");
      this.setState({ score: 0, clickeddrivers: [] })
     
      // console.log("driver status" + (clicked));
    } 
    else {
      this.setState({ clickeddrivers: [...this.state.clickeddrivers, id] })
      this.setState({ score: this.state.score + 1 })
      // this.setState({ messageUser: "Correct guess! keep clicking!" });

      if (this.state.score >= this.state.highScore) {
        this.setState({ highScore: this.state.score + 1 })
      }
      
      if (this.state.score === 11) {
        this.setState({ score: 0, highScore: 12, clickeddrivers: [], drivers: drivers })
      }
    }
  }
     

  shuffledrivers = (array) => {
    let i = array.length;
    while (0 !== i) {
      let j = Math.floor(Math.random() * i);
      i -= 1;
      let temp = array[i];
      array[i] = array[j];
      array[j] = temp;
    }
    this.setState({ randomize: drivers });
  }
  // Map over this.state.friends and render a FriendCard component for each friend object
  render() {
    return (
      <Wrapper>
        <div className="container-fluid">
          <NavTab currentScore={this.state.currentScore} topScore={this.state.topScore} messageUser={this.state.messageUser}>Memory Match</NavTab>
        </div>
        <Title>Driver cards</Title>
        {/* <div className="container"> */}
          {this.state.drivers.map(driverRender => (
            <div className='container' id={driverRender.id}>
              <DriverCard
                image={driverRender.image}
                shuffledrivers={() => { this.shuffledrivers(this.state.drivers) }}
                checkClick={() => { this.checkClick(driverRender.id) }} />
            </div>
          ))}
        {/* </div> */}
      </Wrapper>
    );
  };
};

export default App;
