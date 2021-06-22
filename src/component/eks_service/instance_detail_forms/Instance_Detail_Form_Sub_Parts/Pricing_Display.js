/** @format */

import { BrowserRouter } from "react-router-dom";
import Link from "aws-northstar/components/Link";
import Text from "aws-northstar/components/Text";
import Heading from "aws-northstar/components/Heading";
import React from "react";
import { HelpPanel } from "aws-northstar";

const Pricing_Display = () => {
  const content = (
    <>
      <Text variant="p">
        Amazon Elastic Block Storage (EBS) pricing (monthly)
      </Text>
      <Text variant="p">
        Amazon EC2 Instance Savings Plans instances (monthly)
      </Text>
      <Heading variant="h4">Total monthly cost:</Heading>
    </>
  );
  return <HelpPanel header="Amazon EC2 estimate">{content}</HelpPanel>;
};

export default Pricing_Display;
