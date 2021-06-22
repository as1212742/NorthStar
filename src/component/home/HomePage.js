/** @format */

import { useContext, useEffect, useState } from "react";
import AppLayout from "aws-northstar/layouts/AppLayout";
import SideNavigation, {
  SideNavigationItemType,
} from "aws-northstar/components/SideNavigation";
import Badge from "aws-northstar/components/Badge";
import Link from "aws-northstar/components/Link";
import Text from "aws-northstar/components/Text";
import Heading from "aws-northstar/components/Heading";
import Drop_Down_Header from "./sub_component_homepage/Drop_Down_Header";
import header from "./sub_component_homepage/Header";
import navigation from "./sub_component_homepage/Navigation";
import { DataContext } from "../../context/provider/Provider";
import moduleName from "../loading_page/Loading";
import helpPanel from "./sub_component_homepage/HelpPanel";
import Loading from "../loading_page/Loading";

const App = (props) => {
  const [OnLoading, setOnLoading] = useState(0);
  const { DataState } = useContext(DataContext);

  return OnLoading ? (
    <Loading />
  ) : (
    <AppLayout header={header} navigation={navigation} helpPanel={helpPanel}>
      <Drop_Down_Header />
      {props.children}
    </AppLayout>
  );
};

export default App;
