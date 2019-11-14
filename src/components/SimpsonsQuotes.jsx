import React from 'react'
import axios from 'axios'

class SimpsonsQuotes extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        simpsons:{},
        
      };
      this.SimpsonsQuotes = this.SimpsonsQuotes.bind(this);
    }
    
    SimpsonsQuotes() {
        // Send the request
        axios.get('https://quests.wilders.dev/simpsons-quotes/quotes')
          .then(response => {
              console.log(response.data[0])
              this.setState({
                  simpsons: response.data[0]
              })
          })
         
      }

    
  
    render() {
        return (
          <div className="App">
              <h1>
              {this.state.simpsons.character}
              </h1>
              <p>
              {this.state.simpsons.quote}
              </p>
              <img src={this.state.simpsons.image} alt="" />
            <button type="button" onClick={this.SimpsonsQuotes}>Get employee</button>
          </div>
        );
      }

    }
  
  export default SimpsonsQuotes;