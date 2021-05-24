/** @format */

import { Select } from "aws-northstar";
import ButtonDropdown from "aws-northstar/components/ButtonDropdown";
import Container from "aws-northstar/layouts/Container";
import React, { useContext, useEffect, useState } from "react";
import { Label } from "reactstrap";
import region from "../../../Data/RegionData";
import { DataContext } from "../../../context/provider/Provider";

const DropdownHeader = () => {
  const { DataState, SetRegion } = useContext(DataContext);
  const [selectedOption, setSeletedOption] = useState();

  useEffect(() => {
    selectedOption && SetRegion(selectedOption.label);
  }, [selectedOption, DataState.Region.region]);

  const onChange = (event) => {
    const val = region.find((reg) => reg.value === event.target.value);
    setSeletedOption(val);
  };

  return (
    <Container headingVariant="h4" title="Select Region">
      <Select
        placeholder={DataState.Region.region}
        options={region}
        selectedOption={selectedOption}
        onChange={onChange}
      />
    </Container>
  );
};

export default DropdownHeader;
