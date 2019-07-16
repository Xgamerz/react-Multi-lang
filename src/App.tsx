import React, { useState } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Search from "./Search"
import { Language } from './models/Resource'

const App: React.FC = () => {

  let [language, setLanguage] = useState<Language>(Language.French);

  return (
    <Router>
      <label>Language : 
        <select className="browser-default custom-select" onChange={(e: any)=>setLanguage(e.target.value)}>
          <option value="fr">Français</option>
          <option value="en">English</option>
          <option value="es">Español</option>
          <option value="gr">Deutsche</option>
          <option value="it">Italiana</option>
          <option value="nl">Nederlands</option>
        </select>
      </label>
      <main className="container">
        <Switch>
            <Route path="/" component={()=> <Search language={language}/>}></Route>
        </Switch>
      </main>
    </Router>
  );
}

export default App;
