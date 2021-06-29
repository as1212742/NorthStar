/** @format */

import Heading from "aws-northstar/components/Heading";
import React, { useContext, useEffect, useState } from "react";
import { Grid, HelpPanel } from "aws-northstar";
import { DataContext } from "../../../../../Context/Provider/provider";

const Pricing_Display = () => {
  const { DataState } = useContext(DataContext);
  const [data, setdata] = useState({});

  useEffect(() => {
    setdata(DataState.pricingdisplaydata);
  }, [DataState.pricingdisplaydata]);

  const content = (
    <>
      {Object.keys(data).length > 0 ? (
        <Grid>
          <Grid container spacing={3}>
            <Grid item xs={10}>
              <Heading variant="h3">Total Upfront Cost</Heading>
            </Grid>
            <Grid item xs={2}>
              <Heading variant="h3">
                {"totalcostforinstance" in data
                  ? "0"
                  : "price_Quantity" in data.values
                  ? (
                      data.values.price_Quantity *
                      DataState.RecommendationDetails.totalinstancerequired
                    )
                      .toString()
                      .replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,")
                  : "0"}{" "}
                $
              </Heading>
            </Grid>
          </Grid>
          <Grid container spacing={3}>
            <Grid item xs={10}>
              <Heading variant="h3">Total Cost (excluding Upfront)</Heading>
            </Grid>
            <Grid item xs={2}>
              <Heading variant="h3">
                {"totalcostforinstance" in data
                  ? data.totalcostforinstance.toFixed(2)
                  : DataState.DefaultPricing.LeaseContractLength === "1yr"
                  ? (
                      data.values.price_Hrs *
                      24 *
                      365 *
                      DataState.RecommendationDetails.totalinstancerequired
                    )
                      .toFixed(2)
                      .toString()
                      .replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,")
                  : (
                      data.values.price_Hrs *
                      24 *
                      365 *
                      3 *
                      DataState.RecommendationDetails.totalinstancerequired
                    )
                      .toFixed(2)
                      .toString()
                      .replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,")}{" "}
                $
              </Heading>
            </Grid>
          </Grid>
        </Grid>
      ) : (
        <Heading variant="h3">No Estimate to Show</Heading>
      )}
    </>
  );
  return (
    <HelpPanel header="Amazon EC2 estimate">
      {DataState.RecommendationDetails !== undefined ? (
        content
      ) : (
        <Heading>No Estimate to Display</Heading>
      )}
    </HelpPanel>
  );
};

export default Pricing_Display;
