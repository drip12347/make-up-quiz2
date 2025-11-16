import React, { useState } from "react";
import Quiz from "./quiz/Quiz";
import Home from "./pages/Home";
import Result from "./pages/Result";

export default function App() {
  const [view, setView] = useState("home");
  const [result, setResult] = useState(null);

  return (
    <div className="app">
      <header><h1>Missed Quiz — React Project</h1></header>
      <main>
        {view==="home" && <Home onStart={()=>setView("quiz")} />}
        {view==="quiz" && (
          <Quiz 
            onFinish={(res)=>{setResult(res);setView("result");}} 
            onCancel={()=>setView("home")} 
          />
        )}
        {view==="result" && (
          <Result 
            result={result} 
            onRetake={()=>setView("quiz")} 
            onHome={()=>setView("home")} 
          />
        )}
      </main>
      <footer><small>Built with React</small></footer>
    </div>
  );
}