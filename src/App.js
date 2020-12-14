// import logo from './logo.svg';
import React from "react";
import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom";

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

// different pages
import MainPage from "./pages";
import ContactInfo from "./pages/contactme";
import Portfolio from "./pages/portfolio";

// different components
import Wrapper from "./components/Wrapper"
import BootstrapNavbar from "./components/Navbar";
import BootstrapFooter from "./components/Footer";

function App() {

  return (
    <Wrapper>
      <BootstrapNavbar />
      <Router>
        <div className="blah">

          {/* Router cannot have more than one single child element */}
          <Switch>

            <Route exact path="/" component={MainPage} />
            {/* Render this only if the first route doesnt match */}
            <Route exact path="/portfolio" component= { Portfolio } />
            <Route exact path="/contact" component={ ContactInfo } />
            <Route path="/404" render={
              () => (
                <h2>404: NOT A VALID URL PATH!</h2>
              )}
            />
            {/* Redirect tells react to go to a known path if nothing matches*/}
            {/* always have redirect as the last item */}
            <Redirect to="/404" />;

          </Switch>
        </div>
      </Router>
      <BootstrapFooter/>
    </Wrapper>
  );
}

//the code above is equivalent to code below:

// class App extends Component {
//   render(){
//     return (
//       <div className="App">
//         <header className="App-header">
//           <img src={logo} className="App-logo" alt="logo" />
//           <p>
//             Hello <code>src/App.js</code> World.
//           </p>
//           <a
//             className="App-link"
//             href="https://reactjs.org"
//             target="_blank"
//             rel="noopener noreferrer"
//           >
//             Learn React
//           </a>
//         </header>
//       </div>
//     );
//   }
// }


export default App;
