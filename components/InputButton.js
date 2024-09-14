import { StyleSheet, TextInput } from "react-native";
import { LinearGradient } from "expo-linear-gradient";

export default function InputButton({ state }) {
  return (
    <LinearGradient
      colors={["#ff00ff", "#00ffff", "#ff00ff"]}
      style={style.background}
    >
      <TextInput
        onChangeText={(inpNumber) => state(inpNumber)}
        style={style.input}
        keyboardType="numeric"
        placeholder="00"
        placeholderTextColor="#fff"
      />
    </LinearGradient>
  );
}

const style = StyleSheet.create({
  input: {
    textAlign: "center",
    borderRadius: 5,
    width: 200,
    height: 50,
    backgroundColor: "#0d0d0d",
    color: "#fff",
  },
  background: { padding: 5, borderRadius: 5 },
});
