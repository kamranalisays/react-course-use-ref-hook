import { useState, useEffect, useRef } from "react";

const UseRefHookExample = () => {

  const count = useRef(0);

  useEffect(()=>{  
    count.current = count.current +1 ; 
  },[]);

  return (
     <div>
      <h1> Render count : {count.current} </h1>
      <button onClick={()=> { alert(count.current)} }> click me`` </button>
    </div>
  );
}

export default  UseRefHookExample;



