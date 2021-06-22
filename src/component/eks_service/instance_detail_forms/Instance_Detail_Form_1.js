/** @format */

import React from "react";
import Pods_Details from "./Instance_Detail_Form_Sub_Parts/Pods_Details";
import BreadCrumbs from "../../breadcrumbs/BreadCrumbs";
import Pricing_Stratagy from "./Instance_Detail_Form_Sub_Parts/Pricing_Stratagy";
import Pricing_Display from "./Instance_Detail_Form_Sub_Parts/Pricing_Display";
import { HeadingStripe } from "aws-northstar";

const Instance_Detail_Form_1 = () => {
  return (
    <BreadCrumbs>
      <HeadingStripe title="Configure Pods Details" />
      <Pods_Details />
      <Pricing_Stratagy />
      <Pricing_Display />
    </BreadCrumbs>
  );
};

export default Instance_Detail_Form_1;
