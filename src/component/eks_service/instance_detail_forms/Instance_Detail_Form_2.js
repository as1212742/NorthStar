/** @format */

import FormSection from "aws-northstar/components/FormSection";
import Container from "aws-northstar/layouts/Container";
import React, { useContext, useEffect, useState } from "react";
import Form from "aws-northstar/components/Form";
import Button from "aws-northstar/components/Button";
import Select from "aws-northstar/components/Select";
import EBSstoragetypes from "../../../Data/EBSstoragetypes";
import PROtypes from "../../../Data/ProcessorType";
import BreadCrumbs from "../../breadcrumbs/BreadCrumbs";
import { DataContext } from "../../../context/provider/Provider";
import { useHistory } from "react-router-dom";

const Instance_Detail_Form_2 = () => {
  const { DataState, SetConfigDetails } = useContext(DataContext);
  const [EBSSelectedOption, EBSSetSeletedOption] = useState();
  const [ProcessorSelectedOption, ProcessorSetSeletedOption] = useState();
  const [NetworkSelectedOption, NetworkSetSeletedOption] = useState();
  const history = useHistory();

  useEffect(() => {
    EBSSetSeletedOption(DataState.EksConfig.Storage);
    ProcessorSetSeletedOption(DataState.EksConfig.Processor);
    NetworkSetSeletedOption(DataState.EksConfig.Network);
  }, [DataState.EksConfig]);

  const onChangeEBS = (e) => {
    EBSSetSeletedOption(
      EBSstoragetypes.find((ebs) => ebs.value === e.target.value)
    );
    console.log(EBSSelectedOption);
  };

  const onChangeProcessor = (event) => {
    ProcessorSetSeletedOption(
      PROtypes.find((pro) => pro.value === event.target.value)
    );
  };

  const onChangeNetwork = (event) => {
    NetworkSetSeletedOption(
      PROtypes.find((pro) => pro.value === event.target.value)
    );
  };

  const onNext = (e) => {
    e.preventDefault();

    const data = {
      Storage: EBSSelectedOption,
      Processor: ProcessorSelectedOption,
      Network: NetworkSelectedOption,
    };

    SetConfigDetails(data);

    history.push("/Pods/Config/Recommendation");
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
          <Container headingVariant="h4" title="Select Storage Type">
            <Select
              placeholder="Choose an option"
              options={EBSstoragetypes}
              selectedOption={EBSSelectedOption}
              onChange={onChangeEBS}
              required
            />
          </Container>
          <Container headingVariant="h4" title="Select Processor Type">
            <Select
              placeholder="Choose an option"
              options={PROtypes}
              selectedOption={ProcessorSelectedOption}
              onChange={onChangeProcessor}
            />
          </Container>
          <Container headingVariant="h4" title="Select Network Performance">
            <Select
              placeholder="Choose an option"
              options={PROtypes}
              selectedOption={NetworkSelectedOption}
              onChange={onChangeNetwork}
            />
          </Container>
        </FormSection>
      </Form>
    </BreadCrumbs>
  );
};

export default Instance_Detail_Form_2;
