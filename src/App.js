import './App.css';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Home from './pages';
import AchievementsPage from './pages/achievements';
import { LightThemeContext } from './LightThemeContext';
import React, {useState} from 'react';

function App() {
  const [lightTheme, setLightTheme] = useState(false);

  return (
    <Router>
      <Switch>
        <LightThemeContext.Provider value={{lightTheme, setLightTheme}}>
          <Route path="/" component={Home} exact/>
          <Route path="/achievements" component={AchievementsPage} exact/>
        </LightThemeContext.Provider>
      </Switch>
    </Router>
  );
}

export default App;
