/** @format */

import { useContext, useState } from "react";
import AppLayout from "aws-northstar/layouts/AppLayout";
import SideNavigation, {
  SideNavigationItemType,
} from "aws-northstar/components/SideNavigation";
import Badge from "aws-northstar/components/Badge";
import HelpPanel from "aws-northstar/components/HelpPanel";
import Link from "aws-northstar/components/Link";
import Text from "aws-northstar/components/Text";
import Heading from "aws-northstar/components/Heading";
import Drop_Down_Header from "./sub_component_homepage/Drop_Down_Header";
import header from "./sub_component_homepage/Header";
import { DataContext } from "../../context/provider/Provider";

const App = (props) => {
  const { DataState, SetInstanceDetails } = useContext(DataContext);

  return (
    <AppLayout header={header}>
      <Drop_Down_Header />
      {props.children}
    </AppLayout>
  );
};

export default App;
