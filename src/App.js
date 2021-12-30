// function App() {
//   return (
//     <div>Hello, World!</div>
//   );
// }
import React,{ Component} from 'react';
// jsx利用時のコード
// jsxを利用することでHTMLを直感的に記載することが可能
class App extends Component {
  render(){
    return(
      <h1>Hello, World!</h1>
    );
  }
}

// jsxを利用しない時のコード
// class App extends Component {
//   render(){
//     return React.createElement(
//       "div",
//       null,
//       "Hello,World!!!!!"
//     );
//   }
// }

export default App;
