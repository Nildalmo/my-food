import React from "react";
import { StoreCard } from "../../../components/storeCard";
import { Flex } from "../../../styles/main.style";
import { ScrollView } from "react-native";

export default function Stores() {
  return (
    <ScrollView>
      <Flex gap={5} paddingTop={20} paddingHorizontal={10} paddingRight={10}>
        <StoreCard />
        <StoreCard />
        <StoreCard />
        <StoreCard />
        <StoreCard />
        <StoreCard />
        <StoreCard />
        <StoreCard />
        <StoreCard />
      </Flex>
    </ScrollView>
  );
}
