
const parent=React.createElement("div",{id:"parent"},
React.createElement("div",{id:"child"},
React.createElement("h1",
{},"I'm an h1 tag "
)))





const heading=React.createElement("h1",
{
  id:"heading",
  xyz:"abc"
},
"HEllo form react!");
const root=ReactDOM.createRoot(document.getElementById("root"));

console.log(parent);// object
root.render(parent);