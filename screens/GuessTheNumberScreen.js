import React, { useState } from "react";
import { View, Text, Pressable, StyleSheet } from "react-native";
import { LinearGradient } from "expo-linear-gradient";

import InputButton from "../components/InputButton";

const GuessTheNumberScreen = ({ navigation, route }) => {
  const [inputNumber, setInputNumber] = useState("00");
  const { styles } = route.params;

  return (
    <View style={[styles.container, { justifyContent: "center" }]}>
      <View style={moreStyles.row}>
        <InputButton state={setInputNumber} />
        <LinearGradient
          colors={["#ff00ff", "#00ffff", "#ff00ff"]}
          style={styles.background}
        >
          <Pressable
            style={moreStyles.box}
            onPress={() =>
              navigation.navigate("HomeScreen", { userNumber: inputNumber })
            }
          >
            <Text style={moreStyles.text}>Ok</Text>
          </Pressable>
        </LinearGradient>
      </View>
    </View>
  );
};

const moreStyles = StyleSheet.create({
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  box: {
    backgroundColor: "#0d0d0d",
    height: 50,
    width: 50,
    borderRadius: 5,
    justifyContent: "center",
    alignItems: "center",
    margin: 5,
  },
  background: { padding: 5, borderRadius: 5 },
  text: {
    color: "#fff",
  },
});

export default GuessTheNumberScreen;
