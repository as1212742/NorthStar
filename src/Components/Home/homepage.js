/** @format */

import { useContext, useEffect, useState } from "react";
import AppLayout from "aws-northstar/layouts/AppLayout";
import header from "./Sub-Components/header";
import navigation from "./Sub-Components/side_navigation";
import { DataContext } from "../../Context/Provider/provider";
import helpPanel from "./Sub-Components/helppanel";

const App = (props) => {
  const { DataState } = useContext(DataContext);

  return (
    <AppLayout header={header} navigation={navigation} helpPanel={helpPanel}>
      {props.children}
    </AppLayout>
  );
};

export default App;