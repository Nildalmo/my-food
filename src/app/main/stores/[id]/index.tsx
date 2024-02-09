import { usePathname } from "expo-router";
import { View, Text, Image, ScrollView, RefreshControl } from "react-native";
import { Flex } from "../../../../styles/main.style";
import Icon from "react-native-vector-icons/FontAwesome";
import { useState, useCallback } from "react";
import { StoreCard } from "../../../../components/storeCard";
import ProductCard from "../../../../components/ProductCard";

export default function Store() {
  const path = usePathname();

  const [refreshing, setRefreshing] = useState(false);

  const onRefresh = useCallback(() => {
    setRefreshing(true);
    setTimeout(() => {
      setRefreshing(false);
    }, 2000);
  }, []);

  return (
    <ScrollView
      refreshControl={
        <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
      }
    >
      <Image src="https://placehold.co/400x140/png" style={{ height: 140 }} />
      <Flex
        flexDirection="row"
        alignItems="center"
        gap={10}
        paddingLeft={20}
        paddingRight={20}
        paddingTop={20}
      >
        <Image
          src="https://placehold.co/60x60/png"
          style={{ height: 60, width: 60, borderRadius: 50 }}
        />
        <View>
          <Text>Nome da Lojas</Text>
          <Text>
            5 <Icon color="#f0c20a" name="star" />
          </Text>
          <Text style={{ fontSize: 10, color: "#868686" }}>30-45</Text>
        </View>
      </Flex>
      <Flex paddingTop={20} paddingLeft={20}>
        <Text>lanches</Text>
      </Flex>
      <Flex paddingTop={20} rowGap={5} paddingLeft={20} paddingRight={20}>
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
      </Flex>
    </ScrollView>
  );
}
