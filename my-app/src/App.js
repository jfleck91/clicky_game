import React, { Component } from "react";
import MatchCard from "./components/MatchCard";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import matches from "./matchcards.json";
import "./App.css";

let correctGuesses = 0;
let bestScore = 0;
let clickMessage = "Click on an image to earn points, but don't click on any of them more than once!";

class App extends Component {
    
    // Setting this.state.matches to the matches json array

    

        // Make a copy of the state matches array to work with
       

        // Filter for the clicked match
    

        // If the matched image's clicked value is already true, 
        // do the game over actions


        // Otherwise, if clicked = false, and the user hasn't finished


            // Set its value to true
 

            // increment the appropriate counter


            // Shuffle the array to be rendered in a random order
            

            // Set this.state.matches equal to the new matches array
      

            // Set its value to true


            // restart the guess counter


            // play again


            // Shuffle the array to be rendered in a random order


            // Set this.state.matches equal to the new matches array


        }
    };

    render() {
        return (
            <Wrapper>
                <Title>To boldly click where no one has clicked before!</Title>
        
                <h3 className="scoreSummary">
                    {this.state.clickMessage}
                </h3>
                
                <h3 className="scoreSummary">
                    Correct Guesses: {this.state.correctGuesses} 
                    <br />
                    Best Score: {this.state.bestScore} 
                </h3>

                {this.state.matches.map(match => (
                    <MatchCard
                        setClicked={this.setClicked}
                        id={match.id}
                        key={match.id}
                        image={match.image}
                    />
                ))}
            </Wrapper>
        );
    }
}

export default App;