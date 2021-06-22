/** @format */

import React from "react";
import ColumnLayout, { Column } from "aws-northstar/layouts/ColumnLayout";
import Box from "aws-northstar/layouts/Box";
import "./Display_Recommendation.css";
import { Heading } from "aws-northstar";
import { Container } from "reactstrap";

const Display_Recommendation = () => {
  return (
    <Container className="Result-Box-Container">
      <Heading variant="h5">
        Based on your inputs, this is the lowest-cost EC2 instance:
      </Heading>
      <Box className="Result-Box">
        <Heading variant="h2" className="Result-Box-Heading">
          t3.xlarge
        </Heading>
        <ColumnLayout>
          <Heading variant="h5">Heading Level 2</Heading>
          <Heading variant="h5">Heading Level 2</Heading>
          <Heading variant="h5">Heading Level 2</Heading>
        </ColumnLayout>
        <ColumnLayout>
          <Heading variant="h5">Heading Level 2</Heading>
          <Heading variant="h5">Heading Level 2</Heading>
          <Heading variant="h5">Heading Level 2</Heading>
        </ColumnLayout>
        <ColumnLayout>
          <Heading variant="h5">Heading Level 2</Heading>
          <Heading variant="h5">Heading Level 2</Heading>
          <Heading variant="h5">Heading Level 2</Heading>
        </ColumnLayout>
      </Box>
    </Container>
  );
};

export default Display_Recommendation;
