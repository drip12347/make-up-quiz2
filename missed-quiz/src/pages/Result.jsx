import React from "react";
export default function Result({result,onRetake,onHome}){
 if(!result) return null;
 const percent=Math.round((result.score/result.total)*100);

 return(
   <div>
     <h2>Your Result</h2>
     <p>Score: {result.score}/{result.total}</p>
     <p>Percentage: {percent}%</p>
     <button onClick={onRetake}>Retake</button>
     <button onClick={onHome}>Home</button>
   </div>
 );
}