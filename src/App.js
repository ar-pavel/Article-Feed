import React, { lazy, Suspense, useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import UpdaterContex from "./hook/updaterContext";
const Signup = lazy(() => import("./components/Signup"));
const Login = lazy(() => import("./components/Login"));
const Article = lazy(() => import("./components/Article"));
const Feed = lazy(() => import("./components/Feed"));

const App = () => {
  const [updateStatus, setUpdateStatus] = useState(0);

  return (
    <>
      <UpdaterContex.Provider
        value={{ updateStatus: updateStatus, setUpdateStatus: setUpdateStatus }}
      >
        <Suspense
          fallback={<div>Bear with me, Loading the page for you...</div>}
        >
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
        </Suspense>
      </UpdaterContex.Provider>
    </>
  );
};

export default App;
