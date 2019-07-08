import React from 'react';
import { BrowserRouter as Router, Route} from "react-router-dom";
import './App.css';

//components
import Splash from './components/Splash/Splash';
import Landing from './components/Landing/Landing';
import Dashboard from './components/Dashboard/Dashboard';
import AboutUs from './components/AboutUs/AboutUs';
import Targets from './components/Targets/Targets';
import Billing from './components/Billing/Billing';
import Reports from './components/Reports/Reports';
import AccountSettings from './components/AccountSettings/AccountSettings';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';




function App() {
  return (
    <div className="App">    
                     

      <Router>
        <div>
          <Route path="/app" component={Header} /> 
          <Route path="/" exact component={Splash} />
          <Route path="/login" exact component={Landing} />
          <Route path="/app/home" exact component={Dashboard} />
          <Route path="/app/reports" exact component={Reports} />
          <Route path="/app/targets" exact component={Targets} />
          <Route path="/app/billing" exact component={Billing} />
          <Route path="/app/settings" exact component={AccountSettings} />
          <Route path="/app/aboutus" exact component={AboutUs} />
          <Route path="/app" component={Footer} />
        </div>
      </Router>
    </div>
  );
}

export default App;
