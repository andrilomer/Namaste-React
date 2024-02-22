import React from "react";
import ReactDOM from "react-dom/client";

// React Element are simply objects 
// React.createElement => Object => HTMLElement(render)

  // JSX is a syntax like HTML
  // this is ReactElement
  const title =  (
  <h1 id="heading" tabIndex="3"> 
  Namaste React using JSX
  </h1>
  );

  const number=1000;
  // React Functional Component

  //component composition 
  const HeadingComponent= ()=>(
    <div id="container">
      {title}
      <h2>{number}</h2>
      <h1>Namaste React Functional Component</h1>
    </div>
  );




const root=ReactDOM.createRoot(document.getElementById("root"));

root.render(<HeadingComponent/>);