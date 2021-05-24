/** @format */

import FormSection from "aws-northstar/components/FormSection";
import Container from "aws-northstar/layouts/Container";
import React, { useContext, useState } from "react";
import Form from "aws-northstar/components/Form";
import RadioGroup, { RadioButton } from "aws-northstar/components/RadioGroup";
import { Alert, Button, Column, ColumnLayout, Stack } from "aws-northstar";
import KeyValuePair from "aws-northstar/components/KeyValuePair";
import BreadCrumbs from "../../breadcrumbs/BreadCrumbs";
import { DataContext } from "../../../context/provider/Provider";
import { useHistory } from "react-router-dom";

const Instance_Detail_Form_3 = () => {
  const { DataState, SetConfigDetails } = useContext(DataContext);
  const history = useHistory();

  const onSubmit = () => {
    history.push("/EKS/Display");
  };
  const onCancel = () => {
    history.push("/");
  };

  return (
    <BreadCrumbs>
      <Form
        onSubmit={(e) => onSubmit(e)}
        actions={
          <div>
            <Button variant="link" onClick={onCancel}>
              Cancel
            </Button>
            <Button type="submit" variant="primary">
              Submit
            </Button>
          </div>
        }
      >
        <FormSection>
          <Container
            headingVariant="h4"
            title="Instance Details"
            subtitle="Based on the input we provide the best instance match possible"
          >
            <ColumnLayout>
              <Column key="column1">
                <Stack>
                  <KeyValuePair
                    label="Number of Pods"
                    value={DataState.EksDetails.Pods}
                  ></KeyValuePair>
                  <KeyValuePair
                    label="vCPU"
                    value={DataState.EksDetails.CPU}
                  ></KeyValuePair>
                  <KeyValuePair
                    label="Processor Type"
                    value={DataState.EksConfig.Processor.label}
                  ></KeyValuePair>
                </Stack>
              </Column>
              <Column key="column2">
                <Stack>
                  <KeyValuePair
                    label="Storage"
                    value={DataState.EksConfig.Storage.label}
                  ></KeyValuePair>
                  <KeyValuePair
                    label="Memory"
                    value={DataState.EksDetails.Memory}
                  ></KeyValuePair>
                  <KeyValuePair
                    label="Network"
                    value={DataState.EksConfig.Network.label}
                  ></KeyValuePair>
                </Stack>
              </Column>
            </ColumnLayout>
          </Container>

          <Container>
            <Alert
              type="success"
              // header={Instance_Type}
            >
              Instance matches your requirement
            </Alert>
          </Container>

          <Container headingVariant="h4" title="Recommended Instance">
            <RadioGroup
              items={[
                <RadioButton
                  // checked={Instance_Type === "General purpose"}
                  // onChange={onChangeRadio}
                  value="General Purpose"
                >
                  General Purpose
                </RadioButton>,
                <RadioButton
                  // checked={Instance_Type === "Compute optimized"}
                  // onChange={onChangeRadio}
                  value="Compute optimized"
                >
                  Compute optimized
                </RadioButton>,
                <RadioButton
                  // checked={Instance_Type === "Memory optimized"}
                  // onChange={onChangeRadio}
                  value="Memory optimized"
                >
                  Memory optimized
                </RadioButton>,
                <RadioButton
                  // checked={Instance_Type === "Storage optimized"}
                  // onChange={onChangeRadio}
                  value="Storage optimized"
                >
                  Storage optimized
                </RadioButton>,
                <RadioButton
                  // checked={Instance_Type === "GPU instance"}
                  // onChange={onChangeRadio}
                  value="GPU instance"
                >
                  GPU instance
                </RadioButton>,
              ]}
            />
          </Container>
        </FormSection>
      </Form>
    </BreadCrumbs>
  );
};

export default Instance_Detail_Form_3;
