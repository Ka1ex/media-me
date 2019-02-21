import React, { Component } from 'react';


class App extends Component {
  
  state = {
    clicked: false
  }

    


  handleClick = () => {
    this.setState({clicked: true})
  }
  handleClick2 = () => {
    this.setState({clicked: false})
  }

  render() {
    return (
      <div>
        
        { !this.state.clicked &&
        
        <img
          style={{cursor: 'pointer'}} 
          height='300px' 
          width='300px' 
          src="http://www.ergodomus.it/wp-content/uploads/2017/02/linkedin-logo-copy.png" 
          onClick={this.handleClick}
          alt=""
        />

        }
        { this.state.clicked &&

          <div>
            
            <div>
              <button onClick={this.handleClick2}>
                Back
              </button>
              
            </div>
          </div>

        }        
      </div>
    );
  }
}

export default App;
