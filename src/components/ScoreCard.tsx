import { StyleSheet, Text, View } from "react-native";

type ScoreCardProps = {
  title: string;
  value: string | number;
  subtitle: string;
  icon: string;
};

export default function ScoreCard({
  title,
  value,
  subtitle,
  icon,
}: ScoreCardProps) {
  return (
    <View style={styles.card}>
      <View style={styles.header}>
        <Text style={styles.icon}>{icon}</Text>
        <Text style={styles.title}>{title}</Text>
      </View>

      <Text style={styles.value}>{value}</Text>

      <Text style={styles.subtitle}>{subtitle}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    flex: 1,
    backgroundColor: "#FFFFFF",
    padding: 16,
    borderRadius: 18,
    borderWidth: 1,
    borderColor: "#DCEBFA",
    margin: 5,
    minHeight: 125,
  },

  header: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 12,
  },

  icon: {
    fontSize: 20,
    marginRight: 7,
  },

  title: {
    fontSize: 11,
    fontWeight: "600",
    color: "#7189A5",
  },

  value: {
    fontSize: 27,
    fontWeight: "bold",
    color: "#234B78",
  },

  subtitle: {
    fontSize: 11,
    color: "#5685B5",
    marginTop: 4,
  },
});
