import React, { Component } from 'react';
import NavTab from './components/NavTab/NavTab.js';
import DriverCard from './components/DriverCard/DriverCard.js';
import Wrapper from "./components/Wrapper/index.js"
import drivers from './drivers.json';
import './index.css';

class App extends Component {

  state = {
    drivers: drivers,
    score: 0,
    highScore: 0,
    clickeddrivers: [],
    message: "Click any driver to begin!"
  }


  checkClick = (id) => {

    
    if (this.state.clickeddrivers.includes(id)) {
      this.setState({message:'Sorry :( you already picked that driver. You should try again!'});
      this.setState({ score: 0, clickeddrivers: [] })
    }

   
    else {
      this.setState({ clickeddrivers: [...this.state.clickeddrivers, id] })
      this.setState({ score: this.state.score + 1 })
      this.setState({message: 'Correct! keep clicking drivers!'});
     
      if (this.state.score >= this.state.highScore) {
        this.setState({ highScore: this.state.score + 1 })
      }
      
      if (this.state.score === 11) {
        this.setState({ score: 0, highScore: 12, clickeddrivers: [], drivers: drivers })
        this.setState({message:'You won!'});
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

  //Render the entire app
  render() {
    return (
      <Wrapper>
      <div className="container-fluid">
        <NavTab message={this.state.message} score={this.state.score} highScore={this.state.highScore}>Memory Match</NavTab>
        <div className="card-group">
          {this.state.drivers.map(driverRender => (
            <div className='col-md-2' id={driverRender.id}>
              <DriverCard
                image={driverRender.image}
                shuffledrivers={() => { this.shuffledrivers(this.state.drivers) }}
                checkClick={() => { this.checkClick(driverRender.id) }} />
            </div>
          ))}
        </div>
      </div>
      </Wrapper>
    )
  }
}

export default App;
