/** @format */

import React from "react";
import { BrowserRouter, Switch, Route, Router } from "react-router-dom";
import FrontPage from "../Components/FrontPage/frontpage";
import Pods_Form from "../Components/Eks-Service/Forms/pods-detail-form";

export default [
  <Route exact path="/" component={FrontPage} />,
  <Route exact path="/Elastic-Kubernetes-Service" component={Pods_Form} />,
];
