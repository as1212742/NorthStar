/** @format */

import ColumnLayout, { Column } from "aws-northstar/layouts/ColumnLayout";
import Box from "aws-northstar/layouts/Box";
import React, { useContext, useEffect } from "react";
import Card from "aws-northstar/components/Card";
import { useHistory } from "react-router-dom";
import { DataContext } from "../../context/provider/Provider";

const FrontPage = () => {
  const { PageState, Reset } = useContext(DataContext);
  const history = useHistory();

  useEffect(() => {
    Reset();
  }, []);

  const routeChange = (path) => {
    history.push(path);
  };

  const DemoBox = ({ title, subtitle, TextContent, bgcolor, path }) => {
    return (
      <Box
        display="flex"
        width="100%"
        height="300px"
        bgcolor={bgcolor}
        alignItems="center"
        justifyContent="center"
      >
        <Card
          title={title}
          subtitle={subtitle}
          withHover
          onClick={() => routeChange(path)}
        >
          {TextContent}
        </Card>
      </Box>
    );
  };

  return (
    <ColumnLayout>
      <Column key="column1">
        <DemoBox
          title="Fargate"
          subtitle="Calculation for fargate"
          TextContent="Serverless Service"
          bgcolor="grey.100"
          // path={"/"}
        />
      </Column>
      <Column key="column2">
        <DemoBox
          title="eks"
          subtitle="Calculation for eks"
          TextContent="ecs"
          width="500px"
          height="40px"
          bgcolor="grey.200"
          path={"/Pods"}
        />
      </Column>
    </ColumnLayout>
  );
};

export default FrontPage;
