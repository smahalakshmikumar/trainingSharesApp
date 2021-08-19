import logo from './logo.svg';
import './App.css';
import React, { Suspense } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

//implementing Lazy loading in components
const SharesList = React.lazy(() =>
  import("./components/shares/sharesList/SharesList")
);
const SelectedShare = React.lazy(() =>
  import("./components/shares/selectedShares/SelectedShare")
);
const MyOrders = React.lazy(() =>
  import("./components/myOrders/MyOrders")
);
const LoginForm = React.lazy(() =>
import("./components/login/LoginForm")
);
const Registration = React.lazy(() =>
import("./components/register/Registration")
);

function App() {
  return (
    <div className="App">
       <React.Fragment>
        <Router>
          <Switch>
              <Suspense fallback={<div>Loading...</div>}>
                <Route component={LoginForm} path="/" exact={true} />
                <Route component={Registration} path="/registration" />
                <Route component={SharesList} path="/sharesList" />
                <Route component={SelectedShare} path="/selectedShare/:id" />
                <Route component={MyOrders} path="/myOrders" />
              </Suspense>
          </Switch>
        </Router>
      </React.Fragment>
    </div>
  );
}

export default App;
