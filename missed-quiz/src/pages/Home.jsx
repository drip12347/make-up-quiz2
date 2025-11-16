import React from "react";
export default function Home({onStart}){
 return(
   <div>
     <h2>Missed Quiz</h2>
     <p>Click below to start the quiz.</p>
     <button onClick={onStart}>Start Quiz</button>
   </div>
 );
}