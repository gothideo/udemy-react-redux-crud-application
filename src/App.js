import React from "react";

function App() {
  // const dom = <input type="button" onClick={() => {alert("I am clicked.");}}/>;
  const dom = <React.Fragment><label htmlFor="bar">bar</label><input type="text" onChange={() => {alert("I am changed.");}}/></React.Fragment>;
  return (
    dom
  );
}
// function App() {
//   const greeting = "Hi!!";
//   const dom = <h1 className="foo">{greeting}</h1>;
//   return (
//     dom
//   );
// }
// import React,{ Component} from 'react';
// class App extends Component {
//   render(){
//     return React.createElement(
//       "h1",
//       null,
//       "Hello,World!!"
//     );
//   }
// }

export default App;
