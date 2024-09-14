import { View } from "react-native";
import CapybaraImage from "../components/CapybaraImage";
import Button from "../components/Button";

export default function LoserScreen({ navigation, styles, imgPath }) {
  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <CapybaraImage imageSrc={imgPath}></CapybaraImage>
      </View>
      <View style={styles.footContainer}>
        <Button
          label="Você Perdeu"
          onPress={() => navigation.navigate("HomeScreen")}
        ></Button>
      </View>
    </View>
  );
}
