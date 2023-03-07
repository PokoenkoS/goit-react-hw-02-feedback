import React from "react";

const FeedbackOptions = ({good, neutral, bad}) =>{
    return(
        <div>
<h3>Statistics</h3>
<span>Good:{good}</span>
<span>Neutral:{neutral}</span>
<span>Bad:{bad}</span>
<span>Total:</span>
<span>Positive feedback:</span>
</div>
    )
}

export default FeedbackOptions


