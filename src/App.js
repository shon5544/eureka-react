import React from "react";
import { HashRouter, Route } from "react-router-dom";
import ClubHome from "./router/Home";
import ClubInform from "./router/ClubInform";
import JoinWay from "./router/JoinWay";
import prosum from "./router/prosum";
import mechasum from "./router/mechasum";
import chemisum from "./router/chemisum";

function App() {
  return (
    <HashRouter>
      <Route path="/" exact={true} component={ClubHome} />
      <Route path="/clubInfo" component={ClubInform} />
      <Route path="/joinWay" component={JoinWay} />
      <Route path="/programming" component={prosum} />
      <Route path="/mechanical" component={mechasum} />
      <Route path="/chemical" component={chemisum} />
    </HashRouter>
  );
}

export default App;
