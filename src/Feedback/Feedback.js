import React from "react";
import Controls from "./Controls";
import FeedbackOptions from "./FeedbackOptions";

export class Feedback extends React.Component {
 
    state = {
        good: 0,
        neutral: 0,
        bad: 0
      }

      
    clickGood = () =>{
        this.setState(prevState =>({
         good: prevState.good +1,
         visible: true,
          
        }));
     
    }
    clickNeutral = () =>{
        this.setState(prevState =>({
            neutral: prevState.neutral +1,
            visible: true,
             
           }));
    
    }
    clickBad = () =>{
        this.setState(prevState =>({
            bad: prevState.bad +1,
            visible: true,
             
           }));
       
        
    }

    render() {
        return (
            <div>
            <h2>Please leave feedback </h2>
            <Controls onClickGood={this.clickGood}
            onClickNeutral ={this.clickNeutral}
            onClickBad={this.clickBad}/>
            {this.state.visible&&(<FeedbackOptions good={this.state.good} neutral={this.state.neutral} bad={this.state.bad}/> )}
                                  
            </div>
            
        )
    }
}