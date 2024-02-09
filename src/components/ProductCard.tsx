import { Image, Text } from "react-native";
import { ProductCardBox } from "../styles/stores.style";
import { ProductCardProps } from "../types/stores";
import { Flex } from "../styles/main.style";
import { View } from "react-native";

const ProductCard = () => {
  return (
    <ProductCardBox>
      <Image
        src="https://placehold.co/60x60.png"
        style={{
          height: 80,
          width: 80,
          borderTopLeftRadius: 5,
          borderBottomLeftRadius: 5,
        }}
      />
      <Flex>
        <View
          style={{
            flexDirection: "row",
          }}
        >
          <Text style={{ fontSize: 14 }}>Nome do produto</Text>
          <Text style={{ color: "#3cae03", marginLeft: 20 }}>R$ 10,00</Text>
        </View>
        <Text
          style={{ fontSize: 10, color: "#868686"}}
          numberOfLines={2}
        >
          jogadô de futibou muíto bon que quai no campu ha cadah sinco minutus
        </Text>
      </Flex>
    </ProductCardBox>
  );
};

export default ProductCard;
