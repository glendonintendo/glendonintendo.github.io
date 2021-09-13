import Nav from "./components/Nav";
import Footer from "./components/Footer";
import Portfolio from "./pages/Portfolio";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Resume from "./pages/Resume";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  return (
    <Router>
      <Nav />
      <main>
        <Switch>
          <Route exact path="/about" component={About} />
          <Route exact path="/portfolio" component={Portfolio} />
          <Route exact path="/contact" component={Contact} />
          <Route exact path="/resume" component={Resume} />

          <Route component={About} />
        </Switch>
      </main>
      <Footer />
    </Router>
  );
}

export default App;
