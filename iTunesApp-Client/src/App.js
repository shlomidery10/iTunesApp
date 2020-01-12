import React, {useState} from "react";
import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./Home";
import Login from "./Login";
import SignUp from "./SignUp";
import { AuthProvider } from "./Auth";
import PrivateRoute from "./PrivateRoute";
import ItuneDetails from "./pages/ItuneDetails"

const App = () => {

  const [itunes, setItunes] = useState([])

  const getItune = (pickedTuneId) => {

    return itunes.find(tune => tune.trackId === pickedTuneId);
  }
  // <Home onUpdateItunes={(newItunes) => setItunes(newItunes)}/>
 
  return (
    <AuthProvider>
      <Router>
        <div>
          <PrivateRoute  exact path="/" render={(props) => <Home onUpdateItunes={(tunes) => setItunes(tunes)}/>} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/signup" component={SignUp} />
          <Route path="/about/:id" render={routeParams => {
            return (
              <ItuneDetails 
                itune={getItune(routeParams.match.params.id)}>
             </ItuneDetails>)
          }}>
          </Route>
             
        </div>
      </Router>
    </AuthProvider>
  );
};

export default App;
