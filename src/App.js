/** @format */

import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { DataProvider } from "./context/provider/Provider";
import Home from "./component/home/HomePage";
import FrontPage from "./component/entrypoint/FrontPage";
import Instance_Form_1 from "./component/eks_service/instance_detail_forms/Instance_Detail_Form_1";
import Instance_Form_2 from "./component/eks_service/instance_detail_forms/Instance_Detail_Form_2";
import Instance_Form_3 from "./component/eks_service/instance_detail_forms/Instance_Detail_Form_3";
import Instance_Detail_1 from "./component/eks_service/display_instance_detail/Display_Details_1";

const Main = () => {
  return (
    <DataProvider>
      <BrowserRouter>
        <Home>
          <Switch>
            <Route exact path="/" component={FrontPage} />
            <Route exact path="/Pods" component={Instance_Form_1} />
            <Route exact path="/Pods/Config" component={Instance_Form_2} />
            <Route
              exact
              path="/Pods/Config/Recommendation"
              component={Instance_Form_3}
            />
            <Route exact path="/EKS/Display" component={Instance_Detail_1} />
          </Switch>
        </Home>
      </BrowserRouter>
    </DataProvider>
  );
};

export default Main;
