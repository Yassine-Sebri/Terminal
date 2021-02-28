import Header from "./components/Header";
import Title from "./components/Title";
import Writer from "./components/Writer";
import Footer from "./components/Footer";
import Writeups from "./components/Writeups";
import MCNO from "./components/Writeups/MCNO";
import { BrowserRouter as Router, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <div id="container">
          <Header />
          <Title />
          <Route
            path="/Terminal"
            exact
            render={(props) => (
              <span id="type">
                <Writer />
              </span>
            )}
          />
          <Route path="/Terminal/Writeups" exact component={Writeups} />
          <Route
            path="/Terminal/Writeups/Microcorruption-New-Orleans"
            component={MCNO}
          />
        </div>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
