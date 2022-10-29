// import logo from './logo.svg';
import { Profile } from './component/Profile';
import user from './data/user.json'
import './App.css';

function App() {
  return (
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>
    <Profile
    username={user.username}
    tag={user.tag}
    location={user.location}
    avatar={user.avatr}
    stats={user.stats}
    />
  );
}

export default App;
