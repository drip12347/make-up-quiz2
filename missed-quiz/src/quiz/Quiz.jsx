import React,{useState} from "react";
import questions from "./questions";

export default function Quiz({onFinish,onCancel}){
 const [current,setCurrent]=useState(0);
 const [selected,setSelected]=useState(Array(questions.length).fill(null));

 function choose(i){
   let c=[...selected];
   c[current]=i;
   setSelected(c);
 }

 function next(){ if(current<questions.length-1) setCurrent(c=>c+1); }
 function prev(){ if(current>0) setCurrent(c=>c-1); }

 function submit(){
  let score=0;
  questions.forEach((q,i)=>{ if(selected[i]===q.answerIndex) score++; });
  onFinish({score,total:questions.length,selected});
 }

 return(
   <div className="quiz">
     <h2>Question {current+1}/{questions.length}</h2>
     <p>{questions[current].question}</p>
     {questions[current].options.map((o,i)=>
       <button 
         key={i} 
         onClick={()=>choose(i)} 
         className={selected[current]===i?"selected":""}
       >
         {o}
       </button>
     )}
     <div>
       <button onClick={onCancel}>Cancel</button>
       <button onClick={prev} disabled={current===0}>Prev</button>
       {current<questions.length-1 ?
         <button onClick={next}>Next</button> :
         <button onClick={submit}>Submit</button>}
     </div>
   </div>
 );
}