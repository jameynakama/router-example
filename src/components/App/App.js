import React from 'react'
import {
  BrowserRouter,
  Switch,
  Route
} from 'react-router-dom'

import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import Content from "../Content/Content";
import Home from "../Home/Home";
import FourOhFour from "../FourOhFour/FourOhFour";
import Special from "../SpecialContent/Special";

function App() {
  return (
    <BrowserRouter>
      <Header/>
      <hr/>
      <Switch>
        <Route exact path="/things/:thingName">
          <Content title="things page"/>
        </Route>
        <Route exact path="/special-page">
          <Special/>
        </Route>
        <Route exact path="/">
          <Home/>
        </Route>
        <Route>
          <FourOhFour/>
        </Route>
      </Switch>
      <hr/>
      <Footer/>
    </BrowserRouter>
  );
}

export default App;
