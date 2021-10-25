import Feed from "./components/Feed";

import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Article from "./components/Article";

function App() {
  return (<>
    <Router>
      <Switch>
        <Route path="/:uuid"> <Article /> </Route>
        <Route path="/"> <Feed /> </Route>
      </Switch>
    </Router>

  </>
  );
}

export default App;
