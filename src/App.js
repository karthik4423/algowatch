import React from "react";
//import Navbar from "./components/navbar.component";
import Sorting from "./components/sorting.component";
import Home from "./components/home.component";
import { BrowserRouter as Router, Route } from "react-router-dom";

/*import ExercisesList from "./components/exercises-list.component";*/

function App() {
  return (
    <Router>
      <div>
        <Route path="/" exact component={Home} />
        <Route path="/sorting" component={Sorting} />
        {/*<Route path="/" exact component={ExercisesList} />*/}
      </div>
    </Router>
  );
}

export default App;
