import { View, Text, ScrollView } from "react-native";
import { Container, Flex } from "../../styles/main.style";
import { Link } from "expo-router";
import { StoreCard } from "../../components/storeCard";
import { ProductCardBox } from "../../styles/stores.style";
import React from "react";
import ProductCard from "../../components/ProductCard";

export default function MainPage() {
  return (
    <Container>
      <Flex justifyContent="space-between" style={{ flexDirection: "row" }}>
        <Text>Lojas</Text>
        <Link href="/main/stores" style={{ color: "#b30000" }}>
          ver-lojas
        </Link>
      </Flex>
      <Flex
        style={{ flexDirection: "row" }}
        flexWrap="wrap"
        paddingTop={20}
        rowGap={5}
      >
        <StoreCard />
        <StoreCard />
        <StoreCard />
        <StoreCard />
      </Flex>
      <Flex
        justifyContent="space-between"
        style={{ flexDirection: "row" }}
        paddingTop={20}
      >
        <Text>Lanches</Text>
        <Link href="/main/products" style={{ color: "#b30000" }}>
          Ver-Lanches
        </Link>
      </Flex>
      <Flex padding={20} gap={5}>
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
      </Flex>
    </Container>
  );
}
