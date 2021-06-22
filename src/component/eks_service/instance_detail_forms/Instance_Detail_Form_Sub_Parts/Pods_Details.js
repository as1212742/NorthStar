/** @format */

import Form from "aws-northstar/components/Form";
import Button from "aws-northstar/components/Button";
import Checkbox from "aws-northstar/components/Checkbox";
import Container from "aws-northstar/layouts/Container";
import FormField from "aws-northstar/components/FormField";
import FormGroup from "aws-northstar/components/FormGroup";
import FormSection from "aws-northstar/components/FormSection";
import Input from "aws-northstar/components/Input";
import Select from "aws-northstar/components/Select";
import Textarea from "aws-northstar/components/Textarea";
import Toggle from "aws-northstar/components/Toggle";
import React from "react";
import Display_Recommendation from "./Display_Recommendation.js";
import "./Pods_Details.css";
import { ColumnLayout, Inline } from "aws-northstar";

const EC2_Details = () => {
  return (
    <Form className="Pods_Form_Section">
      <FormSection header="Pods specifications">
        <FormField
          label="Operating system"
          description="Choose which operating system you'd like to run Amazon EC2 instances on."
          controlId="formFieldId3"
          stretch={true}
        >
          <Select
            placeholder="Choose an option"
            controlId="formFieldId3"
            options={[
              { label: "Option 1", value: "1" },
              { label: "Option 2", value: "2" },
              { label: "Option 3", value: "3" },
            ]}
          />
        </FormField>
        <ColumnLayout>
          <FormField
            label="vCPUs"
            description="Enter Pod vCPUs Requirement"
            hintText="Input constraint goes here. e.g. 1,000 characters maximum"
            controlId="formFieldId1"
            stretch={true}
          >
            <Input type="text" controlId="formFieldId1" />
          </FormField>
          <FormField
            label="Memory(GiB)"
            description="Enter Pod Memory Requirement"
            hintText="Input constraint goes here. e.g. 1,000 characters maximum"
            controlId="formFieldId1"
            stretch={true}
          >
            <Input type="text" controlId="formFieldId1" />
          </FormField>
          <FormField
            label="GPU"
            description="Enter Pod GPU Requirement (Optional)"
            hintText="Input constraint goes here. e.g. 1,000 characters maximum"
            controlId="formFieldId1"
            stretch={true}
          >
            <Input type="text" controlId="formFieldId1" />
          </FormField>
        </ColumnLayout>
        <Display_Recommendation />
      </FormSection>
    </Form>
  );
};

export default EC2_Details;
