/** @format */

import ColumnLayout, { Column } from "aws-northstar/layouts/ColumnLayout";
import Box from "aws-northstar/layouts/Box";
import React, { useContext, useEffect } from "react";
import Card from "aws-northstar/components/Card";
import { useHistory } from "react-router-dom";
import { DataContext } from "../../context/provider/Provider";
import { Grid } from "aws-northstar";
import axios from "axios";
import "./FrontPage.css";
import ecs_image from "../../images/ecs.png";
import eks_image from "../../images/eks.png";

const FrontPage = () => {
  const { DataState, Reset, SetHelppanel } = useContext(DataContext);
  const history = useHistory();

  const Instance_Details_Fetch = async (data) => {
    const options = {
      url: "https://impxwqtym6.execute-api.us-east-1.amazonaws.com/DEV/helppanel-instance-details",
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json;charset=UTF-8",
      },
      data: JSON.stringify(data),
    };

    axios(options)
      .then((response) => {
        SetHelppanel(JSON.parse(response.data));
      })
      .then((err) => console.log(err));
  };

  useEffect(() => {
    Reset();
    const data = {
      Type: "EKS",
    };
    Instance_Details_Fetch(data);
  }, []);

  const routeChange = (path) => {
    history.push(path);
  };

  const DemoBox = () => {
    return (
      <>
        <div className="card-container">
          <div className="eks-col eks-card" onClick={() => routeChange("")}>
            <h2 className="card-heading">ECS</h2>
            <div className="icon-wrapper">
              <img className="icon" src={ecs_image} alt="..." />
            </div>
            <p className="eks-card-paragraph">price based on task size</p>
            <p className="eks-card-paragraph">Require netowork modal</p>
            <p className="eks-card-paragraph">
              AWS- manageinfra structure, No amazon EC2 instence
            </p>
          </div>
          <div
            className="eks-col eks-card"
            onClick={() => routeChange("/Pods")}
          >
            <h2 className="card-heading">EKS</h2>
            <div className="icon-wrapper">
              <img className="icon" src={eks_image} alt="..." />
            </div>
            <h2 className="eks-card-paragraph">
              Calculate number of Instances required for running Pods
            </h2>
            <h3 className="eks-card-paragraph">
              Recommendation of Instances Provided
            </h3>
            <h3 className="eks-card-paragraph">
              You can override the Recommended Settings
            </h3>
          </div>
        </div>
      </>
    );
  };

  return <DemoBox />;
};

export default FrontPage;
