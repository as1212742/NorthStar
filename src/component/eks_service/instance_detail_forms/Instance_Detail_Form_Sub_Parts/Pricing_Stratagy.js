/** @format */

import { ColumnLayout, Heading, Inline } from "aws-northstar";
import RadioGroup, { RadioButton } from "aws-northstar/components/RadioGroup";
import Container from "aws-northstar/layouts/Container";
import React from "react";

const Pricing_Stratagy = () => {
  return (
    <Container headingVariant="h4" title="Pricing strategy">
      <ColumnLayout>
        <Heading variant="h4">Pricing model</Heading>
        <Heading variant="h4">Reservation term</Heading>
        <Heading variant="h4">Payment options</Heading>
      </ColumnLayout>

      <ColumnLayout>
        <RadioGroup
          items={[
            <RadioButton value="one">EC2 Instance Savings Plans</RadioButton>,
            <RadioButton value="two">Compute Savings Plans</RadioButton>,
            <RadioButton value="three">
              Standard Reserved Instances
            </RadioButton>,
            <RadioButton value="three">
              Convertible Reserved Instances
            </RadioButton>,
            <RadioButton value="three">On-Demand Instances </RadioButton>,
          ]}
        />
        <RadioGroup
          items={[
            <RadioButton value="one">1 Year</RadioButton>,
            <RadioButton value="two">3 Year</RadioButton>,
          ]}
        />
        <RadioGroup
          items={[
            <RadioButton value="one">No Upfront</RadioButton>,
            <RadioButton value="two">Partial Upfront</RadioButton>,
            <RadioButton value="three">All Upfront</RadioButton>,
          ]}
        />
      </ColumnLayout>
    </Container>
  );
};

export default Pricing_Stratagy;
