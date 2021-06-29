/** @format */

import { ExpandableSection, Heading, Stack, Text } from "aws-northstar";
import { DataContext } from "../../../../../Context/Provider/provider";
import React, { useContext } from "react";

const Instance_Pods_Calculation = () => {
  const { DataState } = useContext(DataContext);

  const temp = DataState.RecommendationDetails;

  return (
    <ExpandableSection header="Show Calculations">
      {Object.keys(temp).length !== 0 ? (
        <Stack spacing="xs">
          {DataState.RecommendationDetails.GPU != "NA" ? (
            <Text variant="span">
              Pods Possible to run on per {temp.instanceName} instance based on
              GPU, Pods_Num_GPU = Instance GPU / Pods GPU = {temp.GPU} /{" "}
              {temp.podsgpu} = {temp.max_gpu} Pods
            </Text>
          ) : null}
          <Text variant="span">
            Pods Possible to run on per {temp.instanceName} instance based on
            vCPU, Pods_Num_vCPU = Instance vCPU / Pods vCPU = {temp.ins_vcpu} /{" "}
            {temp.vCPU} = {temp.max_cpu} Pods
          </Text>
          <Text variant="span">
            Pods Possible to run on per {temp.instanceName} instance based on
            Memory, Pods_Num_Memory = Instance Memory / Pods Memory ={" "}
            {temp.ins_mem} / {temp.memory} = {temp.max_memory} Pods
          </Text>
          <Text variant="span">
            Pods Possible to run on per {temp.instanceName} instance based on
            ENI, Pods_Num_ENI = ( Instance ENI No * (Instance ENI IP - 1 )) + 2
            = ({temp.eni_ip}-1) * {temp.eni_no} + 2 = {temp.max_eni} Pods
          </Text>
          {DataState.RecommendationDetails.GPU != "NA" ? (
            <Text variant="span">
              Pods Possible to run on per {temp.instanceName} based on the above
              4 conditions is, Pods_No_Ins = min(Pods_Num_GPU, Pods_Num_vCPU,
              Pods_Num_Memory, Pods_Num_ENI ) = min({temp.max_gpu},{" "}
              {temp.max_cpu}, {temp.max_memory}, {temp.max_eni} ) ={" "}
              {temp.podsperinstance} Pods
            </Text>
          ) : (
            <Text variant="span">
              Pods Possible to run on per {temp.instanceName} based on the above
              3 conditions is, Pods_No_Ins = min( Pods_Num_vCPU,
              Pods_Num_Memory, Pods_Num_ENI ) = min( {temp.max_cpu},{" "}
              {temp.max_memory}, {temp.max_eni} ) = {temp.podsperinstance} Pods
            </Text>
          )}
          <Text variant="span">
            Total {temp.instanceName} needed for {temp.Pods} Pods, Ins_Total_No
            = Total Pods /Pods_No_Ins = {temp.Pods} / {temp.podsperinstance} ={" "}
            {temp.totalinstancerequired} instance
          </Text>
          <Heading variant="h4">
            Total {temp.instanceName} instance Price, Ins_Total_Price = Total
            Ins_Total_No * Instance Price = {temp.totalinstancerequired} *{" "}
            {temp.price} = {temp.totalcostforinstance}
          </Heading>
        </Stack>
      ) : null}
    </ExpandableSection>
  );
};

export default Instance_Pods_Calculation;
