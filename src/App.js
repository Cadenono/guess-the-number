import React, { Component } from 'react';
import './components/App.css';
import { Box } from './components/Box';
import { WinnerList } from './components/WinnerList'


export class App extends Component {

  constructor() { 
    super(); 

    this.state = { 

    people: [],
    nameField: '',
    valueField: '',
    randomNumber: null,
    showNumber: false,
    sortedWinners: []

    }
  }

  componentWillMount() {
    this.state.randomNumber = Math.floor(Math.random() * 1000);
  }

  
  handleChange = event => {
    const type = event.target.id 
    switch(type) {
      case 'name':
        this.setState({ nameField: event.target.value })
        
        break; 
      case 'guess':
        this.setState({ valueField: event.target.value })
        // this.state.valueField = event.target.value
        break; 
      
    }

  };

    
  submitChange = e => {
      e.preventDefault(); 
     
        
        // if (name === "" || value === "") { 
        //   alert('Please enter a value.')
        //   console.log(this.state.people.name)
        //   return; 
        // }
        let name = this.state.nameField 
          let value = this.state.valueField 
          let user = new Object();
        
  
        let arrayToBePushed = this.state.people
        
        user['name'] = name 
        user['value'] = value 

           
        if (name === "" || value === "" ) { 
          alert('Please enter a value.')
          return; 
        } else if (!Number.isInteger(parseInt(value))){
          alert('Please type a number in Guess.')
        } else { 
        arrayToBePushed.push(user)      
        this.setState({ people: arrayToBePushed })
        this.setState({ nameField: '', valueField: ''})
        
      };
      
       
      } 

    calculateNumber = e => {
      e.preventDefault(); 
      let length = this.state.people.length;
      if (!length) { 
        alert('Please enter a value.')
        return; 
      }

    
      {
      let randNum = this.state.randomNumber;
      let sortedArray = this.state.people.sort(function(a, b) {
        let diff_a = parseInt(a.value) - randNum
        let diff_b = parseInt(b.value) - randNum 
        if (Math.abs(diff_a) - Math.abs(diff_b) > 0) { 
          return 1
        } if (Math.abs(diff_a) - Math.abs(diff_b) < 0) {
          return -1 
        } 
          return 0
        
      });
      console.log(sortedArray)

      this.setState({ showNumber: true })
      this.setState({ sortedWinners: sortedArray})
    }
  };
    



  render() {
    // const { people, nameField, searchField } = this.state;
    return (
      <div>

      <header>Guess The Magical Number</header>
      <div className='instructions'>Choose a number from 1 to 1000.</div>
      <h1> {this.state.showNumber && `${this.state.randomNumber}` } </h1> 
      <img src="https://www.freeiconspng.com/uploads/dice-png-transparent-images--png-all-4.png" alt="Dice PNG Transparent Images | PNG All" className="dice-img" />
      <form>
      <p>Name:</p>
      <Box boxname='input-box-name' type='name' value={this.state.nameField} handleChange={this.handleChange}/>
      
     
      <p>Guess: </p>
      <Box boxname= 'input-box-guess' type="guess" value={this.state.valueField} handleChange={this.handleChange}/>

    <button type="submit" onClick={this.submitChange}>
      <i className="fas fa-plus-square"></i>
   </button>  
   <button className='submit-button' type="submit" onClick={this.calculateNumber}>
   Submit
 </button>  
  
   </form>

<div>
 {this.state.sortedWinners.length == 0 ?    <WinnerList people={ this.state.people}/> :   <WinnerList people={this.state.sortedWinners}/>}

</div>

      </div>
    )
  }
};

export default App

// <WinnerList people={ this.state.people}/>
   
// <WinnerList sortedWinners={this.state.sortedWinners}/>