// クラスcomponent
// import React,{ Component} from 'react';

// class App extends Component {
//   render(){
//     return(
//       <React.Fragment>
//         <label htmlFor="bar">bar</label>
//         <input type="text" onChange={() => {alert("I am changed.");}}/>
//       </React.Fragment>
//     )
//   }
// }

// ファンクションコンポーネント
import React from 'react';
const App = () => {
  return (
    <div>
      <Cat />
      <Cat />
      <Cat />
    </div>
  )
}

const Cat = () => {
  return <div>Meow!</div>
}
export default App;
