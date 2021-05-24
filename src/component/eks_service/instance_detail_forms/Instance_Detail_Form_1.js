/** @format */

import FormSection from "aws-northstar/components/FormSection";
import FormField from "aws-northstar/components/FormField";
import Input from "aws-northstar/components/Input";
import React, { useContext, useEffect, useState } from "react";
import Form from "aws-northstar/components/Form";
import Button from "aws-northstar/components/Button";
import BreadCrumbs from "../../breadcrumbs/BreadCrumbs";
import { useHistory } from "react-router-dom";
import { DataContext } from "../../../context/provider/Provider";

const Instance_Detail_Form_1 = () => {
  const history = useHistory();
  const [Pods, setPods] = useState();
  const [CPU, setCPU] = useState();
  const [Memory, setMemory] = useState();
  const { DataState, SetInstanceDetails } = useContext(DataContext);

  useEffect(() => {
    setPods(DataState.EksDetails.Pods);
    setCPU(DataState.EksDetails.CPU);
    setMemory(DataState.EksDetails.Memory);
  }, [DataState]);

  const onNext = (e) => {
    e.preventDefault();

    const data = {
      Pods: Pods,
      CPU: CPU,
      Memory: Memory,
    };

    SetInstanceDetails(data);
    history.push("/Pods/Config");
  };

  const onCancel = () => {
    history.push("/");
  };

  return (
    <BreadCrumbs>
      <Form
        onSubmit={(e) => onNext(e)}
        actions={
          <div>
            <Button variant="link" onClick={onCancel}>
              Cancel
            </Button>
            <Button type="submit" variant="primary">
              Next
            </Button>
          </div>
        }
      >
        <FormSection header="EKS Details">
          <FormField
            label="Number of Pods"
            hintText="Input constraint goes here. e.g. 1,000"
            controlId="formFieldId1"
          >
            <Input
              type="text"
              controlId="formFieldId1"
              value={Pods}
              onChange={(e) => setPods(e)}
              required={true}
            />
          </FormField>

          <FormField
            label="CPU"
            hintText="Input constraint goes here. e.g. 24"
            controlId="formFieldId2"
          >
            <Input
              type="text"
              controlId="formFieldId2"
              value={CPU}
              onChange={(e) => setCPU(e)}
              required={true}
            />
          </FormField>

          <FormField
            label="Memory (GiB)"
            hintText="Input constraint goes here. e.g. 100 GiB"
            controlId="formFieldId3"
          >
            <Input
              type="text"
              controlId="formFieldId3"
              value={Memory}
              onChange={(e) => setMemory(e)}
              required={true}
            />
          </FormField>
        </FormSection>
      </Form>
    </BreadCrumbs>
  );
};

export default Instance_Detail_Form_1;
