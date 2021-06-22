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

const EC2_Details = () => {
  return (
    <Form
      header="Form with some controls"
      description="You can view source to see how components are put together"
      actions={
        <div>
          <Button variant="link">Cancel</Button>
          <Button variant="primary">Submit</Button>
        </div>
      }
    >
      <FormSection header="Section header">
        <FormField
          label="Example text input"
          hintText="Input constraint goes here. e.g. 1,000 characters maximum"
          controlId="formFieldId1"
        >
          <Input type="text" controlId="formFieldId1" />
        </FormField>
        <FormField
          label="Example text input"
          hintText="Input constraint goes here. e.g. 1,000 characters maximum"
          controlId="formFieldId1"
        >
          <Input type="text" controlId="formFieldId1" />
        </FormField>
        <FormField
          label="Example text input"
          hintText="Input constraint goes here. e.g. 1,000 characters maximum"
          controlId="formFieldId1"
        >
          <Input type="text" controlId="formFieldId1" />
        </FormField>
        <FormField
          label="Example text input"
          hintText="Input constraint goes here. e.g. 1,000 characters maximum"
          controlId="formFieldId1"
        >
          <Input type="text" controlId="formFieldId1" />
        </FormField>
      </FormSection>
    </Form>
  );
};

export default EC2_Details;
