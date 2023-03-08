import React from "react";

 const FeedbackOptions = ({options, onLeaveFeedback}) => {
    return(
        <>
        {options.map(option => {
            return (
                <span key = {option}><button type="button" onClick ={()=>onLeaveFeedback(option)}>{option} </button>
                 </span>
        )})
   
}
</>
 )}
export default FeedbackOptions;