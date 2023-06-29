// import Home from "./Container/Home"
import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom"
import Fjob from "./Container/HomeIconsButton/Fjob";
import Blooddonors from "./Container/HomeIconsButton/Blooddonors";
import Home from "./Container/Home";
// import Login from "./Container/Login";



function App() {
  return (
    <>
    <Router>
      {/* HomePage */}
        <Route path="/" component={Home} exact />
        {/* <Route path="/login" component={Login} exact /> */}

        <Route path="/fjob" component={Fjob} />
        <Route path="/blooddonors" component={Blooddonors} />
      </Router>
    </>
  );
}

export default App;
 