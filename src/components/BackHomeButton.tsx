import { Platform, Pressable, StyleSheet, Text, View } from "react-native";

import { useRouter } from "expo-router";

export default function BackHomeButton() {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <Pressable
        onPress={() => router.push("/")}
        hitSlop={10}
        accessibilityRole="button"
        accessibilityLabel="Kembali ke halaman Home"
        accessibilityHint="Tekan untuk kembali ke halaman utama aplikasi"
        style={({ pressed }) => [styles.button, pressed && styles.pressed]}
      >
        <Text style={styles.emoji}>🏠</Text>

        <Text style={styles.text}>Kembali ke Home</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    maxWidth: Platform.OS === "web" ? undefined : 480,
    alignSelf: "center",
    paddingHorizontal: 18,
    paddingTop: 45,
    paddingBottom: 12,
    alignItems: "flex-start",
    zIndex: 10,
    elevation: 5,
  },
  button: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#D6E9FF",
    borderWidth: 1,
    borderColor: "#B8D7F5",
    paddingVertical: 12,
    paddingHorizontal: 16,
    borderRadius: 12,
    minHeight: 44,
  },
  pressed: {
    opacity: 0.7,
  },
  emoji: {
    fontSize: 17,
    marginRight: 8,
  },
  text: {
    color: "#234B78",
    fontSize: 13,
    fontWeight: "bold",
  },
});
