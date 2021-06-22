/** @format */

import { Inline, Select } from "aws-northstar";
import ButtonDropdown from "aws-northstar/components/ButtonDropdown";
import Container from "aws-northstar/layouts/Container";
import React, { useContext, useEffect, useState } from "react";
import { Label } from "reactstrap";
import region from "../../../Data/RegionData";
import { DataContext } from "../../../context/provider/Provider";
import Button from "aws-northstar/components/Button";
import { useHistory } from "react-router-dom";

const DropdownHeader = () => {
  const history = useHistory();
  const { DataState, SetRegion } = useContext(DataContext);
  const [selectedOption, setSeletedOption] = useState();

  useEffect(() => {
    selectedOption && SetRegion(selectedOption.label);
  }, [selectedOption, DataState.Region.region]);

  const onChange = (event) => {
    const val = region.find((reg) => reg.value === event.target.value);
    setSeletedOption(val);
    history.push("/");
  };

  const onClickHome = () => {
    history.push("/");
  };

  return (
    <Container headingVariant="h4" title="Select Region">
      <Inline>
        <Select
          placeholder={DataState.Region.region}
          options={region}
          selectedOption={selectedOption}
          onChange={onChange}
        />
        <Button onClick={onClickHome}>Home</Button>
      </Inline>
    </Container>
  );
};

export default DropdownHeader;
