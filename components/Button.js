import { Pressable, StyleSheet, Text } from "react-native";
import { LinearGradient } from "expo-linear-gradient";

export default function Button({ label, onPress }) {
  return (
    <LinearGradient
      colors={["#ff00ff", "#00ffff", "#ff00ff"]}
      style={styles.background}
    >
      <Pressable onPress={onPress} style={styles.button}>
        <Text style={styles.textButton}>{label}</Text>
      </Pressable>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  button: {
    width: 250,
    borderRadius: 5,
    alignItems: "center",
    backgroundColor: "#000000",
    padding: 7,
  },
  textButton: {
    color: "#fff",
    fontSize: 22,
  },
  background: { padding: 5, borderRadius: 5 },
});
