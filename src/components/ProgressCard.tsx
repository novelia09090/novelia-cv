import { StyleSheet, Text, View } from "react-native";

type ProgressCardProps = {
  nama: string;
  persentase: number;
};

export default function ProgressCard({ nama, persentase }: ProgressCardProps) {
  return (
    <View style={styles.card}>
      <View style={styles.header}>
        <Text style={styles.nama}>{nama}</Text>
        <Text style={styles.percentage}>{persentase}%</Text>
      </View>

      <View style={styles.progressBackground}>
        <View style={[styles.progressFill, { width: `${persentase}%` }]} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#FFFFFF",
    padding: 15,
    borderRadius: 15,
    marginBottom: 12,
    borderWidth: 1,
    borderColor: "#DCEBFA",
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 10,
  },
  nama: {
    fontSize: 13,
    fontWeight: "600",
    color: "#234B78",
  },
  percentage: {
    fontSize: 13,
    fontWeight: "bold",
    color: "#5685B5",
  },
  progressBackground: {
    height: 9,
    backgroundColor: "#EAF3FF",
    borderRadius: 10,
    overflow: "hidden",
  },
  progressFill: {
    height: "100%",
    backgroundColor: "#5685B5",
    borderRadius: 10,
  },
});
