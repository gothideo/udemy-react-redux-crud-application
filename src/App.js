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
  const profiles =[
    {name: "Taro",age:10},
    {name: "HanakoOOO",age: 11},
    {}
  ]
  return (
    <div>
      {
        profiles.map((profile,index) => {
          return <User name={profile.name} age={profile.age} key={index}/>
        })
      }
    </div>
  )
}

const User = (props) => {
  return <div>Hi I am {props.name} and I am {props.age} years old</div>
}

User.defaultProps = {
  name:"MR.x",age:1
}

export default App;
