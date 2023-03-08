
import React from "react";
import { Component } from "react";
import Statistics from "./components/Feedback/Statistics";
import FeedbackOptions from "./components/Feedback/FeedbackOptions";
import Section from "./components/Feedback/Section";
import Notification from "components/Feedback/Notification";
import {Container} from './components/Feedback/Feedback.styled'

export class App extends Component{

  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  }

  onLeaveFeedback= (propertyName) => {
    this.setState((prevState)=> {
      const value = prevState[propertyName];
      return {
        [propertyName]: value + 1
         
       };
    })
  }

     countTotalFeedback(){
    return this.state.good + this.state.neutral + this.state.bad
         
       };

       countPositiveFeedbackPercentage(){
        return Math.round((this.state.good / this.countTotalFeedback())*100)

       }

render() {
    const options = ['good', 'neutral', 'bad'];
     
    return (
        <Container>
        <Section title="Please leave feedback"/>
        
        <FeedbackOptions 
        options = {options}
        onLeaveFeedback={this.onLeaveFeedback}
         /> 
        
        <Section title= "Statistics">
          {this.countTotalFeedback() ?
 < Statistics
 good={this.state.good}
 neutral={this.state.neutral}
 bad={this.state.bad}
 total={this.countTotalFeedback()}
 positivePercentage={this.countPositiveFeedbackPercentage()}
 /> :  <Notification message="There is no feedback"/>
          }
       
               </Section>               
        </Container>
        
    )
}


};
