import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Feed from "./components/Feed";
import Article from "./components/Article";
import Login from "./components/Login";
import useToken from "./hook/useToken";
import Signup from "./components/Signup";

const App = () => {
  // for now we are stroring it in app.js

  return (
    <>
      <Router>
        <Switch>
          <Route exact path="/login">
            <Login />
          </Route>
          <Route exact path="/signup">
            <Signup />
          </Route>
          <Route exact path="/">
            <Feed />
          </Route>
          <Route path="/:uuid">
            <Article />
          </Route>
        </Switch>
      </Router>
    </>
  );
};

export default App;
