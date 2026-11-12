import { Pressable, StyleSheet, Text, View } from "react-native";

type ScreenStateProps = {
  type: "loading" | "error" | "empty";
  message?: string;
  onRetry?: () => void;
};

export default function ScreenState({
  type,
  message,
  onRetry,
}: ScreenStateProps) {
  const content = {
    loading: {
      emoji: "⏳",
      title: "Sedang Memuat...",
      description: message || "Mohon tunggu sebentar ya.",
    },
    error: {
      emoji: "⚠️",
      title: "Terjadi Kesalahan",
      description: message || "Data gagal dimuat. Silakan coba lagi.",
    },
    empty: {
      emoji: "📂",
      title: "Belum Ada Data",
      description: message || "Belum ada data yang tersedia.",
    },
  };

  const current = content[type];

  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <Text style={styles.emoji}>{current.emoji}</Text>

        <Text style={styles.title}>{current.title}</Text>

        <Text style={styles.description}>{current.description}</Text>

        {type === "error" && onRetry && (
          <Pressable
            style={styles.button}
            onPress={onRetry}
            accessibilityRole="button"
            accessibilityLabel="Coba muat ulang"
          >
            <Text style={styles.buttonText}>Coba Lagi ↻</Text>
          </Pressable>
        )}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
    backgroundColor: "#EAF3FF",
  },
  card: {
    width: "100%",
    maxWidth: 350,
    backgroundColor: "#FFFFFF",
    padding: 25,
    borderRadius: 20,
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#D5E7FA",
    elevation: 3,
  },
  emoji: {
    fontSize: 42,
    marginBottom: 15,
  },
  title: {
    color: "#234B78",
    fontSize: 19,
    fontWeight: "bold",
    marginBottom: 8,
  },
  description: {
    color: "#66809D",
    fontSize: 13,
    textAlign: "center",
    lineHeight: 21,
  },
  button: {
    backgroundColor: "#609BD5",
    paddingVertical: 11,
    paddingHorizontal: 25,
    borderRadius: 12,
    marginTop: 18,
  },
  buttonText: {
    color: "#FFFFFF",
    fontSize: 13,
    fontWeight: "bold",
  },
});
